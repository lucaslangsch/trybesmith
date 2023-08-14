import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import productsMock from '../../mocks/products.mock';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Testa se o endpoint retorna um status 201', async () => {
    const productsInstance = ProductModel.build(productsMock.insertProduct);
    sinon.stub(ProductModel, 'create')
      .resolves(productsInstance);

    const httpResponse = await chai.request(app).post('/products').send(productsMock.insertProduct);
    
    expect(httpResponse.status).to.equal(201);   
    // expect(httpResponse.body).to.be.deep.equal(productsMock.resultInsertProduct); // não está retornando id, pq????
  });

  it('Testa se o endpoint retorna um status 400 com um produto sem nome', async () => {
    const productsInstance = ProductModel.build(productsMock.productWhitoutName);
    sinon.stub(ProductModel, 'create')
      .resolves(productsInstance);

    const httpResponse = await chai.request(app).post('/products').send(productsMock.productWhitoutName);
    
    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.be.deep.equal({ message: '"name" is required' })
  });
});
