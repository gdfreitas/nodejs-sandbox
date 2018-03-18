var socket = io('http://localhost')

document.getElementById('btnEnviarMensagem').addEventListener('click', sendMessage)

document.getElementById('mensagem').addEventListener('keyup', function (event) {
   event.preventDefault();
   if (event.keyCode === 13) {
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

var sendMessage = function () {
   console.log('send message was called')
   
   var input = document.getElementById('nickname');
   
   socket.emit('chat:msg:new', {
      nickname: input.value, msg: document.getElementById('mensagem').value
   })

   // clear
   input.value = '';
}