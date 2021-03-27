/**
 * Promise.race irá concluir em "curto circuito" assim que a primeira promise for concluída
 * seja ela fullfilled ou rejected
 */
const requestBahia = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'Bahia!')
})

const requestSaoPaulo = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'Sao Paulo!')
})

Promise.race([requestBahia, requestSaoPaulo]).then(value => {
  console.log(value) // 'Sao Paulo!'
  // Ambos resolvem, mas requestSaoPaulo é mais rápido
})

const requestCalifornia = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'California!')
})

const timeoutLimit = new Promise((resolve, reject) => {
  setTimeout(reject, 100, 'Tempo limite da requisição foi excedido!')
})

Promise.race([requestCalifornia, timeoutLimit]).then(
  value => {
    console.log('nada') // Não é chamado
  },
  reason => {
    console.log(reason) // `Tempo limite da requisição foi excedido!`
    // timeoutLimit é mais rápido, então ela rejeita
  }
)
