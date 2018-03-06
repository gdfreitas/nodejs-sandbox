const server = require('./config/server')

const home = require('./routes/home')(server)
const tech = require('./routes/tech')(server)
const health = require('./routes/health')(server)

