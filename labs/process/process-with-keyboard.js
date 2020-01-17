const keyboard = require('./keyboard')
const propertiesLogger = require('./properties-logger')

keyboard.onReadable(function (option) {
  propertiesLogger.log(option)
})

process.on('exit', () => {
  console.log('processo finalizado!')
})

// evita que o processo seja finalizado em uma exceção
process.on('uncaughtException', () => {
  console.log('ocorreu um erro inesperado')
})

// exemplo de uncaughtException
a.b()
