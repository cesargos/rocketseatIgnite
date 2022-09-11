import { getRepository, Repository } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

import { Category } from '../../entities/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const id = uuidV4();
    const category = await this.repository.save({
      id,
      description,
      name,
    });
    await this.repository.create(category);
  }

  async list(): Promise<Category[] | undefined> {
    const categories = await this.repository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category | undefined> {
    // Select * from categories where name = "name" limit 1
    const category = await this.repository.findOne({ name });
    return category;
  }
}

export { CategoriesRepository };
