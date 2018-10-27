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

crypto.DEFAULT_ENCODING = 'hex';

console.time('syncTimeline')
crypto.pbkdf2Sync('secret', 'salt', 10000, 512, 'sha512')
crypto.pbkdf2Sync('secret', 'salt', 10000, 512, 'sha512')
console.timeEnd('syncTimeline')

console.time('asyncTimeline1')
crypto.pbkdf2('secret', 'salt', 10000, 512, 'sha512', (err, derivedKey) => {
    if (err) throw err;
    // console.log(derivedKey.toString())
    console.timeEnd('asyncTimeline1')
})

console.time('asyncTimeline2')
crypto.pbkdf2('secret', 'salt', 10000, 512, 'sha512', (err, derivedKey) => {
    if (err) throw err;
    // console.log(derivedKey.toString())
    console.timeEnd('asyncTimeline2')
})
