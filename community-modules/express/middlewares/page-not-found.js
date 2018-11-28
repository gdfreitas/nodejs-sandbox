const path = require('path')

const express = require('express')

const NOT_FOUND_STATUS_CODE = 404;

const router = express.Router();

router.use((req, res, next) => {
    res.status(NOT_FOUND_STATUS_CODE)
        .sendFile(path.join(__dirname, '..', 'views', '404.html'))
})

module.exports = router;