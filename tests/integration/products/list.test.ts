import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import productsMock from '../../mocks/products.mock';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Testa se o endpoint retorna um array de objetos', async () => {
    const productsInstance = ProductModel.build(productsMock.allProducts[0]);
    sinon.stub(ProductModel, 'findAll')
      .resolves([productsInstance]);

    const httpResponse = await chai.request(app).get('/products');

    expect(httpResponse.status).to.equal(200);   
    expect(httpResponse.body).to.be.deep.equal(productsMock.allProducts);
  });

  it('Testa se o endpoint retorna um array vazio caso o db esteja vazio', async () => {
    sinon.stub(ProductModel, 'findAll')
      .resolves([]);

    const httpResponse = await chai.request(app).get('/products');

    expect(httpResponse.status).to.equal(200);   
    expect(httpResponse.body).to.be.deep.equal([]);
  });
});
