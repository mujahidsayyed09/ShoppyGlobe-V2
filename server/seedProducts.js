// seedProducts.js

require('dotenv').config();
const mongoose = require('mongoose');
const axios = require('axios');
const Product = require('./models/Product');

const MONGO_URL = process.env.MONGO_URL;

const DATA_URL = 'https://dummyjson.com/products'; 

async function seedProducts() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log('✅ Connected to MongoDB');

    const response = await axios.get(DATA_URL);
    const productsFromApi = response.data.products; 

    const formattedProducts = productsFromApi.map((item) => ({
      name: item.title,
      description: item.description,
      price: item.price,
      stockQuantity: item.stock || 10,
      image: item.thumbnail || item.image, // fallback
    }));

    await Product.deleteMany();
    const inserted = await Product.insertMany(formattedProducts);

    console.log(`✅ ${inserted.length} products inserted into MongoDB`);
    process.exit();
  } catch (err) {
    console.error('❌ Failed to seed products:', err);
    process.exit(1);
  }
}

seedProducts();
