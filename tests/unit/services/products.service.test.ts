import { expect } from 'chai';
import sinon from 'sinon';
import ProductModel from '../../../src/database/models/product.model';
import productsMock from '../../mocks/products.mock';
import productsService from '../../../src/services/products.service';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });

  it('getAll - retorna um status SUCCESSFULL e um array', async function () {

    const productsInstance = ProductModel.build(productsMock.allProducts[0]);
    sinon.stub(ProductModel, 'findAll').resolves([productsInstance]);

    const productResponse = await productsService.getAll();

    expect(productResponse.status).to.eq('SUCCESSFUL');  
    expect(productResponse.data).to.be.instanceOf(Array);
  });

  it('insertProduct - retorna um status CREATED e um objeto', async function () {

    const productsInstance = ProductModel.build(productsMock.insertProduct);
    sinon.stub(ProductModel, 'create').resolves(productsInstance);

    const productResponse = await productsService.insertProduct(productsMock.insertProduct);

    expect(productResponse.status).to.eq('CREATED');  
    expect(productResponse.data).to.be.instanceOf(Object);
  });

  // it('insertProduct - retorna um status INVALID_DATA e a mensagem ""name" is required" se não existir um nome no corpo da requisição', async function () {

  //   const productsInstance = ProductModel.build(productsMock.productWhitoutName);
  //   sinon.stub(ProductModel, 'create').resolves(productsInstance);

  //   const productResponse = await productsService.insertProduct(productsMock.productWhitoutName);

  //   expect(productResponse.status).to.eq('INVALID_DATA');  
  //   expect(productResponse.data).to.be.deep.equal({ message: '"name" is required' });
  // });

  // it('insertProduct - retorna um status UNPROCESSABLE_ENTITY e a mensagem ""name" must be a string" se o nome não for do tipo string', async function () {

  //   const productsInstance = ProductModel.build(productsMock.insertProduct);
  //   sinon.stub(ProductModel, 'create').resolves(productsInstance);

  //   const productResponse = await productsService.insertProduct(productsMock.productWrongTypeName);

  //   expect(productResponse.status).to.eq('UNPROCESSABLE_ENTITY');  
  //   expect(productResponse.data).to.be.deep.equal({ message: '"name" must be a string' });
  // });

  // it('insertProduct - retorna um status UNPROCESSABLE_ENTITY e a mensagem ""name" length must be at least 3 characters long" se o nome não tiver mais 3 ou mais caracteres', async function () {

  //   const productsInstance = ProductModel.build(productsMock.insertProduct);
  //   sinon.stub(ProductModel, 'create').resolves(productsInstance);

  //   const productResponse = await productsService.insertProduct(productsMock.productWrongLengthName);

  //   expect(productResponse.status).to.eq('UNPROCESSABLE_ENTITY');  
  //   expect(productResponse.data).to.be.deep.equal({ message: '"name" length must be at least 3 characters long' });
  // });

  // it('insertProduct - retorna um status INVALID_DATA e a mensagem ""price" is required" se não existir um price no corpo da requisição', async function () {

  //   const productsInstance = ProductModel.build(productsMock.insertProduct);
  //   sinon.stub(ProductModel, 'create').resolves(productsInstance);

  //   const productResponse = await productsService.insertProduct(productsMock.productWhitoutPrice);

  //   expect(productResponse.status).to.eq('INVALID_DATA');  
  //   expect(productResponse.data).to.be.deep.equal({ message: '"price" is required' });
  // });

  // it('insertProduct - retorna um status UNPROCESSABLE_ENTITY e a mensagem ""price" must be a string" se o price não for do tipo string', async function () {

  //   const productsInstance = ProductModel.build(productsMock.insertProduct);
  //   sinon.stub(ProductModel, 'create').resolves(productsInstance);

  //   const productResponse = await productsService.insertProduct(productsMock.productWrongTypePrice);

  //   expect(productResponse.status).to.eq('UNPROCESSABLE_ENTITY');  
  //   expect(productResponse.data).to.be.deep.equal({ message: '"price" must be a string' });
  // });

  // it('insertProduct - retorna um status UNPROCESSABLE_ENTITY e a mensagem ""price" length must be at least 3 characters long" se o price não tiver mais 3 ou mais caracteres', async function () {

  //   const productsInstance = ProductModel.build(productsMock.insertProduct);
  //   sinon.stub(ProductModel, 'create').resolves(productsInstance);

  //   const productResponse = await productsService.insertProduct(productsMock.productWrongLengthPrice);

  //   expect(productResponse.status).to.eq('UNPROCESSABLE_ENTITY');  
  //   expect(productResponse.data).to.be.deep.equal({ message: '"price" length must be at least 3 characters long' });
  // });
});
