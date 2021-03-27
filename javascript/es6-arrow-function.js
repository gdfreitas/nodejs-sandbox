var numbers = [1, 2, 3, 4, 5]

// sintáxe convencional
numbers.forEach(function (currentValue, index, array) {
  console.log(currentValue, index, array)
})

// sintáxe: arrow-function (múltiplos parâmetros)
numbers.forEach((currentValue, index, array) => {
  console.log(currentValue, index, array)
})

// sintáxe: arrow-function (único parâmetro)
numbers.forEach(currentValue => {
  console.log(currentValue)
})

// sintáxe: arrow-function (uma única operação)
numbers.forEach(currentValue => console.log(currentValue))
