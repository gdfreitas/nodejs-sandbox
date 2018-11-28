const path = require('path')

const express = require('express')

const rootDir = require('../util/path-utils')

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
})

router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title })
    res.redirect('/')
})

module.exports.routes = router;
module.exports.products = products;