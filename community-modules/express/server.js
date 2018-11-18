const express = require('express')
const templateBuilder = require('./template-builder')

const server = express()

server.get('/', (req, res) => {
    res.send(templateBuilder.build('Homepage'))
})

server.get('/tech', (req, res) => {
    res.send(templateBuilder.build(templateBuilder.techContent))
})

server.get('/health', (req, res) => {
    res.send(templateBuilder.build(templateBuilder.healthContent))
})

server.listen(80, () => console.log(`Server is running on port 80`))
