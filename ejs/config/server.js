const express = require('express');
const constants = require('../../common/constants');

const server = express();

server.set('view engine', 'ejs');
server.set('views', './views');

server.listen(constants.SERVER_PORT, 
   () => console.log(`Server is running on port ${constants.SERVER_PORT}`)
)

module.exports = server;