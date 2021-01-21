const http = require('http')

const SERVER_PORT = process.env.SERVER_PORT || 3000;

const server = http.createServer((req, res) => {
  res.write(`Hello, world ${new Date().toLocaleDateString()}`)
})

server.listen(SERVER_PORT, () => console.log(`Server listening on http://localhost:${SERVER_PORT}`))
