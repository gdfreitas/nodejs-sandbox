const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser')
const constants = require('../../common/constants');

const server = express();

server.set('view engine', 'ejs');
server.set('views', './views');

// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
server.use(bodyParser.json())

server.listen(constants.SERVER_PORT,
   () => console.log(`Server is running on port ${constants.SERVER_PORT}`)
)

consign().include('routes').into(server);

module.exports = server;