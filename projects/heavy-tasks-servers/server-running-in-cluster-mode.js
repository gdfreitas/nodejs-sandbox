process.env.UV_THREADPOOL_SIZE = 1;

const crypto = require('crypto');
const http = require('http');

const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

const taskSimulator = require('./utils/task-simulator')

// O arquivo está executando em modo "master"? 
if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers >> Envia o arquivo **de novo** para ser executado em modo "slave" (sub-processo)
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });

} else {
  var server = http.createServer((req, res) => {
    res.writeHead(200);

    var childPath = req.url.substr(1);

    if (!childPath) {
      // Bloqueando event-loop
      taskSimulator.simulate(2500);
      // crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
      //   console.log(`Worker ${process.pid} responded`);
      //   res.end('Hi there');
      // })
    } else {
      console.log(`Worker ${process.pid} responded`);
      res.end('Hi there');
    }

  })

  server.listen(3000);

  console.log(`Worker ${process.pid} started`);
}