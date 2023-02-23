const productController = require('../../controller/products');
const productModel = require('../../model/Product');
const httpMocks = require('node-mocks-http');
const newProduct = require('../data/new-product.json');

productModel.create = jest.fn();
productModel.find = jest.fn();

let req, res, next;

// beforeEach는 각각의 테스트가 실행되기 전에 실행됨
beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = jest.fn();
});

describe('Product Controller Create', () => {
  beforeEach(() => {
    req.body = newProduct;
  });

  test('should have a createProduct function', () => {
    expect(typeof productController.createProduct).toBe('function');
  });

  test('should call productModel.create', async () => {
    // 단위 테스트이기 때문에 실제 모델에 영향을 주어서는 안 됨 (Mock을 통해 Spy 심기 - 추적 가능)
    await productController.createProduct(req, res, next);
    expect(productModel.create).toBeCalledWith(newProduct);
  });

  test('should return 201 response code', async () => {
    await productController.createProduct(req, res, next);
    expect(res.statusCode).toBe(201);
    expect(res._isEndCalled()).toBeTruthy();
  });

  test('should return json body in response', async () => {
    productModel.create.mockReturnValue(newProduct);
    await productController.createProduct(req, res, next);
    expect(res._getJSONData()).toStrictEqual(newProduct);
  });

  test('should handle errors', async () => {
    // 몽고 DB에서 처리하는 부분은 문제가 없다는 것을 가정
    // 단위 테스트는 바깥을 의존하면 안 되기 때문에, 에러 메시지를 Mock으로 임의 생성
    const errorMessage = { message: 'description property missing' };
    const rejectedPromise = Promise.reject(errorMessage);
    productModel.create.mockReturnValue(rejectedPromise);
    await productController.createProduct(req, res, next);
    expect(next).toBeCalledWith(errorMessage);
  });
});

describe('Product Controller Get', () => {
  test('should have a getProducts function', () => {
    expect(typeof productController.getProducts).toBe('function');
  });

  it('should call productModel.find({})', async () => {
    await productController.getProducts(req, res, next);
    expect(productModel.find).toHaveBeenCalledWith({});
  });
});
