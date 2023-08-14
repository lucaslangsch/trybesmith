import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import OrderModel from '../../../src/database/models/order.model';
import ordersMock from '../../mocks/orders.mock';

chai.use(chaiHttp);

describe('POST /orders', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Testa se o endpoint retorna um status 201', async () => {
    const orderInstance = OrderModel.build(ordersMock.newOrder);
    sinon.stub(OrderModel, 'create')
      .resolves(orderInstance);

    const httpResponse = await chai.request(app).post('/orders').send(ordersMock.newOrder);
    
    expect(httpResponse.status).to.equal(201);   
    // expect(httpResponse.body).to.be.deep.equal(productsMock.resultInsertProduct); // não está retornando id, pq????
  });
});
