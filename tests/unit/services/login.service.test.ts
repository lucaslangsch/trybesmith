import { expect } from 'chai';
import sinon from 'sinon';
import UserModel from '../../../src/database/models/user.model';
import usersMock from '../../mocks/users.mock';
import userService from '../../../src/services/users.service';
import userController from '../../../src/controllers/users.controllers';

describe('LoginService', function () {
  beforeEach(function () { sinon.restore(); });

  it('login - retorna um status SUCCESSFULL', async function () {

    const productsInstance = UserModel.build(usersMock.userComplete);
    sinon.stub(UserModel, 'findOne').resolves(productsInstance);

    const productResponse = await userService.getUser(usersMock.userLogin);

    expect(productResponse.status).to.eq('SUCCESSFUL');  
  });
});
