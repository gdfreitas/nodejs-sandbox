var isPrime = function (number) {
    if (number < 2) return false
    for (var i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
        if (number % i === 0) return false
    }
    return true
}

console.time('primes')
var number = 0
var numberOfPrimes = 0
while (true) {
    if (isPrime(++number)) numberOfPrimes++
    if (numberOfPrimes === 1000000) break
}
console.log(number)
console.timeEnd('primes')
