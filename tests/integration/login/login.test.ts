import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import UserModel from '../../../src/database/models/user.model';
import app from '../../../src/app';
import usersMock from '../../mocks/users.mock';

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Testa se o endpoint retorna um status 200 ao receber login e password corretos', async () => {
    const productsInstance = UserModel.build(usersMock.userComplete);
    sinon.stub(UserModel, 'findOne')
      .resolves(productsInstance);

    const httpResponse = await chai.request(app).post('/login').send(usersMock.userLogin);
    
    expect(httpResponse.status).to.equal(200);   
  });

  it('Testa se o endpoint retorna um status 401 ao receber login incorreto', async () => {
    const productsInstance = UserModel.build(usersMock.userComplete);
    sinon.stub(UserModel, 'findOne')
      .resolves(productsInstance);

    const httpResponse = await chai.request(app).post('/login').send(usersMock.userLoginWrongUsername);
    
    expect(httpResponse.status).to.equal(401);   
  });

  it('Testa se o endpoint retorna um status 401 ao receber password incorreto', async () => {
    const productsInstance = UserModel.build(usersMock.userComplete);
    sinon.stub(UserModel, 'findOne')
      .resolves(productsInstance);

    const httpResponse = await chai.request(app).post('/login').send(usersMock.userLoginWrongPassword);
    
    expect(httpResponse.status).to.equal(401);   
  });

  it('Testa se o endpoint retorna um status 400 se não receber o campo username', async () => {
    const productsInstance = UserModel.build(usersMock.userComplete);
    sinon.stub(UserModel, 'findOne')
      .resolves(productsInstance);

    const httpResponse = await chai.request(app).post('/login').send(usersMock.userLoginWithoutUsername);
    
    expect(httpResponse.status).to.equal(400);   
  });

  it('Testa se o endpoint retorna um status 400 se não receber o campo password', async () => {
    const productsInstance = UserModel.build(usersMock.userComplete);
    sinon.stub(UserModel, 'findOne')
      .resolves(productsInstance);

    const httpResponse = await chai.request(app).post('/login').send(usersMock.userLoginWithoutPassword);
    
    expect(httpResponse.status).to.equal(400);   
  });
});
