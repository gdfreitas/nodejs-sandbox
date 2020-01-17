/**
 * Variáveis de Ambiente 1
 *
 * 1. Criar um arquivo chave=valor chamado ".env" no root do projeto
 * 2. Utilizar o package "dotenv" que irá importar as variáveis definidas no arquivo para o "process.env"
 */
require('dotenv').config()

console.log('--- Variáveis de Ambiente 1 ---')
console.log(process.env.DB_HOST)
console.log(process.env.DB_USER)
console.log(process.env.DB_PASS)

/**
 * Variáveis de Ambiente 2
 *
 * 1. Criar um arquivo de configuração que já captura as variáveis de ambiente com fallback para valores padrões
 */
const CONFIG = require('./config');

console.log('--- Variáveis de Ambiente 2 ---')
console.log(CONFIG.DB_HOST)
console.log(CONFIG.DB_USER)
console.log(CONFIG.DB_PASS)