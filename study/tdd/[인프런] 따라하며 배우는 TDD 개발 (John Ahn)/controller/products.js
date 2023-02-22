const productModel = require('../model/Product');

exports.createProduct = async (req, res, next) => {
  try {
    const createdProduct = await productModel.create(req.body);
    res.status(201).json(createdProduct);
  } catch (error) {
    // 비동기 함수에서 에러가 발생하면 next()를 호출해서 에러를 처리해야 함
    next(error);
  }
};
