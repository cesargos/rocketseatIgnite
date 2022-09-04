import { Router } from 'express';

import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRouters = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRouters.post('/', (request, response) => {
  const { name, description } = request.body;

  const categoryAlreadyExists = categoriesRepository.findByName(name);
  if (categoryAlreadyExists)
    return response.status(400).json({ error: 'Category already exists!' });

  categoriesRepository.create({ name, description });

  return response.status(201).send();
});

categoriesRouters.get('/', (request, response) => {
  const allCategories = categoriesRepository.list();

  return response.status(200).json(allCategories);
});

export { categoriesRouters };
