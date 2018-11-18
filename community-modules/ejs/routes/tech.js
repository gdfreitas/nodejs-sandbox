// fake content
const content = [
   { id: 1, name: 'Cinco coisas que todo desenvolvedor de software deve saber sobre Arquitetura de Software' },
   { id: 2, name: 'Desmistificando o Spring Cloud Netflix' },
   { id: 3, name: 'Microserviços na prática: o que aprendemos em 2 anos' }
]

module.exports = server => server.get('/tech', (req, res) => {
   res.render('section/tech', { content })
})