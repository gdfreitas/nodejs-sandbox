const express = require('express');

const ShopController = require('../controllers/ShopController');

const isAuthenticated = require('../middlewares/is-authenticated');

const router = express.Router();

router.get('/', ShopController.getIndex);

router.get('/products', ShopController.getProducts);
router.get('/products/:productId', ShopController.getProduct);

router.get('/cart', isAuthenticated, ShopController.getCart);
router.post('/cart', isAuthenticated, ShopController.postCart);
router.post('/cart-delete-item', isAuthenticated, ShopController.postCartDeleteProduct);

router.post('/create-order', isAuthenticated, ShopController.postOrder);
router.get('/orders', isAuthenticated, ShopController.getOrders);

router.get('/orders/:orderId', isAuthenticated, ShopController.getInvoice)

module.exports = router;
