const template = require('../../common/template-builder')

module.exports = server => server.get('/', (req, res) => {
   res.send(template.build('<h1>Homepage</h1>'))
})