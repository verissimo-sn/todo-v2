import { Router } from 'express';

const routes = Router();

import TaskController from './controller/TaskController';

routes.get('/', TaskController.index);

export default routes;