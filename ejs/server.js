const express = require('express');

const constants = require('../common/constants');
const template = require('../common/template-builder')

const server = express();

server.set('view engine', 'ejs')

server.get('/', (req, res) => {
   res.send(template.build('Homepage'))
})

server.get('/tech', (req, res) => {
   res.render('section/tech')
})

server.get('/health', (req, res) => {
   res.render('section/health')
})

server.listen(constants.SERVER_PORT, () => console.log(`Server is running on port ${constants.SERVER_PORT}`))