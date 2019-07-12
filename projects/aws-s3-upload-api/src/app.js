const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json());

app.get('/api/v1/uploads/presigned', (req, res) => {



  res.json({
    message: 'Hello'
  })
})

module.exports = app