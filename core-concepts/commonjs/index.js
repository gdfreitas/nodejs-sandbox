// Todos apontam para a mesma referência
console.log('module.exports === exports', module.exports === exports)
console.log('module.exports === this', module.exports === this)
console.log('exports === this', exports === this)

// Argumentos disponíveis dentro de um módulo do node
console.log('node module arguments', arguments)

// Interpreta que é módulo diretamente pelo arquivo
const serialGeneratorFromFile = require('./serialGenerator')

// Interpreta que é um módulo com base no "index.js" dentro do diretório indicado
const serialGeneratorFromDirIndex = require('./serial-generator-index')

// Interpreta que é módulo com base no "package.json" dentro do diretório  que contém
// o atributo "main" indicando qual é o arquivo inicial do módulo
const serialGeneratorFromPackage = require('./serial-generator-npm')

console.log(serialGeneratorFromFile.generate()) // works
console.log(serialGeneratorFromDirIndex.generate()) // works
console.log(serialGeneratorFromPackage.generate()) // works

// Possui cache de importação de módulos, ou seja, possuem a mesma referência
const serialGeneratorA = require('./serialGenerator')
const serialGeneratorB = require('./serialGenerator')
console.log(serialGeneratorA === serialGeneratorB) // true