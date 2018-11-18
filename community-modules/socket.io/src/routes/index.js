module.exports = application => {
   application.get('/', (req, res) => {
      application.src.controllers.index.home(application, req, res)
   })
}