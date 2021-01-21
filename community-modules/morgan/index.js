const fs = require('fs')
const path = require('path')

const express = require('express')

// Docs: https://www.npmjs.com/package/rotating-file-stream
const rfs = require('rotating-file-stream')

// Docs: https://github.com/expressjs/morgan
const morgan = require('morgan')

const SERVER_PORT = process.env.PORT || 3000
const app = express()

// Standard Apache combined log output.
// app.use(morgan('combined'))

// Standard Apache common log output.
app.use(morgan('common'))

// Shorter than default, also including response time.
// app.use(morgan('short'))

// Concise output colored by response status for development use.
// The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
// app.use(morgan('dev'))

// The minimal output
// app.use(morgan('tiny'))

// Constant logging all requests to a 'access.log' file
// var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// Splitting into one log file per day
const accessLogStream = rfs('access.log', {
  interval: '1d', // rotate daily
  path: path.join(__dirname, 'logs')
})
app.use(morgan('combined', { stream: accessLogStream }))

// Custom: log only 4xx and 5xx responses to console
app.use(morgan('dev', {
  skip: function (req, res) {
    return res.statusCode < 400
  }
}))

app.get('/', function (req, res) {
  res.send('Hello, Morgan!')
})

app.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}`))
