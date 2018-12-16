const express = require('express');

const AdminController = require('../controllers/AdminController');

const isAuthenticated = require('../middlewares/is-authenticated');

const router = express.Router();

router.get('/products', isAuthenticated, AdminController.getProducts);

router.get('/add-product', isAuthenticated, AdminController.getAddProduct);
router.post('/add-product', isAuthenticated, AdminController.postAddProduct);

router.get('/edit-product/:productId', isAuthenticated, AdminController.getEditProduct);
router.post('/edit-product', isAuthenticated, AdminController.postEditProduct);

router.post('/delete-product', isAuthenticated, AdminController.postDeleteProduct);

module.exports = router;
