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

const updateProduct: RequestHandler = async (req, res, next) => {
  try {
    const updatedProduct = await productModel.findByIdAndUpdate(req.params.productId, req.body, { new: true });
    if (updatedProduct) {
      res.status(200).json(updatedProduct);
    } else {
      res.status(404).send();
    }
  } catch (e) {
    next(e);
  }
};

const deleteProduct: RequestHandler = async (req, res, next) => {
  try {
    const deletedProduct = await productModel.findByIdAndDelete(req.params.productId);
    if (deletedProduct) {
      res.status(200).json(deletedProduct);
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
  updateProduct,
  deleteProduct,
};

export default productController;
