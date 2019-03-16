
// process.env before undefined
console.log('process.env before', process.env.DB_URL)

// carrega key/values do arquivo .env para o process.env
const result = require('dotenv').config()

// process.env after mongodb://mongodb
console.log('process.env after', process.env.DB_URL)

if (result.error) {
    throw result.error
}

console.log(result.parsed)