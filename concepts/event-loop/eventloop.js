// node file.js >> inicia o processo do Node.js

// Declara 3 listas de operações pendentes que podem ser registradas
const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// Todas as operações do arquivo são armazenadas antes do EventLoop iniciar
// Ex: Agendar timers, tasks, operações
file.runContents();

function shouldContinue() {
  // Check 1: Há algum setTimeout, setInterval, setImmediate pendente?
  // Check 2: Há alguma OS tasks pendente? (Ex: http server escutando por alguma porta)
  // Check 3: Há alguma operação longa pendente? (Ex: "fs" - módulo filesystem)
  return pendingTimers.length || pendingOSTasks.length || pendingOperations.length;
}

// Todo o bloco deste `while` é executado em algo chamado `tick` (instante)
while (shouldContinue()) {
  // 1. Node verifica "pendingTimers" e executa seus respectivos callbacks

  // 2. Node verifica "pendingOSTasks" e "pendingOperations" e executa seus respectivos callbacks

  // 3. Node pausa sua execução. Continua quando: 
  // > uma nova "pendingOSTask" completar
  // > uma nova "pendingOperation" completar
  // > um novo timer esteja por expirar (completar)

  // 4. Verifica os "pendingTimers" e executa os callbacks de "setImmediate"

  // 5. Lida com eventos do tipo `close` (Ex: readStream.on('close', function callback() => {})
}

// shouldContinue() === false >> finaliza o processo do Node.js