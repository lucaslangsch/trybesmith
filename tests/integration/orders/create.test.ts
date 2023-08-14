import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import OrderModel from '../../../src/database/models/order.model';
import ordersMock from '../../mocks/orders.mock';
import jwt from 'jsonwebtoken';
import UserModel from '../../../src/database/models/user.model';
import usersMock from '../../mocks/users.mock';

chai.use(chaiHttp);

describe('POST /orders', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Testa se o endpoint retorna um status 201', async () => {
    const orderInstance = OrderModel.build(ordersMock.newOrder);
    const userInstance = UserModel.build(usersMock.userComplete)
    sinon.stub(OrderModel, 'create')
      .resolves(orderInstance);
    sinon.stub(UserModel, 'findOne')
      .resolves(userInstance)
    sinon.stub(jwt, 'verify').resolves()

    const httpResponse = await chai.request(app).post('/orders').send(ordersMock.newOrder).set('Authorization', 'Bearer 123456');

    expect(httpResponse.status).to.equal(201); 
  });
});
