const Hapi = require('@hapi/hapi')
const Joi = require('joi')

const server = Hapi.server({
  port: 3000,
  host: 'localhost'
})

server.route({
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    return {
      hello: 'world',
      query: request.query
    }
  }
})

server.route({
  method: 'POST',
  path: '/api/v1/hello-world/{name}',
  handler: (request, h) => {
    console.log(request.params)
    return `${request.params.name} ${request.payload.surname}`
  },
  options: {
    validate: {
      params: Joi.object({
        name: Joi.string().required()
      }),
      payload: Joi.object({
        surname: Joi.string().min(3).max(60).required()
      })
    }
  }
});

const init = async () => {
  await server.start()
  console.log(`Server running on ${server.info.uri}`)
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()
