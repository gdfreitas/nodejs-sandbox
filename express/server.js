const express = require('express')

const constants = require('../common/constants')
const template = require('../common/template-builder')

const server = express()

server.get('/', (req, res) => {
    res.send(template.build('Homepage'))
})

server.get('/tech', (req, res) => {
    res.send(template.build(template.techContent))
})

server.get('/health', (req, res) => {
    res.send(template.build(template.healthContent))
})

server.listen(constants.SERVER_PORT, () => console.log(`Server is running on port ${constants.SERVER_PORT}`))
