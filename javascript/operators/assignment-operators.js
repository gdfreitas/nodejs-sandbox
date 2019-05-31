// auto atribuições
var numero = 3
numero = numero + 4
console.log(numero) // 7
numero += 4
console.log(numero) // 11

numero = numero - 5
console.log(numero) // 6
numero -= numero
console.log(numero) // 0

numero = numero * 4
console.log(numero) // 0
numero *= numero
console.log(numero) // 0

numero = numero / 2
console.log(numero) // 0
numero /= 2
console.log(numero) // 0

numero = numero ** 2
console.log(numero) // 1
numero **= numero
console.log(numero) // 1

numero = numero % 5
console.log(numero) // 1

// incremento
var valor = 10

--valor
console.log(valor) // 9

++valor
console.log(valor) // 10