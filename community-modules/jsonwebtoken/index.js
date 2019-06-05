const jwt = require('jsonwebtoken')

const privateKey = 'secret_key'

const payload = {
    userId: 'gabriel.freitas'
}

const options = {
    // algorithm: 'RS256',
    expiresIn: '120ms'
}

const encoded = jwt.sign(payload, privateKey, options)

console.log(encoded)