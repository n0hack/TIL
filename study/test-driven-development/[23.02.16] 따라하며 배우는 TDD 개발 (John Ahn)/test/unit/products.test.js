const productController = require('../../controller/products');
const productModel = require('../../model/Product');
const httpMocks = require('node-mocks-http');
const newProduct = require('../data/new-product.json');

productModel.create = jest.fn();

describe('Product Controller Create', () => {
  test('should have a createProduct function', () => {
    expect(typeof productController.createProduct).toBe('function');
  });

  test('should call productModel.create', () => {
    let req = httpMocks.createRequest();
    let res = httpMocks.createResponse();
    let next = null;

    req.body = newProduct;

    // 단위 테스트이기 때문에 실제 모델에 영향을 주어서는 안 됨 (Mock을 통해 Spy 심기 - 추적 가능)
    productController.createProduct(req, res, next);
    expect(productModel.create).toBeCalledWith(newProduct);
  });
});
