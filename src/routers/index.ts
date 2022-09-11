import { Router } from 'express';

import { categoriesRoutes } from './categories.routers';
import { specificationsRoutes } from './specifications.routes';

const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/specifications', specificationsRoutes);
router.get('/teste', (req, res) => res.send('ok'));

export { router };
