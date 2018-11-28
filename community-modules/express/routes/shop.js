const path = require('path')

const express = require('express')

const adminData = require('./admin')

const router = express.Router();

router.get('/', (req, res) => {
    const { products } = adminData
    res.render('shop', { products, docTitle: 'My Shop' });
})

module.exports = router;