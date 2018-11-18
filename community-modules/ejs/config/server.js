const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')

const server = express();

server.set('view engine', 'ejs');
server.set('views', './views');

// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
server.use(bodyParser.json());

// input validator
server.use(expressValidator());

// servir arquivos estáticos
server.use(express.static('../assets'))

server.listen(80, () => console.log(`Server is running on port 80`));

consign().include('routes').into(server);

module.exports = server;