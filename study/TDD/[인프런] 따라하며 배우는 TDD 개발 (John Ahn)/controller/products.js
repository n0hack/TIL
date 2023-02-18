const productModel = require('../model/Product');

exports.createProduct = async (req, res, next) => {
  const createdProduct = await productModel.create(req.body);
  res.status(201).json(createdProduct);
};
