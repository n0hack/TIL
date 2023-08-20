import productController from '../../controller/products';
import productModel from '../../model/Product';

// 모델이 직접 영향이 받으면 안 되므로 Mocking을
productModel.create = jest.fn();

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

describe('Product Controller Create', () => {
  test('should have a createProduct function', () => {
    expect(typeof productController.createProduct).toBe('function');
  });

  test('should call ProductModel.create', async () => {
    const req: any = {
      body: { cardId: '22' },
    };
    const res: any = {};
    const next = jest.fn();

    productController.createProduct(req, res, next);
    expect(productModel.create).toBeCalled();
  });
});
