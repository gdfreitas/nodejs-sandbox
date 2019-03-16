// > node ./src./index.js
const config = require('config');

// has properties
if (!config.has('App.database')) {
    throw Error('Missing environment config variables')
}

const dbConfig = config.get('App.database')

const connect = (mongoDbUri) => {
    console.log(`successfuly connected as ${mongoDbUri}`);
}

// successfuly connected as mongodb://mongodb:27017/development
connect(`${dbConfig.get('url')}:${dbConfig.get('port')}/${dbConfig.get('collectionName')}`)


// CLI:
// NODE_ENV=<> => /config/default.json
// NODE_ENV=staging => /config/staging.json
// NODE_ENV=production => /config/production.json

// ./config/custom-environment-variables.json > mapeamento de variáveis de ambiente para chaves dos arquivos de configuração
// DATABASE_URL=www.google.com npm start
// successfuly connected as www.google.com:27017/development