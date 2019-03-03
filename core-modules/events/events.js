const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('userConnected', (data) => {
    console.log('event received', data)
})

emitter.emit('userConnected', { userId: 'gabriel.freitas', timestamp: Date.now() })
emitter.emit('userConnected', { userId: 'juvenal.silva', timestamp: Date.now() })

// const Logger = require('./logger')
// const log = new Logger();

// log.on('logMessage', (data) => {
//     console.log('event received', data)
// })

// log.log('Hello, world!')











