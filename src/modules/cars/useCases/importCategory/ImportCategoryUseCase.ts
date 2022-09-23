import { parse as csvParse } from 'csv-parse';
import { createReadStream, promises } from 'fs';
import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IImportCategory {
  name: string;
  description: string;
}

@injectable()
class ImportCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoryRepositories: ICategoriesRepository
  ) {}

  private loadCategories(
    file: Express.Multer.File
  ): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const categories: IImportCategory[] = [];
      const stream = createReadStream(file.path);
      const parseFile = csvParse();
      stream.pipe(parseFile);

      parseFile
        .on('data', async (line: Array<string>) => {
          const [name, description] = line;
          categories.push({
            name,
            description,
          });
        })
        .on('end', () => {
          promises.unlink(file.path);
          resolve(categories);
        })
        .on('error', (err) => reject(err));
    });
  }

  async execute(file: Express.Multer.File | undefined): Promise<void> {
    if (!file) throw new AppError('File precisa ser um arquivo válido');

    const categories = await this.loadCategories(file);
    categories.forEach(async (category) => {
      const { name, description } = category;
      const existeCategory = await this.categoryRepositories.findByName(name);
      if (!existeCategory) {
        this.categoryRepositories.create({
          name,
          description,
        });
      }
    });
  }
}
export { ImportCategoryUseCase };
