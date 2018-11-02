const http = require('http')

const { isPrime } = require('../utils/number-utils')

const PORT = process.env.PORT || 80

let count = 1
const server = http.createServer((req, res) => {
    console.log('Primes #' + count++)
    console.time('primes')
    var number = 0
    var numberOfPrimes = 0
    while (true) {
        if (isPrime(++number)) numberOfPrimes++
        if (numberOfPrimes === 1000000) break
    }
    res.end(`Number: ${number}`)
    console.timeEnd('primes')
})

server.listen(PORT, err => {
    if (err) {
        console.error(err)
    } else {
        console.log(`Server process <pid:${process.pid}> is listening on http://localhost:${PORT}`)
    }
})
