const express = require('express');
const { body } = require('express-validator/check')

const AdminController = require('../controllers/admin');

const isAuthenticated = require('../middlewares/is-authenticated');

const router = express.Router();

router.get('/products', isAuthenticated, AdminController.getProducts);

router.get('/add-product', isAuthenticated, AdminController.getAddProduct);

router.post('/add-product', [
    body('title')
        .isString()
        .isLength({ min: 3, max: 60 })
        .trim(),
    body('price').isFloat(),
    body('description')
        .isLength({ min: 5, max: 250 })
        .trim(),
], isAuthenticated, AdminController.postAddProduct);

router.get('/edit-product/:productId', isAuthenticated, AdminController.getEditProduct);

router.post('/edit-product', [
    body('title')
        .isString()
        .isLength({ min: 3, max: 60 })
        .trim(),
    body('price').isFloat(),
    body('description')
        .isLength({ min: 5, max: 250 })
        .trim(),
], isAuthenticated, AdminController.postEditProduct);

router.delete('/product/:productId', isAuthenticated, AdminController.deleteProduct);

module.exports = router;
