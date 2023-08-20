import { RequestHandler } from 'express';
import productModel from '../model/Product';

const createProduct: RequestHandler = (req, res, next) => {
  productModel.create(req.body);
};

const productController = {
  createProduct,
};

export default productController;
