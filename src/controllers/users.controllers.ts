import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import usersService from '../services/users.service';

async function getUser(req: Request, res: Response): Promise<Response> {
  const serviceResponse = await usersService.getUser(req.body);
  return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
}

export default {
  getUser,
};