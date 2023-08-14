import { expect } from 'chai';
import sinon from 'sinon';
import OrderModel from '../../../src/database/models/order.model';
import ordersMock from '../../mocks/orders.mock';
import orderService from '../../../src/services/orders.service';
import UserModel from '../../../src/database/models/user.model';
import usersMock from '../../mocks/users.mock';

describe('OrdersService', function () {
  beforeEach(function () { sinon.restore(); });

  it('getAll - retorna um status SUCCESSFULL e um array', async function () {

    const ordersInstance = OrderModel.build(ordersMock.ordersList[0]);
    sinon.stub(OrderModel, 'findAll').resolves([ordersInstance]);

    const orderResponse = await orderService.getAll();

    expect(orderResponse.status).to.eq('SUCCESSFUL');  
    expect(orderResponse.data).to.be.instanceOf(Array);
  });

  it('newOrder - retorna um status CREATED e um objeto', async function () {

    const ordersInstance = OrderModel.build(ordersMock.newOrder);
    const userInstance = UserModel.build(usersMock.userComplete)
    sinon.stub(OrderModel, 'create').resolves(ordersInstance);
    sinon.stub(UserModel, 'findOne').resolves(userInstance);

    const orderResponse = await orderService.newOrder(ordersMock.newOrder);

    expect(orderResponse.status).to.eq('CREATED');
  });

  it('newOrder - retorna um status NOT_FOUND se passado um userId inexistente', async function () {

    const ordersInstance = OrderModel.build(ordersMock.newOrder);
    UserModel.build(usersMock.userComplete);
    sinon.stub(OrderModel, 'create').resolves(ordersInstance);
    sinon.stub(UserModel, 'findOne').resolves();

    const orderResponse = await orderService.newOrder({
      id: 1,
      userId: 47,
      productIds: [1, 2]
    });

    expect(orderResponse.status).to.eq('NOT_FOUND');
  });
});
