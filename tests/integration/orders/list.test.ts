import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import OrderModel from '../../../src/database/models/order.model';
import OrdersMock from '../../mocks/orders.mock';

chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Testa se o endpoint retorna um status 200', async () => {
    const ordersInstance = OrderModel.build(OrdersMock.ordersList[0]);
    sinon.stub(OrderModel, 'findAll')
      .resolves([ordersInstance]);

    const httpResponse = await chai.request(app).get('/orders');
    
    expect(httpResponse.status).to.equal(200);   
  });
});
