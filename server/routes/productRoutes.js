const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProductById,
} = require('../controllers/productController');

// Routes
router.get('/', getAllProducts);        // GET /api/products
router.get('/:id', getProductById);     // GET /api/products/:id

module.exports = router;
