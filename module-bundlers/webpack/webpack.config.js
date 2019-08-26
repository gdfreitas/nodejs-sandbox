console.log(`Loading webpack for ${process.env.npm_lifecycle_event}`)

module.exports = require(`./build/${process.env.npm_lifecycle_event}.js`)
