const http = require('http');

const HeavyWorkerSimulator = require('./heavy-worker-simulator')

var server = http.createServer((req, res) => {

  // Bloqueando event-loop
  HeavyWorkerSimulator.simulate(5000);

  res.writeHead(200);
  res.end('Hi there');

})

server.listen(3000);