const _build = content =>
`<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8" />
      <title>NodeJS - HTTP</title>
   </head>
   <body>
      <p>${content}</p>
   </body>
</html>`;

module.exports = {
   build: _build,
   techContent: `<h1>Conteúdos sobre tecnologia</h1>`,
   healthContent: `<h1>Conteúdos sobre saúde</h1>`
}