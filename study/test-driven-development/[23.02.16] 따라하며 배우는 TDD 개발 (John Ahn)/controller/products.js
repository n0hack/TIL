const productModel = require('../model/Product');

exports.createProduct = () => {
  productModel.create();
};
