import { Router } from 'express';

const routes = Router();

import TaskController from './controllers/TaskController';
import PriorityController from './controllers/PriorityController';

routes.get('/priorities', PriorityController.index);

routes.get('/tasks', TaskController.index);
routes.get('/tasks/:id', TaskController.show);
routes.post('/tasks', TaskController.create);

export default routes;