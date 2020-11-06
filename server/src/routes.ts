import { Router } from 'express';

const routes = Router();

import TaskController from './controllers/TaskController';
import PriorityController from './controllers/PriorityController';

routes.get('/priorities', PriorityController.index);

routes.get('/tasks', TaskController.index);
routes.get('/tasks/:id', TaskController.show);
routes.put('/tasks/:id', TaskController.update);
routes.patch('/tasks/:id', TaskController.patch);
routes.post('/tasks', TaskController.create);
routes.delete('/tasks/:id', TaskController.delete);

export default routes;