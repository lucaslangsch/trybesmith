import { Router } from 'express';
import productsController from '../controllers/products.controller';

const productsRouter = Router();

productsRouter.get('/products', productsController.getAll);
productsRouter.post('/products', productsController.insertProduct);

export default productsRouter;