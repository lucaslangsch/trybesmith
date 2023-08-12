import ProductModel, {
  ProductInputtableTypes, ProductSequelizeModel } from '../database/models/product.model';
import { ServiceResponse } from '../types/ServiceResponse';

async function getAll():Promise<ServiceResponse<ProductSequelizeModel[]>> {
  const products = await ProductModel.findAll();
  return { status: 'SUCCESSFUL', data: products };
}

async function insertProduct(product:ProductInputtableTypes):
Promise<ServiceResponse<ProductSequelizeModel>> {
  const newProduct = await ProductModel.create(product);
  return { status: 'CREATED', data: newProduct };
}

export default {
  getAll,
  insertProduct,
};