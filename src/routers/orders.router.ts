import { Router } from 'express';
import ordersControllers from '../controllers/orders.controllers';
import jwtValidate from '../middlewares/jwtValidate';
import userValidate from '../middlewares/userValidate';
import productsValidate from '../middlewares/productsValidate';

const ordersRouter = Router();

ordersRouter.get('/orders', ordersControllers.getAll);
ordersRouter.post(
  '/orders',
  jwtValidate,
  userValidate,
  productsValidate,
  ordersControllers.newOrder,
);

export default ordersRouter;