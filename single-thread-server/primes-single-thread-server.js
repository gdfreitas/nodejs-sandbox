const http = require('http')

const PORT = 80;
const isPrime = require('../common/number-utils').isPrime;

/* 
    Ao abrir 5 abas do navegador fazendo requisição para este servidor.
    Cada aba tem que esperar a resolução da aberta anteriormente, pois o event-loop é single thread!
*/

let count = 1;
const server = http.createServer((req, res) => {
    console.log('Primes #' + count++);
    console.time('primes');
    var number = 0;
    var numberOfPrimes = 0;
    while (true) {
        if (isPrime(++number)) numberOfPrimes++;
        if (numberOfPrimes === 1000000) break;
    }
    res.end(`Number: ${number}`);
    console.timeEnd('primes');

});

server.listen(PORT)