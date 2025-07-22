require('dotenv').config();
const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');

const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5100;

// ✅ CORS Configuration
const corsOptions = {
  origin: ['http://localhost:5173', 'https://shoppyglobe.netlify.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};
app.use(cors(corsOptions));

// ✅ JSON parser
app.use(express.json());

// ✅ Test route
app.get('/', (req, res) => {
  res.send('ShoppyGlobe API is running...');
});

// ✅ Routes
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/auth', authRoutes);

// ✅ MongoDB Connection
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
