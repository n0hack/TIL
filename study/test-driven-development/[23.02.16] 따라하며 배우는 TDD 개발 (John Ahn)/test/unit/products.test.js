const productController = require('../../controller/products');

describe('Product Controller Create', () => {
  test('should have a createProduct function', () => {
    expect(typeof productController.createProduct).toBe('function');
  });
});
