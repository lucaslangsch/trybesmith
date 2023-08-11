import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import productsService from '../../../src/services/products.service';
import productsMock from '../../mocks/products.mock';
import productsController from '../../../src/controllers/products.controller';
import ProductModel from '../../../src/database/models/product.model';

chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('retorna status 200', async function () {
    const productsInstance = ProductModel.build(productsMock.allProducts[0]);
    sinon.stub(productsService, 'getAll').resolves({
      status: 'SUCCESSFUL',
      data: [productsInstance],
    });

    await productsController.getAll(req, res); 

    expect(res.status).to.have.been.calledWith(200);
  });
});
