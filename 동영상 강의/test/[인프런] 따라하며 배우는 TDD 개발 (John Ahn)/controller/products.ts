import { RequestHandler } from 'express';
import productModel from '../model/Product';

const createProduct: RequestHandler = async (req, res, next) => {
  try {
    const createdProduct = await productModel.create(req.body);
    res.status(201).json(createdProduct);
  } catch (e) {
    next(e);
  }
};

const getProducts: RequestHandler = async (req, res, next) => {
  try {
    const allProducts = await productModel.find({});
    res.status(200).json(allProducts);
  } catch (e) {
    next(e);
  }
};

const getProductById: RequestHandler = async (req, res, next) => {
  try {
    const product = await productModel.findById(req.params.productId);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).send();
    }
  } catch (e) {
    next(e);
  }
};

const productController = {
  createProduct,
  getProducts,
  getProductById,
};

export default productController;
