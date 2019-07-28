const http = require('http');

const taskSimulator = require('./utils/task-simulator')

var server = http.createServer((req, res) => {

  // Bloqueando event-loop
  taskSimulator.simulate(5000);

  res.writeHead(200);
  res.end('Hi there');

})

server.listen(3000);