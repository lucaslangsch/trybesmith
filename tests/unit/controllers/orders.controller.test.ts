import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import OrderModel from '../../../src/database/models/order.model';
import ordersMock from '../../mocks/orders.mock';
import orderService from '../../../src/services/orders.service';
import ordersController from '../../../src/controllers/orders.controllers';

chai.use(sinonChai);

describe('OrdersController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('getAll - retorna status 200', async function () {
    const orderInstance = OrderModel.build(ordersMock.ordersList[0]);
    sinon.stub(orderService, 'getAll').resolves({
      status: 'SUCCESSFUL',
      data: [orderInstance],
    });

    await ordersController.getAll(req, res); 

    expect(res.status).to.have.been.calledWith(200);
  });

  it('newOrder - retorna status 201', async function () {
    const orderInstance = OrderModel.build(ordersMock.newOrder);
    sinon.stub(orderService, 'newOrder').resolves({
      status: 'SUCCESSFUL',
      data: [orderInstance],
    });

    await ordersController.newOrder(req, res); 

    expect(res.status).to.have.been.calledWith(200);
  });
});
