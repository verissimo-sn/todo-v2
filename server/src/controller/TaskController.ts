import { Request, Response } from 'express';

export default {
  index(req: Request, res: Response) {
    return res.json({ message: 'Helo To-do v02' });
  },
}