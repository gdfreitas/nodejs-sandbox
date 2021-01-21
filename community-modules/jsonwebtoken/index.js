const jwt = require('jsonwebtoken')

const privateKey = 'secret_key'

const payload = {
  userId: 'gdfreitas'
}

const encoded = jwt.sign(payload, privateKey, {
  expiresIn: '1h'
});

const verified = jwt.verify(encoded, privateKey);

console.log({
  encoded,
  verified
})
