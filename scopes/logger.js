// imprime variável de origem em escopo global
module.exports.logFromGlobal = () => console.log(MAX_VALUE)

// imprime variável importada
const { MIN_VALUE } = require('./config')
module.exports.logFromConfigModule = () => console.log(MIN_VALUE)