require('dotenv').config();
const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');

const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5100;

// ✅ Use CORS to allow requests from your frontend
app.use(cors({
  origin: "http://localhost:5173", // 👈 Allow your frontend during development
  credentials: true,
}));

// ✅ Middleware to parse JSON
app.use(express.json());

// ✅ Test route
app.get('/', (req, res) => {
  res.send('ShoppyGlobe API is running...');
});

// ✅ API Routes
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/auth', authRoutes);

// ✅ MongoDB connection and server start
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection failed:', err);
  });
