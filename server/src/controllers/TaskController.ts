import { Request, Response } from 'express';

import knex from '../database/connection';

class TaskController {
  //LIST ALL TASKS
  async index(req: Request, res: Response) {
  
  }

  //LIST ONE TASK
  show(req: Request, res: Response) {

  }

  //CREATE A NEW TASK
  async create(req: Request, res: Response) {
    const { 
      name,
      description,
      priority
    } = req.body;

    const trx = await knex.transaction();

    const task = {
      name,
      description,
      priority
    }

    const id = await trx('tasks').insert(task);

    const task_id = id[0];

    const taskPriotity = [{
      task_id,
      priority_id: priority,
    }];
    
    await trx('task_priorities').insert(taskPriotity);

    return res.json({
      id: task_id,
      ...task,
    });
  }

  //DELETE A TASK
  delete(req: Request, res: Response) {

  }
}

export default new TaskController;