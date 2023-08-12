import { Router } from 'express';
import ordersControllers from '../controllers/orders.controllers';

const ordersRouter = Router();

ordersRouter.get('/orders', ordersControllers.getAll);

export default ordersRouter;