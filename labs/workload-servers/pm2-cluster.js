/**
 * Para iniciar: pm2 start pm2-cluster.js -i 0
 * Para monitorar: pm2 logs -f
 * Para deletar os processos:  pm2 delete pm2-cluster
 */

// Variável que determina o pool de threads do libuv (Default: 1)
process.env.UV_THREADPOOL_SIZE = 4;

const http = require('http');
const crypto = require('crypto');

const taskSimulator = require('./task-simulator')

var server = http.createServer((req, res) => {
  res.writeHead(200);

  var path = req.url.substr(1);

  if (path) {
    res.end('Hi there');
    return;
  }

  crypto.pbkdf2('abcdefg', 'salting', 1000000, 512, 'sha512', () => {
    console.log(`Worker ${process.pid} responded`);
    res.end('Hi there');
  })

  // taskSimulator.simulate(4000)
  // console.log(`Worker ${process.pid} responded`);
  // res.end('Hi there');
})

server.listen(3000);
