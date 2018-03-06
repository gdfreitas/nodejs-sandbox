const template = require('../../common/template-builder')

module.exports = server => server.get('/health', (req, res) => {
   res.render('section/health')
})