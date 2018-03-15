const parseResponse = data => JSON.stringify(data)

module.exports.start = (application, req, res) => {

   let content = req.body;

   req.assert('nickname', 'O nickname deve ser informado').notEmpty();
   req.assert('nickname', 'O nickname deve conter entre 3 e 30 caracteres').len(3, 15);

   let errors = req.validationErrors();

   if (errors) {
      res.render('index', {errors: errors.map(error => error.msg)});
   } else {
      res.render('chat')
   }

}