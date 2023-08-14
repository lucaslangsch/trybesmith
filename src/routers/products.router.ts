import { Router } from 'express';
import productsController from '../controllers/products.controller';
import nameProductValidate from '../middlewares/nameProductValidate';
import priceProductValidate from '../middlewares/priceProductValidate';

const productsRouter = Router();

productsRouter.get('/products', productsController.getAll);
productsRouter.post(
  '/products',
  nameProductValidate,
  priceProductValidate,
  productsController.insertProduct,
);

export default productsRouter;