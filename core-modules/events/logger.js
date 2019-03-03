const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(message) {
        this.emit('logMessage', { message, time: Date.now() })
    }
}

module.exports = Logger;