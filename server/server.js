require('dotenv').config();
const express = require('express');
const cors = require('cors'); // ✅ only once
const mongoose = require('mongoose');

const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5100;

// ✅ Proper CORS setup for local + Netlify frontend
app.use(cors({
  origin: ['http://localhost:5173', 'https://shoppyglobev2.netlify.app'], // replace with your Netlify URL
  credentials: true
}));

// ✅ Middleware
app.use(express.json());

// ✅ Test route
app.get('/', (req, res) => {
  res.send('ShoppyGlobe API is running...');
});

// ✅ Routes
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/auth', authRoutes);

// ✅ MongoDB connection + start server
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
