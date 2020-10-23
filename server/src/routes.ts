import { Router } from 'express';

const routes = Router();

import TaskController from './controllers/TaskController';
import PriorityController from './controllers/PriorityController';

routes.get('/priorities', PriorityController.index);

routes.post('/task', TaskController.create);

export default routes;