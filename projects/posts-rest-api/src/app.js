require('dotenv').config()

const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')

const cors = require('./middlewares/cors')
const errorHandler = require('./middlewares/error-handler')
const fileHandler = require('./middlewares/file-handler')

const feedRoutes = require('./routes/feed')
const authRoutes = require('./routes/auth')

const app = express()

app.use(cors)

app.use(bodyParser.urlencoded({ extended: false })) // x-www-form-urlencoded <form>
app.use(bodyParser.json()) // application/json

app.use(fileHandler)
app.use('/images', express.static(path.join(__dirname, '..', 'images')))

app.use('/feed', feedRoutes)
app.use('/auth', authRoutes)

app.use(errorHandler)

module.exports = app
