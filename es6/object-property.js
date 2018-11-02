const age = 21
const name = 'Gabriel'

// modo convencional de atribuir valores de variáveis à atributos de objetos
const person1 = { age: age, name: name }
console.log(person1) // { age: 21, name: 'Gabriel' }

// property shorthand pode ser utilizado quando o nome da variável é o mesmo nome de um atributo de um objeto
const person2 = { age, name }
console.log(person2) // { age: 21, name: 'Gabriel' }
