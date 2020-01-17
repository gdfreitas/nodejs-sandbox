/**
 * Define a quantidade de threads no "thread pool" do Libuv
 * 
 * Observação: no windows esta variável não funciona caso seja declara no início do arquivo.
 * Ela deve ser definida no ENV antes da execução ex: `UV_THREADPOOL_SIZE=2 node threadpool.js`
 */
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