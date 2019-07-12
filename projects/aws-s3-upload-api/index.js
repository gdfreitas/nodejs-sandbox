require('dotenv').config()

const SERVER_PORT = process.env.PORT || 3000

const server = require('./src/app')

server.listen(SERVER_PORT, () => console.info(`App running on port ${SERVER_PORT}`))