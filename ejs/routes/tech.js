const template = require('../../common/template-builder')

module.exports = server => server.get('/tech', (req, res) => {
   res.render('section/tech')
})