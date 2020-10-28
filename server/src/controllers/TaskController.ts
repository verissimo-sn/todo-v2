import { Request, response, Response } from 'express';

import knex from '../database/connection';

class TaskController {
  //LIST ALL TASKS OK
  async index(req: Request, res: Response) {
    const tasks = await knex('tasks').select('*');

    return res.json(tasks);
  }

  //LIST ONE TASK OK
   async show(req: Request, res: Response) {
    const { id } = req.params;

    const task =  await knex('tasks')
      .where('id', id)
      .first();

    if(task <= 0) {
      return res.status(400).json({ message: "Task not found" });
    }

    const priority = await knex('priorities')
      .join('task_priorities', 'priorities.id', '=', 'task_priorities.priority_id')
      .where('task_priorities.task_id', id)
      .select('priorities.name');

    return res.json({ task, priority });
  }

  //CREATE A NEW TASK OK
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

    await trx.commit();

    return res.json({
      id: task_id,
      ...task,
    });
  }

  //UPDATE A TASK
  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, description, priority } = req.body;

    const trx = await knex.transaction();

    const updatedTask = {
      name,
      description,
      priority
    };

    const task = await trx('tasks')
      .where('id', id)
      .update(updatedTask);

    if(task <=0) {
      return res.status(401).json({ message: "Task not found" });
    }

    const taskPriotity = [{
      task_id: id,
      priority_id: priority,
    }];

    await trx('task_priorities').insert(taskPriotity);

    await trx.commit();

    return res.status(201).json({id, ...updatedTask});

  }

  //DELETE A TASK OK
  async delete(req: Request, res: Response) {
    const { id } = req.params;

    const task = await knex('tasks')
      .where('id', id)
      .first()
      .delete();

    if(task <=0) {
      return res.status(401).json({ error: "Task not found" });
    }

    return res.status(204).send();
  }

}

export default new TaskController;