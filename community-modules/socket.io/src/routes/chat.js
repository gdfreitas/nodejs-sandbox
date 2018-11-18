module.exports = application => {
   application.post('/chat', (req, res) => {
      application.src.controllers.chat.start(application, req, res);
   })

   application.get('/chat', (req, res) => {
      application.src.controllers.chat.start(application, req, res);
   })
}