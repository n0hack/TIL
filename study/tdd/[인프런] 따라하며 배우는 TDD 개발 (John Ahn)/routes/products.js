const express = require('express');
const productController = require('../controller/products');

const router = express.Router();

router.post('/', productController.createProduct);

module.exports = router;
