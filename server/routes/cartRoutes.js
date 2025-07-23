const express = require('express');
const router = express.Router();
const {
  addToCart,
  getCartItems,
  updateCartItem,
  deleteFromCart
} = require('../controllers/cartController');

const verifyToken = require('../middleware/verifyToken'); 

// Protect all cart routes
router.get('/', verifyToken, getCartItems);              
router.post('/', verifyToken, addToCart);                
router.put('/', verifyToken, updateCartItem);            
router.delete('/:id', verifyToken, deleteFromCart);      

module.exports = router;
