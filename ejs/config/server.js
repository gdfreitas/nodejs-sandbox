const express = require('express');
const consign = require('consign');
const constants = require('../../common/constants');

const server = express();

server.set('view engine', 'ejs');
server.set('views', './views');

server.listen(constants.SERVER_PORT, 
   () => console.log(`Server is running on port ${constants.SERVER_PORT}`)
)

consign().include('routes').into(server);

module.exports = server;