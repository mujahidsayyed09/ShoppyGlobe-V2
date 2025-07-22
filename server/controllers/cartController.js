// controllers/cartController.js
const Cart = require('../models/Cart');

// Add item to cart
exports.addToCart = async (req, res) => {
  try {
    const { productId, name, image, price, quantity } = req.body;

    if (!productId || !name || !image || !price) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const existingItem = await Cart.findOne({ productId });

    if (existingItem) {
      existingItem.quantity += quantity || 1;
      await existingItem.save();
      return res.status(200).json(existingItem);
    }

    const newItem = new Cart({ productId, name, image, price, quantity });
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    console.error("Error adding to cart:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all cart items
exports.getCartItems = async (req, res) => {
  try {
    const items = await Cart.find().populate('productId');
    res.json(items);
  } catch (err) {
    console.error("Error fetching cart items:", err.message);
    res.status(500).json({ message: "Failed to fetch cart items" });
  }
};

// Update quantity
exports.updateCartItem = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    if (!productId || quantity === undefined) {
      return res.status(400).json({ message: "Missing productId or quantity" });
    }

    const item = await Cart.findOne({ productId });
    if (!item) return res.status(404).json({ message: "Item not found in cart" });

    item.quantity = quantity;
    const updatedItem = await item.save();

    res.json(updatedItem);
  } catch (err) {
    console.error("Error updating cart:", err.message);
    res.status(500).json({ message: "Failed to update cart item" });
  }
};

// Delete item from cart
exports.deleteFromCart = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await Cart.findByIdAndDelete(id);

    if (!deletedItem) return res.status(404).json({ message: "Item not found" });

    res.json({ message: "Item removed", _id: deletedItem._id });
  } catch (err) {
    console.error("Error deleting from cart:", err.message);
    res.status(500).json({ message: "Failed to delete item" });
  }
};
