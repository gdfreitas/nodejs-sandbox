const template = require('../../common/template-builder')

const parseResponse = data => JSON.stringify(data)

module.exports = server => {
   server.get('/', (req, res) => {
      res.send(template.build('<h1>Homepage</h1>'))
   })

   server.post('/', (req, res) => {

      req.assert('content', 'O conteúdo não pode ser vazio').notEmpty();
      req.assert('content', 'O conteúdo não pode deve conter no máximo 10 caracteres').len(0, 10);
      req.assert('offset', 'O limit deve ser informado').notEmpty();
      req.assert('limit', 'O offset deve ser informado').notEmpty();

      let errors = req.validationErrors();

      if (errors) {
         res.send(parseResponse({ state: 'errors', errors: errors.map(error => error.msg) }));
      } else {
         res.send(parseResponse({ state: 'received', content: req.body }));
      }

   })
}

