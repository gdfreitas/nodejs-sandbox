const template = require('../../common/template-builder')

module.exports = server => {
   server.get('/', (req, res) => {
      res.send(template.build('<h1>Homepage</h1>'))
   })

   server.post('/', (req, res) => {
      res.send(JSON.stringify({
         state: "received",
         content: req.body
      }));
   })
}