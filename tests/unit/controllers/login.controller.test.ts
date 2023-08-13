import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import UserModel from '../../../src/database/models/user.model';
import usersMock from '../../mocks/users.mock';
import userService from '../../../src/services/users.service';
import userController from '../../../src/controllers/users.controllers';

chai.use(sinonChai);

describe('LoginController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('login - retorna status 200', async function () {
    const productsInstance = UserModel.build(usersMock.userComplete);
    sinon.stub(userService, 'getUser').resolves({
      status: 'SUCCESSFUL',
      data: usersMock.userComplete.password,
    });

    await userController.getUser(req, res); 

    expect(res.status).to.have.been.calledWith(200);
  });
});
