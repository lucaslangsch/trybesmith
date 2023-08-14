import { expect } from 'chai';
import sinon from 'sinon';
import UserModel from '../../../src/database/models/user.model';
import usersMock from '../../mocks/users.mock';
import userService from '../../../src/services/users.service';

describe('LoginService', function () {
  beforeEach(function () { sinon.restore(); });

  it('login - retorna um status SUCCESSFULL', async function () {

    const userInstance = UserModel.build(usersMock.userComplete);
    sinon.stub(UserModel, 'findOne').resolves(userInstance);

    const userResponse = await userService.getUser(usersMock.userLogin);

    expect(userResponse.status).to.eq('SUCCESSFUL');
  });

  it('login - retorna um status UNAUTHORIZED', async function () {

    const userInstance = UserModel.build(usersMock.userComplete);
    sinon.stub(UserModel, 'findOne').resolves(userInstance);

    const userResponse = await userService.getUser(usersMock.userLoginWrongPassword);
    
    expect(userResponse.status).to.eq('UNAUTHORIZED');
    expect(userResponse.data).to.be.deep.equal({ message: 'Username or password invalid' });
  });

});
