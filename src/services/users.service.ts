import bcrypt from 'bcryptjs';
import UserModel, { UserSequelizeModel } from '../database/models/user.model';
import { ServiceResponse } from '../types/ServiceResponse';
import { UserLogin } from '../types/UserLogin';
import JWT from '../auth/authFunctions';

async function getUser(req:UserLogin):Promise<ServiceResponse<UserSequelizeModel>> {
  const user = await UserModel.findOne({ where: { username: req.username } });
  if (!user) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }
  
  const pass = bcrypt.compareSync(req.password, user.dataValues.password);
  if (!pass) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }

  const { id, username } = user.dataValues;
  const payload = { id, username };
  const token = JWT.createToken(payload);
  // console.log(user);
  return { status: 'SUCCESSFUL', data: { token } };
}

export default {
  getUser,
};
