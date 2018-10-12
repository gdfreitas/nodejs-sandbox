// variáveis de escopo global
console.log(Object.keys(global)) // global, process, GLOBAL, root, Buffer, clearInterval, setInterval, console, setTimeout, etc

// o código do módulo (deste arquivo) é encapsulado dentro de uma função chamada wrapper, com a assinatura abaixo
console.log(arguments) // exports, require, module, __filename, __dirname

// 04 diferentes métodos para definir variáveis no escopo global (prática ruim)
global.MAX_VALUE = 10;
GLOBAL.MAX_VALUE = 10;
root.MAX_VALUE = 10;
MAX_VALUE = 10;

const logger = require('./logger');
logger.logFromGlobal()
logger.logFromConfigModule()