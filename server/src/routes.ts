import { Router } from 'express';

const routes = Router();

import TaskController from './controllers/TaskController';


routes.get('/tasks', TaskController.index);

export default routes;