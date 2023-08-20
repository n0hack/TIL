import express from 'express';
import productController from './controller/products';

const router = express.Router();

router.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

router.post('/', productController.createProduct);

export default router;
