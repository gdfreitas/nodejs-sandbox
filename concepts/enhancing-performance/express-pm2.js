process.env.UV_THREADPOOL_SIZE = 1;

const crypto = require('crypto');
const http = require('http');

// const HeavyWorkerSimulator = require('./heavy-worker-simulator')

var server = http.createServer((req, res) => {
  res.writeHead(200);

  var childPath = req.url.substr(1);

  if (!childPath) {
    // Bloqueando event-loop
    // HeavyWorkerSimulator.simulate(2500);
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
      console.log(`Worker ${process.pid} responded`);
      res.end('Hi there');
    })
  } else {
    res.end('Hi there');
  }

})

server.listen(3000);