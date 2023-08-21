import productController from '../../controller/products';
import productModel from '../../model/Product';
import httpMocks from 'node-mocks-http';
import newProduct from '../data/new-product.json';
import allProducts from '../data/all-products.json';

// describe('Describe: sum 함수', () => {
//   test('Test: 1 + 2 = 3이다.', () => {
//     expect(1 + 2).toBe(3);
//   });

//   test('Test: 1 + 2 = 4가 아니다.', () => {
//     expect(1 + 2).not.toBe(4);
//   });

//   test('Test: Mock 함수는 10을 반환한다.', () => {
//     const mockFunction = jest.fn();
//     mockFunction.mockReturnValue(10);

//     expect(mockFunction()).toBe(10);
//   });

//   test('Test: Mock 함수는 2번 호출된다.', () => {
//     const mockFunction = jest.fn();
//     mockFunction();
//     mockFunction();

//     expect(mockFunction).toBeCalledTimes(2);
//   });
// });

// 모델이 직접 영향이 받으면 안 되므로 Mocking을
productModel.create = jest.fn();
productModel.find = jest.fn();
productModel.findById = jest.fn();

const productId = '64e378c2e7932102e7eb8f55';
let req: ReturnType<typeof httpMocks.createRequest>;
let res: ReturnType<typeof httpMocks.createResponse>;
let next: jest.Mock;

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

  test('should call ProductModel.create', async () => {
    await productController.createProduct(req, res, next);
    // expect(productModel.create).toBeCalled();
    expect(productModel.create).toBeCalledWith(newProduct);
  });

  test('should return 201 response code', async () => {
    await productController.createProduct(req, res, next);
    expect(res.statusCode).toBe(201);
    // send()가 호출되었는지 확인
    expect(res._isEndCalled()).toBeTruthy();
  });

  test('should return json body in response', async () => {
    (productModel.create as jest.Mock).mockReturnValue(newProduct);
    await productController.createProduct(req, res, next);
    expect(res._getJSONData()).toStrictEqual(newProduct);
  });

  test('should handle errors', async () => {
    const errorMessage = { message: 'description property missing' };
    const rejectedPromise = Promise.reject(errorMessage);
    (productModel.create as jest.Mock).mockReturnValue(rejectedPromise);
    await productController.createProduct(req, res, next);
    expect(next).toBeCalledWith(errorMessage);
  });
});

describe('Product Controller Get', () => {
  test('should have a getProducts function', () => {
    expect(typeof productController.getProducts).toBe('function');
  });

  test('should call ProductModel.find({})', async () => {
    await productController.getProducts(req, res, next);
    expect(productModel.find).toHaveBeenCalledWith({});
  });

  test('should return 200 response', async () => {
    await productController.getProducts(req, res, next);
    expect(res.statusCode).toBe(200);
    expect(res._isEndCalled()).toBeTruthy();
  });

  test('should return json body in response', async () => {
    (productModel.find as jest.Mock).mockReturnValue(allProducts);
    await productController.getProducts(req, res, next);
    expect(res._getJSONData()).toStrictEqual(allProducts);
  });

  test('should handle errors', async () => {
    const errorMessage = { message: 'Error finding product data' };
    const rejectedPromise = Promise.reject(errorMessage);
    (productModel.find as jest.Mock).mockReturnValue(rejectedPromise);
    await productController.getProducts(req, res, next);
    expect(next).toHaveBeenCalledWith(errorMessage);
  });
});

describe('Product Controller GetById', () => {
  test('should have a getProductById', () => {
    expect(typeof productController.getProductById).toBe('function');
  });

  test('should call productModel.findById', async () => {
    req.params.productId = productId;
    await productController.getProductById(req, res, next);
    expect(productModel.findById).toBeCalledWith(productId);
  });

  test('should return json body and response code 200', async () => {
    (productModel.findById as jest.Mock).mockReturnValue(newProduct);
    await productController.getProductById(req, res, next);
    expect(res.statusCode).toBe(200);
    expect(res._getJSONData()).toStrictEqual(newProduct);
    expect(res._isEndCalled()).toBeTruthy();
  });

  test("should return 404 when item doesn't exist", async () => {
    (productModel.findById as jest.Mock).mockReturnValue(null);
    await productController.getProductById(req, res, next);
    expect(res.statusCode).toBe(404);
    expect(res._isEndCalled()).toBeTruthy();
  });

  test('should handle errors', async () => {
    const errorMessage = { message: 'error' };
    const rejectedPromise = Promise.reject(errorMessage);
    (productModel.findById as jest.Mock).mockReturnValue(rejectedPromise);
    await productController.getProductById(req, res, next);
    expect(next).toHaveBeenCalledWith(errorMessage);
  });
});
