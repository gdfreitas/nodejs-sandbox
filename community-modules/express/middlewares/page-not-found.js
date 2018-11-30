const path = require('path')

const express = require('express')

const NOT_FOUND_STATUS_CODE = 404;

const router = express.Router();

router.use((req, res, next) => {
    res.status(NOT_FOUND_STATUS_CODE)
        .render('404', { pageTitle: 'Page Not Found' })
})

module.exports = router;