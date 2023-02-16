const express = require('express');
const { hello } = require('../controller/products');

const router = express.Router();

router.get('/', hello);

module.exports = router;
