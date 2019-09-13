/**
 * Promise.any "curto circuito" assim que alguma conclua com sucesso (fullfilled)
 */
const requestBahia = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'Bahia!')
})

const requestSaoPaulo = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'Sao Paulo!')
})

const requestMatoGrosso = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'Mato Grosso!')
})

Promise.any([requestBahia, requestSaoPaulo, requestMatoGrosso])
  .then(winner => console.log(winner))
  .catch(error => console.error(error))
