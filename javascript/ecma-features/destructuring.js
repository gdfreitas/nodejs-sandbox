const bob = {
    name: 'Bob The Turtle',
    legs: 4,
    shell: true,
    type: 'Amphibious',
    meal: 10,
    diet: 'Berries'
}

// método convencional
function feed1 (animal) {
    return `Feeding ${animal.name} ${animal.meal} kilos of ${animal.diet}`
}

console.log(feed1(bob)) // Feeding Bob The Turtle 10 kilos of Berries

// utilizando destructing para "desconstruir" um objeto com base em suas propriedades
function feed2 ({ name, meal, diet }) {
    return `Feeding ${name} ${meal} kilos of ${diet}`
}

console.log(feed2(bob)) // Feeding Bob The Turtle 10 kilos of Berries

// outro método que permite o objeto do parâmetro ser utilizado para outra finalidade caso necessário
function feed3 (animal) {
    const { name, meal, diet } = animal
    return `Feeding ${name} ${meal} kilos of ${diet}`
}

console.log(feed3(bob)) // Feeding Bob The Turtle 10 kilos of Berries

// destructuring com arrays e spread
const pessoas = ['Fulano', 'Ciclano', 'Beotrano']
;[fulano, ...outros] = pessoas
console.log(fulano)
console.log(outros)

// `swap-a-roo` utilizando destructing é possível aplicar esta técnica para troca de valores de variáveis
var one = 1
var two = 2
console.log(one, two) // 1, 2
var [one, two] = [two, one]
console.log(one, two) // 2, 1
