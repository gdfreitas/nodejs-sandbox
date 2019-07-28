require('dotenv').config()

const SERVER_PORT = process.env.PORT || 3000

const server = require('./src/app')

const socket = require('./src/config/socket')
const databaseConnect = require('./src/config/database')

const handleSocketConnection = () => console.log('client connected ;)')

databaseConnect
  .then(() => {
    const application = server.listen(SERVER_PORT, () => console.log(`Server listening on ${SERVER_PORT}`))

    const io = socket.init(application)
    io.on('connection', handleSocketConnection)
  })
  .catch(console.error)
