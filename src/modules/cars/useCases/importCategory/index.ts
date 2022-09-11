import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ImportCategoryController } from './ImportCategoryController';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';

const categoryRepositories = CategoriesRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(categoryRepositories);
const importCategoryController = new ImportCategoryController(
  importCategoryUseCase
);

export { importCategoryController };
