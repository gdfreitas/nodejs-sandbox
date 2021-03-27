let array = [1, 2, 3, 4, 5];

// for c/ múltiplos parâmetros
for (let c = 10, j = 10; c < 13; c++, ++j) {
  console.log(c, j)
}

// [for-in] iterando array
for (let index in array) {
  console.log(array[index])
}

// [for-in]  iterando atributos de objeto
let obj = { id: 666, msg: 'hello' }
for (let key in obj) {
  console.log(obj[key])
}

// [for-of] iterando array (*funciona somente com arrays)
for (let val of array) {
  console.log(val)
}

(async () => {
  const delay = () => new Promise(res => setTimeout(res, 300, 'done'))

  // [for-await] utilizado para iterar sobre promises
  const promises = [delay(), delay(), delay()];

  for await (const result of promises) {
    console.log('result', result);
  }

  console.log('Done');

})();
