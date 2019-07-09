const http = require('http');

const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

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

  /**
   * Simula um processamento durante determinado período de tempo
   * @param {Number} duration in milliseconds
   */
  function doHeavyWork(duration) {
    const start = Date.now();

    while (Date.now() - start < duration) { }
  }

  var server = http.createServer((req, res) => {

    // Bloqueando event-loop
    doHeavyWork(2500);

    console.log(`Worker ${process.pid} responded`);

    res.writeHead(200);
    res.end('Hi there');
  })

  server.listen(3000);
  console.log(`Worker ${process.pid} started`);
}