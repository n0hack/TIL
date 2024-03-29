import express from 'express';
import productController from './controller/products';

const router = express.Router();

// router.use((req, res, next) => {
//   console.log('Time:', Date.now());
//   next();
// });

router.post('/', productController.createProduct);
router.get('/', productController.getProducts);
router.get('/:productId', productController.getProductById);
router.put('/:productId', productController.updateProduct);
router.delete('/:productId', productController.deleteProduct);

export default router;
