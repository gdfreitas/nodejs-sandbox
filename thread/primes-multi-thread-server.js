const os = require('os')
const cluster = require('cluster')
const http = require('http')

const { isPrime } = require('../utils/number-utils')

const PORT = process.env.PORT || 80

if (cluster.isMaster) {
    console.log(`Master <pid:${process.pid}>`)
    const cpusNumber = os.cpus().length
    console.log(`Forking ${cpusNumber} CPUs`)
    for (let i = 0; i < cpusNumber; i++) {
        cluster.fork()
    }
} else {
    let count = 1

    const server = http.createServer((req, res) => {
        console.log(`Primes #${count++} @ ${process.pid}`)
        console.time('primes')
        let number = 0
        let numberOfPrimes = 0
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
}
