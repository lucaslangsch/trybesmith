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

async function newOrder(req: OrderById):Promise<ServiceResponse<OrderById>> {
  const user = await UserModel.findOne({ where: { id: req.userId } });
  if (!user) {
    return { status: 'NOT_FOUND', data: { message: '"userId" not found' } };
  }
  await sequelize.transaction(async (t) => {
    const order = await OrderModel.create({ userId: req.userId }, { transaction: t });
    const updatedProducts = req.productIds.map((productId:number) => ProductModel.update({ 
      orderId: order.dataValues.id }, { where: { id: productId } }));
    await Promise.all(updatedProducts);

    return { status: 'CREATED', data: { userId: req.userId, productIds: req.productIds } };
  });
  return { status: 'CREATED', data: { userId: req.userId, productIds: req.productIds } };
}

export default {
  getAll,
  newOrder,
};
