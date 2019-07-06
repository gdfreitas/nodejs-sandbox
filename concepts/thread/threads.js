// No windows, esta variável deve ser definida fora do contexto do arquivo
process.env.UV_THREADPOOL_SIZE = 2;

const crypto = require('crypto')

const start = Date.now()

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('1:', Date.now() - start) // 1: 569
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('2:', Date.now() - start) // 2: 585
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('3:', Date.now() - start) // 3: 586
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('4:', Date.now() - start) // 4: 598
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('5:', Date.now() - start) // 5: 1139
})