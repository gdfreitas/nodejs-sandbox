const http = require('http')

const techContent = `<h1>Conteúdos sobre tecnologia</h1>`;
const healthContent = `<h1>Conteúdos sobre saúde</h1>`;

const buildTemplate = content =>
   `<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8" />
      <title>NodeJS - HTTP</title>
   </head>
   <body>
      <p>${content}</p>
   </body>
</html>`

const server = http.createServer(function (req, res) {
   let content;

   switch (req.url) {
      case '/tech':
         content = techContent; break;
      case '/health':
         content = healthContent; break;
      default:
         content = 'Home :D'
   }

   res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
   });

   res.write(buildTemplate(content), 'utf-8');

   res.end();
});

server.listen(9000)