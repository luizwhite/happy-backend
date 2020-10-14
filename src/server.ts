import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
// Em produção colocar a prop "origin" e definir o endereço do nosso front-end

app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
// dirname -> server.ts
app.use(errorHandler);

app.listen(3333);