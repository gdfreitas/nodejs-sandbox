const promise = new Promise((resolve, reject) => {
  resolve({ message: 'Promise resolvida com sucesso' })
});

// Sintaxe mais simples
promise
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.error(error);
  });

const promiseWillNotFulfill = new Promise((resolve, reject) => {
  reject({ code: 500, message: 'Oops, um erro ocorreu!' })
});

// Sintaxe diferente, passando o o callback do catch como segundo argumento do then
promiseWillNotFulfill
  .then(function (data) {
    console.log(data);
  }, function (error) {
    console.error(error);
  });

// O catch ao final irá capturar erros qualquer um dos callbacks acima dele
const promiseWithErrorThrownInTheMiddle = Promise.resolve({ username: 'gdfreitas' })
  .then(function (data) {
    console.log(`O identificador do usuário é ${data.username}`);
  })
  .then(function (data) {
    // Simula erro intermediário
    throw new Error('Este callback intermediário não pôde fazer seu trabalho')
  })
  .then(function (data) {
    console.log(`Este console.log nunca será executado`, data);
  })
  .catch(function (err) {
    console.error(err);
  });

