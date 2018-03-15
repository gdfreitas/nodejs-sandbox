module.exports = application => {
   application.get('/', (req, res) => {
      res.send(`<h1>Hello</h1>`)
   })
}