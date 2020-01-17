const http = require('http');

const { Worker } = require('webworker-threads')

var server = http.createServer((req, res) => {

  const worker = new Worker(function () {
    this.onmessage = function (event) {
      console.log('worker got a message!')

      // Como estes callbacks executam isoladamente, não é permitido requerir módulos
      // const taskSimulator = require('./utils/task-simulator')
      // taskSimulator.simulate(event.data.duration);

      const start = Date.now();

      while (Date.now() - start < event.data.duration) { }

      postMessage({ processed: true, message: 'Worker processed succesfully' });
    }
  })

  worker.onmessage = function (message) {
    console.log('server got a message from worker', message.data)
    res.writeHead(200);
    res.end(JSON.stringify(message.data));
  }

  worker.postMessage({ duration: 3000 });

})

server.listen(3000);