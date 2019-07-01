const express = require('express')

const Logger = require('./logger')

const router = express.Router();

router.get('/', (req, res) => {
  Logger.log('Hello World!', { a: 1 }, { b: 2 })
  res.send('Hello World!')
});

module.exports = router;