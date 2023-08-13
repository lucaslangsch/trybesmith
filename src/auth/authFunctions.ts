import jwt, { SignOptions } from 'jsonwebtoken';
import { Payload } from '../types/Payload';

const secret = process.env.JWT_SECRET || 'xablau';

const jwtConfig: SignOptions = { algorithm: 'HS256', expiresIn: '1h' };

const createToken = (payload:Payload):string => jwt.sign(payload, secret, jwtConfig);

// const getPayload = (token:string):any => jwt.verify(token, secret);

export default { createToken };