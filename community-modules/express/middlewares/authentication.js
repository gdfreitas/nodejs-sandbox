const express = require('express')

const router = express.Router();

// Middleware 1
router.use((req, res, next) => {
    // console.log('First middleware without filter!')
    next();
})

// Middleware 2
router.use((req, res, next) => {
    // console.log('Second middleware without filter!')
    next();
})

module.exports = router;