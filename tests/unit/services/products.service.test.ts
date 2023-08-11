import { expect } from 'chai';
import sinon from 'sinon';
import ProductModel from '../../../src/database/models/product.model';
import productsMock from '../../mocks/products.mock';
import productsService from '../../../src/services/products.service';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });

  it('retorna um status SUCCESSFULL e um array', async function () {

    const productsInstance = ProductModel.build(productsMock.allProducts[0]);
    sinon.stub(ProductModel, 'findAll').resolves([productsInstance]);

    const productResponse = await productsService.getAll();

    expect(productResponse.status).to.eq('SUCCESSFUL');  
    expect(productResponse.data).to.be.instanceOf(Array);
  });
});
