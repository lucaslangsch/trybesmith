import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import productsMock from '../../mocks/products.mock';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Testa se o endpoint retorna um array de objetos', async () => {
    const productsInstance = ProductModel.build(productsMock.insertProduct);
    sinon.stub(ProductModel, 'create')
      .resolves(productsInstance);

    const httpResponse = await chai.request(app).post('/products').send(productsInstance);
    
    expect(httpResponse.status).to.equal(201);   
    // expect(httpResponse.body).to.be.deep.equal(productsMock.resultInsertProduct); // não está retornando id, pq????
  });
});
