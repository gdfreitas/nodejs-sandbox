const express = require('express')

const routes = require('./routes')
const Logger = require('./logger')

Logger.setConfig({ appName: `Singleton ${new Date()}` });

const app = new express();

app.use('/', routes);

module.exports = app;