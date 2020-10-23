import { Request, Response } from 'express';
import knex from '../database/connection';

class PriorityController {
  async index(req: Request, res: Response) {
    const priorities = await knex('priorities').select('*');
  
    return res.json(priorities);
  }
}

export default new PriorityController;