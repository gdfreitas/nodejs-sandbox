const app = require('./config/server');
const socket = require('socket.io');

const SERVER_PORT = 80;

const server = app.listen(SERVER_PORT,
   () => console.log(`Server is running on port ${SERVER_PORT}`)
)

app.set('io', socket.listen(server))

app.get('io').on('connection', (socket) => {
   console.log('usuário conectou');

   socket.on('disconnect', () => {
      console.log('usuário desconectou');
   })

   socket.on('chat:msg:new', (data) => {
      // dialogos
      _notify(socket, 'chat:msg', { nickname: data.nickname, msg: data.msg})

      // usuários que estão ativos enviando mensagens no chat
      _notify(socket, 'user:joined', { nickname: data.nickname })
   })

})

const _notify = (socket, eventName, payload) => {
   socket.emit(eventName, payload)
   socket.broadcast.emit(eventName, payload)
}