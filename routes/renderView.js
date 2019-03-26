const path = require('path');
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../' + '/views/page/index.html'));
});

router.get('/product', (req, res) => {
  res.sendFile(path.join(__dirname, '../' + '/views/page/product.html'));
});

router.get('/category', (req, res) => {
  res.sendFile(path.join(__dirname, '../' + '/views/page/category.html'));
});

router.get('/checkout', (req, res) => {
  res.sendFile(path.join(__dirname, '../' + '/views/page/checkout.html'));
});

router.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '../' + '/views/page/contact.html'));
});

router.get('/cart', (req, res) => {
  res.sendFile(path.join(__dirname, '../' + '/views/page/cart.html'));
});


// let path1 = path.join(__dirname, '../' + '/views/page/index.html');
// console.log(path1);

module.exports = router;