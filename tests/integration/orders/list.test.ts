import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import OrderModel from '../../../src/database/models/order.model';
import OrdersMock from '../../mocks/orders.mock';

chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Testa se o endpoint retorna um array de objetos', async () => {
    const productsInstance = OrderModel.build(OrdersMock.ordersList[0]);
    sinon.stub(OrderModel, 'findAll')
      .resolves([productsInstance]);

    const httpResponse = await chai.request(app).get('/orders');

    expect(httpResponse.status).to.equal(200);   
    expect(httpResponse.body).to.be.deep.equal([OrdersMock.ordersList[0]]);
  });
});
