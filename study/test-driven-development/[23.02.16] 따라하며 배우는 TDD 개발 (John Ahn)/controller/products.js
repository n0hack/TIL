const productModel = require('../model/Product');

exports.createProduct = (req, res, next) => {
  productModel.create(req.body);
};
