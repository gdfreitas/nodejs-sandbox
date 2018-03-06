const http = require('http')

const constants = require('../common/constants');
const template = require('../common/template-builder')

const server = http.createServer(function (req, res) {
   let content;

   switch (req.url) {
      case '/tech':
         content = template.techContent; break;
      case '/health':
         content = template.healthContent; break;
      default:
         content = 'Homepage'
   }

   res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
   });

   res.write(template.build(content), 'utf-8');

   res.end();
});

server.listen(constants.SERVER_PORT)