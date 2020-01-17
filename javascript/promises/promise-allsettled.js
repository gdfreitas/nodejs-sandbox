/**
 * Promise.allSettled sem "curto circuito" assim todas concluírem (fullfilled ou rejected)
 */
const requestBahia = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'Bahia!')
})

const requestSaoPaulo = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'Sao Paulo!')
})

Promise.allSettled([requestBahia, requestSaoPaulo])
  .then(values => console.log(values))
