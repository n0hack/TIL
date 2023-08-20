import { RequestHandler } from 'express';
import productModel from '../model/Product';

const createProduct: RequestHandler = (req, res, next) => {
  const createdProduct = productModel.create(req.body);
  res.status(201).json(createdProduct);
};

const productController = {
  createProduct,
};

export default productController;
