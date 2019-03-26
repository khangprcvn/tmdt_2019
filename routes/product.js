const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const productController = require('../controllers/product');

router.get('/test', productController.sayHello);
router.post('/create', productController.productCreate);
// router.get('/:id', product_controller.product_details);

module.exports = router;

