const path = require('path')

const express = require('express')

const rootDir = require('../util/path-utils')

const router = express.Router();

// O método "use" não é utilizado somente para middlewares!
router.use('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
})

router.post('/add-product', (req, res, next) => {
    console.log('req.body', req.body);
    res.redirect('/')
})

module.exports = router;