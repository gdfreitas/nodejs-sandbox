const config = require('config');

if (!config.has('App.database')) {
  throw Error('Missing environment config variables')
}

const dbConfig = config.get('App.database')

const connect = (mongoDbUri) => {
  console.log(`successfuly connected as ${mongoDbUri}`);
}

// successfuly connected as mongodb://mongodb:27017/development
connect(`${dbConfig.get('url')}:${dbConfig.get('port')}/${dbConfig.get('collectionName')}`)
