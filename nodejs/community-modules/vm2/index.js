const fs = require('fs')
const util = require('util')

process.on('uncaughtException', (err) => console.error('Erro assíncrono inesperado', err));

const {
    VM, // sandbox simples sem muitas APIs para rodar códigos síncronos (https://github.com/patriksimek/vm2#vm)
    NodeVM, // diferente da acima, permite require em módulos igual no contexto normal do Node.js (https://github.com/patriksimek/vm2#nodevm)
    VMScript // Permite pré compilar scripts (sem contexto) para melhorar performance (https://github.com/patriksimek/vm2#vmscript)
} = require('vm2')

const readFile = util.promisify(fs.readFile)
const vm = new NodeVM({
    console: 'inherit',
    sandbox: {},
    require: {
        external: true
    }
})

var preCompiledScript = new VMScript('1 + 1').compile();

execute('console.log(1 + 1)') // 2
execute(`var a = 10;var b = 20; console.log(a + b);`) // 30
executeFromFile('./resources/sum-script.txt') // 100
executeFromFile('./resources/request-script.txt') // 403

function execute(script) {
    try {
        vm.run(script, __filename);
    } catch (err) {
        console.error('Falha ao executar o script.', err);
    }
}

async function executeFromFile(scriptPath) {
    try {
        const script = await readFile(scriptPath)
        execute(script);
    } catch (err) {
        console.error('Falha ao ler o script.', err);
    }
}

function wrapScript(script) {
    return `(function() {
        'use strict';

        ${script}

    }());`;
}