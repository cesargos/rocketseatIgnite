import express from 'express';

import { categoriesRoutes } from './routers/categories.routers';
import { specificationsRoutes } from './routers/specifications.routes';

const app = express();
app.use(express.json());

app.use('/categories', categoriesRoutes);
app.use('/specifications', specificationsRoutes);

app.listen(3333, () => console.log('Server is running!'));
