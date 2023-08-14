import jwt, { Jwt, JwtPayload, SignOptions, VerifyOptions } from 'jsonwebtoken';
// import { JwtTypePayload } from '../types/JwtPayload';
import { Payload } from '../types/Payload';

const secret = process.env.JWT_SECRET || 'xablau';

const jwtConfig: SignOptions = { algorithm: 'HS256', expiresIn: '1h' };
const verifyOptions: VerifyOptions = { algorithms: ['HS256'] };

const createToken = (payload:Payload):string => jwt.sign(payload, secret, jwtConfig);

const getPayload = (token:string): Jwt | JwtPayload | string => (
  jwt.verify(token, secret, verifyOptions)
);

export default { createToken, getPayload };