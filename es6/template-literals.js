const horse = {
    name: 'Zorro',
    size: 'large',
    skills: ['jousting', 'racing'],
    age: 7
}

// modo convencional, concatenando informações de um objeto em uma frase
let bio = horse.name + ' is a ' + horse.size + ' horse skilled in ' + horse.skills.join(' & ')
console.log(bio); // Zorro is a large horse skilled in jousting & racing

// object destructuring para associar as propriedades que desejamos em variáveis
const { name, size, skills } = horse;

// utilizando template literal para parsear os valores das variáveis dentro da string
bio = `${name} is a ${size} horse skilled in ${skills.join(' & ')}`
console.log(bio); // Zorro is a large horse skilled in jousting & racing

// template literal - advanced tagging
function isHorseOldOrYoung(splittedText, age, size) {
    console.log(arguments)
    console.log(splittedText) // [ 'This horse is ', ' and is also ', '' ]
    console.log(age) // 7
    console.log(size) // large
    return `${splittedText[0]}${age > 5 ? 'old' : 'young'}`;
}

const bio2 = isHorseOldOrYoung`This horse is ${horse.age} and is also ${horse.size}`;
console.log(bio2) // This horse is old