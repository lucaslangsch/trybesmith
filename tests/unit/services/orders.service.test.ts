import { expect } from 'chai';
import sinon from 'sinon';
import OrderModel from '../../../src/database/models/order.model';
import ordersMock from '../../mocks/orders.mock';
import orderService from '../../../src/services/orders.service';

describe('OrdersService', function () {
  beforeEach(function () { sinon.restore(); });

  it('getAll - retorna um status SUCCESSFULL e um array', async function () {

    const ordersInstance = OrderModel.build(ordersMock.ordersList[0]);
    sinon.stub(OrderModel, 'findAll').resolves([ordersInstance]);

    const orderResponse = await orderService.getAll();

    expect(orderResponse.status).to.eq('SUCCESSFUL');  
    expect(orderResponse.data).to.be.instanceOf(Array);
  });
});
