const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')

const server = express();

server.set('view engine', 'ejs');
server.set('views', './src/views');

// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
server.use(bodyParser.json());

// input validator
server.use(expressValidator());

// servir arquivos estáticos
server.use(express.static('./src/public'))

consign()
   .include('./src/routes')
   .include('./src/models')
   .include('./src/controllers')
   .into(server);

module.exports = server;