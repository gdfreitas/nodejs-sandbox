// Docs: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/template_strings

/**
 * Template literals são literais string que permitem expressões embutidas.
 * Você pode usar string multi-linhas e interpolação de string com elas.
 * Elas eram chamadas "template strings" nas versões anteriores à especificação ES2015
 */

const horse = {
  name: 'Zorro',
  size: 'large',
  skills: ['jousting', 'racing'],
  age: 7
}

// Método convencional concatenando informações de variáveis em um texto
let bio = horse.name + ' is a ' + horse.size + ' horse skilled in ' + horse.skills.join(' & ')
console.log(bio) // Zorro is a large horse skilled in jousting & racing

// Método utilizando template literals para interpolação de variáveis
const { name, size, skills } = horse // object destructuring
bio = `${name} is a ${size} horse skilled in ${skills.join(' & ')}`
console.log(bio) // Zorro is a large horse skilled in jousting & racing

// Tagged template permite modificar a saída de uma string através de uma função
function isHorseOldOrYoung(splittedText, age, size) {
  console.log(arguments)
  console.log(splittedText) // [ 'This horse is ', ' and is also ', '' ]
  console.log(age) // 7
  console.log(size) // large
  return `${splittedText[0]}${age > 5 ? 'old' : 'young'}`
}

const horseAge = isHorseOldOrYoung`This horse is ${horse.age} and is also ${horse.size}`
console.log(horseAge) // This horse is old
