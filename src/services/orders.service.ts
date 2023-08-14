import sequelize from '../database/models/index';
import OrderModel, { OrderSequelizeModel } from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import UserModel from '../database/models/user.model';
import { OrderById } from '../types/OrderById';
import { ServiceResponse } from '../types/ServiceResponse';

async function getAll():Promise<ServiceResponse<OrderSequelizeModel[]>> {
  const orders = await OrderModel.findAll({
    include: [
      { model: ProductModel, as: 'productIds', attributes: [] },
    ],
    attributes: [
      'id', 
      'userId',
      [sequelize.fn('JSON_ARRAYAGG', sequelize.col('productIds.id')), 'productIds'],
    ],
    group: ['Order.id'],
    raw: true,
  });
  return { status: 'SUCCESSFUL', data: orders };
}

async function getById(id:number):Promise<ServiceResponse<any>> {
  const order = await OrderModel.findByPk(id, {
    include: [
      { model: ProductModel, as: 'productIds', attributes: [] },
    ],
    attributes: [
      'userId',
      [sequelize.fn('JSON_ARRAYAGG', sequelize.col('productIds.id')), 'productIds'],
    ],
    group: ['Order.id'],
    raw: true,
  });
  return { status: 'SUCCESSFUL', data: order };
}

async function newOrder(req: OrderById):Promise<ServiceResponse<any>> {
  const user = await UserModel.findOne({ where: { id: req.userId } });
  if (!user) {
    return { status: 'NOT_FOUND', data: { message: '"userId" not found' } };
  }

  const order = await OrderModel.create({ userId: req.userId });
  const updatedProducts = req.productIds.map((productId:number) => ProductModel.update({ 
    orderId: order.dataValues.id }, { where: { id: productId } }));
  await Promise.all(updatedProducts);

  const orderUpdated = await getById(order.dataValues.id);
  return { status: 'CREATED', data: orderUpdated.data };
}

export default {
  getAll,
  newOrder,
};
