// routes/cartRoutes.js
const express = require('express');
const router = express.Router();
const {
  addToCart,
  getCartItems,
  updateCartItem,
  deleteFromCart
} = require('../controllers/cartController');

// Routes
router.get('/', getCartItems);              // ✅ GET all cart items
router.post('/', addToCart);                // ✅ POST add item to cart
router.put('/', updateCartItem);            // ✅ PUT update quantity
router.delete('/:id', deleteFromCart);      // ✅ DELETE remove item

module.exports = router;
