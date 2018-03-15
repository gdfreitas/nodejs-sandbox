module.exports = application => {
   application.post('/chat', (req, res) => {
      res.render('chat')
   })

   application.get('/chat', (req, res) => {
      res.render('chat')
   })
}