const express = require('express');

// Abordagem 1
// const config = require('./.env')

// Abordagem 2
const config = require('./config/config.js').get(process.env.NODE_ENV);

console.log(config)

const app = express();

app.get('/', (req, res, next) => res.send('Hello world!'))

app.listen(config.port, () => console.log(`[${config.env}] api listening on ${config.port}`))