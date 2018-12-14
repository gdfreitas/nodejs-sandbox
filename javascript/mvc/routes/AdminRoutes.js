const express = require('express');

const AdminController = require('../controllers/AdminController');

const router = express.Router();

router.get('/products', AdminController.getProducts);

router.get('/add-product', AdminController.getAddProduct);
router.post('/add-product', AdminController.postAddProduct);

router.get('/edit-product/:productId', AdminController.getEditProduct);
router.post('/edit-product', AdminController.postEditProduct);

router.post('/delete-product', AdminController.postDeleteProduct);

module.exports = router;
