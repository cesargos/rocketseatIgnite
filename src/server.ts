import express from 'express';
import 'reflect-metadata';

import { router } from './routers';

import './database';

import './shared/container';

const app = express();

app.use(express.json());
// app.get('/teste', (req, res) => res.send('ok'));
app.use(router);

app.listen(3333, () => console.log('Server is running!'));
