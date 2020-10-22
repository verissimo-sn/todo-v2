import { Request, Response } from 'express';

export default {
  //LIST ALL TASKS
  index(req: Request, res: Response) {
    return res.json({ message: 'Helo To-do v02' });
  },

  //LIST ONE TASK
  show(req: Request, res: Response) {

  },

  //CREATE A NEW TASK
  create(req: Request, res: Response) {

  },

  //DELETE A TASK
  delete(req: Request, res: Response) {

  }
}