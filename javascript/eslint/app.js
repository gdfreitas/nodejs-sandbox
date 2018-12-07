const express = require('express');
const app = express();
const SERVER_PORT = process.env.PORT || 80;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(SERVER_PORT, () => console.log('web server running @ http://localhost:' + SERVER_PORT));