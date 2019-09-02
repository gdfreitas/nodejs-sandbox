let array = [1, 2, 3, 4, 5];

// forEach(currentValue, index, array)
array.forEach(function callback(currentValue, index, array) {
  console.log(currentValue, index, array)
});

// map(currentValue, index, array)
const todosMultiplicadoPorDez = array.map(function callback(currentValue, index, array) {
  return currentValue * 10;
});
console.log('todosMultiplicadoPorDez', todosMultiplicadoPorDez)

// filter(currentValue, index, array)
const somenteMaiorQueTres = array.filter(function callback(currentValue, index, array) {
  return currentValue > 3;
})
console.log('somenteMaiorQueTres', somenteMaiorQueTres)

// find(currentValue, index, array)
const primeiroNumeroMaiorQueTres = array.find(function callback(currentValue, index, array) {
  return currentValue > 3;
})
console.log('primeiroNumeroMaiorQueTres', primeiroNumeroMaiorQueTres)

// reduce(accumulator, currentValue, index, array)
const somaTotalDosNumeros = array.reduce(function callback(accumulator, currentValue, index, array) {
  return accumulator += currentValue;
})
console.log('somaTotalDosNumeros', somaTotalDosNumeros)

// some(currentValue, index, array)
const existeAlgumNumeroPar = array.some(function callback(currentValue, index, array) {
  return currentValue % 2 === 0;
})
console.log('existeAlgumNumeroPar', existeAlgumNumeroPar)

// every(currentValue, index, array)
const todosSaoNumerosPares = array.every(function callback(currentValue, index, array) {
  return currentValue % 2 === 0;
})
console.log('todosSaoNumerosPares', todosSaoNumerosPares)
