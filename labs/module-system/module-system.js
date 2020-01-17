/**
 * Imprime que todos as instruções abaixo fazem a mesma coisa, conforme comparação de referências
 */
console.log('module.exports === exports', module.exports === exports)
console.log('module.exports === this', module.exports === this)
console.log('exports === this', exports === this)

/**
 * Imprime todas os atributos da variável "global"
 * 
 * A saída é: global, process, GLOBAL, root, Buffer, clearInterval, setInterval, console, setTimeout, etc
 */
console.log('GLOBAL keys', Object.keys(global))

/**
 * O código do módulo (este arquivo) é encapsulado dentro de uma função, chamada de "module wrapper" por onde recebe alguns parâmetros
 * A saída é a assinatura da função wrapper deste módulo: exports, require, module, __filename, __dirname
 * 
 * (function(exports, require, module, __filename, __dirname) {
 *    // Module code actually lives in here
 * });
 */
console.log('node module arguments', arguments)
console.log('__filename', __filename);
console.log('__dirname', __dirname);

/**
 * Quatro diferentes formas para definir variáveis no escopo global, acessíveis de qualquer contexto de arquivo
 * Observação: não é uma boa prática.
 */
global.MAX_VALUE = 10
GLOBAL.MAX_VALUE = 10
root.MAX_VALUE = 10
MAX_VALUE = 10

/**
 * Importa um módulo de um arquivo
 */
const serialGeneratorFromFile = require('./serial-generator')
console.log('serialGeneratorFromFile.generate()', serialGeneratorFromFile.generate()) // works

/**
 * Importa um módulo com base no "index.js" dentro do diretório indicado
 */
const serialGeneratorFromDirIndex = require('./serial-generator-index')
console.log('serialGeneratorFromDirIndex.generate()', serialGeneratorFromDirIndex.generate()) // works

/**
 * Interpreta que é módulo com base no "package.json" dentro do diretório  que contém o atributo "main" 
 * indicando qual é o arquivo inicial do módulo
 */
const serialGeneratorFromPackage = require('./serial-generator-npm')
console.log('serialGeneratorFromPackage.generate()', serialGeneratorFromPackage.generate()) // works

/**
 * Todo módulo após seu primeiro "require" é cacheado, abaixo é possível verificar que ambos possuem a mesma referência
 */
const serialGeneratorA = require('./serial-generator')
const serialGeneratorB = require('./serial-generator')
console.log('serialGeneratorA === serialGeneratorB', serialGeneratorA === serialGeneratorB) // true

/**
 * Imprime todas as chaves (paths) dos módulos cacheados
 * 
 * Observação: é permitido remover pacotes do cache através da remoção dessas chaves
 */
console.log(Object.keys(require.cache))