import { RequestHandler } from 'express';
import productModel from '../model/Product';

const createProduct: RequestHandler = async (req, res, next) => {
  try {
    const createdProduct = await productModel.create(req.body);
    res.status(201).json(createdProduct);
  } catch (e) {
    res.status(400).send({ message: '잘못된 요청' });
  }
};

const productController = {
  createProduct,
};

export default productController;
