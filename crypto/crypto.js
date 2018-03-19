const crypto = require('crypto')

const payload = {
    user: 'gabriel.freitas',
    password: '12345678'
}

console.log(payload)

payload.password = crypto
    .createHash('sha1')
    .update(payload.password)
    .digest('hex')

console.log(payload)