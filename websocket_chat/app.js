const server = require('./config/server');

const SERVER_PORT = 80;

server.listen(SERVER_PORT,
   () => console.log(`Server is running on port ${SERVER_PORT}`)
);