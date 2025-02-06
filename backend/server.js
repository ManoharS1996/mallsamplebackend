const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Dummy product data
const products = [
  { id: 1, name: 'Product 1', price: 1000, image: 'https://www.shopify.com/stock-photos/photos/wrist-watches?c=product.jpg' },
  { id: 2, name: 'Product 2', price: 1500, image: 'product2.jpg' },
  { id: 3, name: 'Product 3', price: 2000, image: 'product3.jpg' },
  { id: 4, name: 'Product 4', price: 3000, image: 'product4.jpg' },
  { id: 5, name: 'Product 5', price: 4500, image: 'product5.jpg' },
  { id: 6, name: 'Product 6', price: 6000, image: 'product6.jpg' },
  { id: 7, name: 'Product 7', price: 7000, image: 'product7.jpg' },
  { id: 8, name: 'Product 8', price: 8500, image: 'product8.jpg' },
  { id: 9, name: 'Product 9', price: 10000, image: 'product9.jpg' },
  { id: 10, name: 'Product 10', price: 11000, image: 'product10.jpg' },
  { id: 11, name: 'Product 11', price: 11500, image: 'product11.jpg' },
  { id: 12, name: 'Product 12', price: 12000, image: 'product12.jpg' },
  // Add more products here
];

// API endpoint to get products
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
