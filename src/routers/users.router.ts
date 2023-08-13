import { Router } from 'express';
import usersControllers from '../controllers/users.controllers';
import validateLogin from '../middlewares/loginValidate';

const usersRouter = Router();

usersRouter.post('/login', validateLogin, usersControllers.getUser);

export default usersRouter;