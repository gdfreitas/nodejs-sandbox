const crypto = require('crypto')

// exibir formatos suportados de hash e cifras
console.log('Supported hashes:', crypto.getHashes())
console.log('Supported ciphers:', crypto.getCiphers())

// async random bytes
crypto.randomBytes(16, (err, buf) => {
    console.log(buf.toString('hex'))
})

// sync random bytes
let iv = crypto.randomBytes(16);
console.log(iv.toString('hex'))

// create hash
let hash = crypto
    .createHash('sha256')
    .update('Minha mensagem')
    .digest('hex')
console.log(hash)

// aes 256-bit cipher block chaining (cbc) encryption/decryption
let secretMessage = 'Alou, me ouve?'
let key = '12345678123456781234567812345678'

let cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
let encrypted = cipher.update(secretMessage, 'utf-8', 'hex')
encrypted += cipher.final('hex')

console.log('encrypted:', encrypted)

let decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf-8');
decrypted += decipher.final('utf-8')

console.log('decrypted:', decrypted)

// crypto.DEFAULT_ENCODING = 'hex'

console.time('syncTimeline')
crypto.pbkdf2Sync('secret', 'salt', 10000, 512, 'sha512')
crypto.pbkdf2Sync('secret', 'salt', 10000, 512, 'sha512')
console.timeEnd('syncTimeline')

console.time('asyncTimeline1')
crypto.pbkdf2('secret', 'salt', 10000, 512, 'sha512', (err, derivedKey) => {
    if (err) throw err
    // console.log(derivedKey.toString())
    console.timeEnd('asyncTimeline1')
})

console.time('asyncTimeline2')
crypto.pbkdf2('secret', 'salt', 10000, 512, 'sha512', (err, derivedKey) => {
    if (err) throw err
    // console.log(derivedKey.toString())
    console.timeEnd('asyncTimeline2')
})
