const http = require('http')

const SERVER_PORT = process.env.SERVER_PORT || 80;

const server = http.createServer((req, res) => {
  res.write('Hello, world!')
})

server.listen(SERVER_PORT, () => {
  console.log(`> Fired by ${process.env.npm_lifecycle_event}`)
  console.log(`Server listening on http://localhost:${SERVER_PORT}`)
})