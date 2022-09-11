import { container } from 'tsyringe';

import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository';
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository';

// passa a interface do registro => ICategoriesRepository
container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository', // Aqui vc coloca o nome para o container que esta criando
  CategoriesRepository
);
