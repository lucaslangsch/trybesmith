import { Request, Response } from 'express';
import productsService from '../services/products.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function getAll(req: Request, res: Response): Promise<Response> {
  const serviceResponse = await productsService.getAll();
  return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
}

async function insertProduct(req: Request, res: Response): Promise<Response> {
  const product = req.body;
  const serviceResponse = await productsService.insertProduct(product);
  return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
}

export default {
  getAll,
  insertProduct,
};