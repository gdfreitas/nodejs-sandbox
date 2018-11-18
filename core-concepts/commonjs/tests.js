// const serialGenerator = require('./serialGenerator')
// const serialGenerator = require('./serial-generator-index')
// const serialGenerator = require('./serial-generator-npm')
// console.log(serialGenerator.generate())

// cache de import dos módulos
// const serialGeneratorA = require('./serialGenerator')
// const serialGeneratorB = require('./serialGenerator')
// console.log(serialGeneratorA === serialGeneratorB)

const serialGenerator = require('./serialGenerator')
console.log(serialGenerator.generate())
