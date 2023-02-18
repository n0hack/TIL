const productController = require('../../controller/products');
const productModel = require('../../model/Product');

productModel.create = jest.fn();

describe('Product Controller Create', () => {
  test('should have a createProduct function', () => {
    expect(typeof productController.createProduct).toBe('function');
  });

  test('should call productModel.create', () => {
    // 단위 테스트이기 때문에 실제 모델에 영향을 주어서는 안 됨 (Mock을 통해 Spy 심기)
    productController.createProduct();
    expect(productModel.create).toBeCalled();
  });
});
