const http = require('http');

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
  doHeavyWork(5000);

  res.writeHead(200);
  res.end('Hi there');

})

server.listen(3000);