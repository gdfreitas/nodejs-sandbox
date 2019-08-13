const mongoose = require('mongoose')

const connectionOptions = {
  useNewUrlParser: true,
  useCreateIndex: true
}

mongoose.connection.on('connected', () => console.log(`Mongoose succesfully connected to ${process.env.MONGODB_URI}`))

mongoose.connection.on('disconnected', () => console.log('Mongoose disconnected'))

mongoose.connection.on('error', (err) => console.error('Mongoose connection error', err))

const connection = mongoose.connect(process.env.MONGODB_URI, connectionOptions)

module.exports = connection
