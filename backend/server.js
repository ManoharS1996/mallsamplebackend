const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Dummy product data
const products = [
  { id: 1, name: 'Product 1', price: 1000, image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg' },
  { id: 2, name: 'Product 2', price: 1500, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D=jpg' },
  { id: 3, name: 'Product 3', price: 2000, image: 'https://plus.unsplash.com/premium_photo-1675896084254-dcb626387e1e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D=jpg' },
  { id: 4, name: 'Product 4', price: 3000, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D=jpg' },
  { id: 5, name: 'Product 5', price: 4500, image: 'https://images.pexels.com/photos/3907507/pexels-photo-3907507.jpeg?cs=srgb&dl=pexels-alexazabache-3907507.jpg&fm=jpg' },
  { id: 6, name: 'Product 6', price: 6000, image: 'https://cdn.pixabay.com/photo/2021/02/18/09/26/coca-cola-6026672_640.jpg' },
  { id: 7, name: 'Product 7', price: 7000, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D=jpg' },
  { id: 8, name: 'Product 8', price: 8500, image: 'https://www.apple.com/newsroom/images/product/iphone/standard/iphone8_iphone8plus_product_red_front_back_041018_big.jpg.large.jpg' },
  { id: 9, name: 'Product 9', price: 10000, image: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3BmLXMxMDgtcG0tNDExMy1tb2NrdXAuanBn.jpg' },
  { id: 10, name: 'Product 10', price: 11000, image: 'https://png.pngtree.com/png-vector/20191120/ourmid/pngtree-cosmetic-serum-pipette-bottle-package-png-image_2009766.jpg' },
  { id: 11, name: 'Product 11', price: 11500, image: 'https://www.apple.com/newsroom/images/product/iphone/standard/iphone8plus_product_red_front_041018_carousel.jpg.large.jpg' },
  { id: 12, name: 'Product 12', price: 12000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL4_7yk6CE7VB4SQ2VIP8yGOzte7X8dCUTpg&s' },
  // Add more products here
];

// API endpoint to get products
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
