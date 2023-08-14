import { Request, Response, NextFunction } from 'express';
import jwt from '../auth/authFunctions';

const jwtValidate = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({
        message: 'Token not found',
      });
    }
    const token = authorization.split(' ')[1];
    jwt.getPayload(token);

    // if (payload.id !== req.body.userId) {
    //   throw new Error();
    // }
    
    next();
  } catch (error) {
    res.status(401).json({
      message: 'Invalid token',
    });
  }
};

export default jwtValidate;
