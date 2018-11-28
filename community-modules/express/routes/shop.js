const path = require('path')

const express = require('express')

const rootDir = require('../util/path-utils')

const router = express.Router();

router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'))
    res.sendFile(path.join(rootDir, 'views', 'shop.html'))
})

module.exports = router;