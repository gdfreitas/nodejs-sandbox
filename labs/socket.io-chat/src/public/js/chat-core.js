var socket = io('http://localhost:3000')

document
  .getElementById('btnEnviarMensagem')
  .addEventListener('click', sendMessage)

document
  .getElementById('mensagem')
  .addEventListener('keyup', function (event) {
    event.preventDefault();
    if (event.key === 'Enter') {
      sendMessage()
    }
  });

socket.on('chat:msg', function (data) {
  var messageBox = `
    <div class="dialogo">
      <h4>${data.nickname}</h4>
      <p>${data.msg}</p>
    </div>
  `

  $('#dialogos').append(messageBox);
});

socket.on('user:joined', function (data) {
  var participante = `
    <span class="participante">
      <img src="imgs/ico_usuario.png"/>
      ${data.nickname}
    </span>
  `;

  $('#pessoas').append(participante);
});

function sendMessage() {
  var input = document.getElementById('nickname');
  var inputMsg = document.getElementById('mensagem');

  socket.emit('chat:msg:new', {
    nickname: input.value, msg: inputMsg.value
  })

  // clear
  inputMsg.value = '';
}
