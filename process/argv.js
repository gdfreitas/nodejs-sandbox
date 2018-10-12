// exibi argumentos de linha de comando ao executar modulo
process.argv.forEach(arg => console.log(arg));

var options = process.argv.slice(2)
if (!options.length) return;

const propertiesLogger = require('./propertiesLogger')

options.forEach(option => {
    propertiesLogger(option)
})