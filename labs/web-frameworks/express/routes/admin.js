const path = require('path')

const express = require('express')

// const rootDir = require('../util/path-utils')

const router = express.Router();

const products = [];

// PUG
// router.get('/add-product', (req, res, next) => {
//     res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product' });
// });

// HANDLEBARS
router.get('/add-product', (req, res, next) => {
    res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product', formsCSS: true, productCSS: true, activeAddProduct: true });
});

router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
});

module.exports.routes = router;
module.exports.products = products;