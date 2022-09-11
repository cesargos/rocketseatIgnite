import { inject, injectable } from 'tsyringe';

import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../../repositories/ICategoriesRepository';

@injectable() // indica que vai ser injetada em algo
class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository') // indica que esta recebendo uma injeção
    private categoriesRepository: ICategoriesRepository
  ) {}
  async execute({ name, description }: ICreateCategoryDTO): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name
    );
    if (categoryAlreadyExists) throw new Error('Category already exists!');

    this.categoriesRepository.create({ name, description });
  }
}
export { CreateCategoryUseCase };
