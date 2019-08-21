this.name = 'Pedro Paulo'
this.age = 19

function printContextName() {
  console.log(this.name);
}

// Não há "name" no contexto da função
printContextName(); // undefined

// Ao definir um objeto de contexto da função
printContextName.call({ name: 'Julia' }) // Júlia

// O contexto deste método é o próprio objeto
const User = {
  name: 'Gabriel De Freitas',
  age: 23,
  printName: function () {
    console.log(`The user name is ${this.name}`);
  },
  setAge: function (age) {
    console.log(`Set ${this.name} age to ${age}`);
  },
  printBirthYear: () => {
    const year = new Date().getFullYear() - this.age;
    console.log(`Birth year is ${year}`)
  }
}

User.printName() // The user name is Gabriel De Freitas

// Peculiaridades das Arrow-Functions, o contexto "this" é preservado em seu escopo
User.printBirthYear(); // Birth year is 2000 (2019 - 19)

/**
 * "call" é utilizado para chamar métodos passando o contexto desejado como primeiro argumento 
 * e os argumentos como os argumentos da função original, separados por vírgula
 */
User.printName.call({ name: 'João da Silva' }) // The user name is João da Silva
User.printName.call(this) // The user name is Pedro Paulo
User.setAge.call(this, 23) // Set Pedro Paulo age to 23

/**
 * "apply" é utilizado também para chamar métodos, assim como o "call", porém os argumentos
 * originais da função podem ser passados no formato de array
 */
User.setAge.apply(this, [23]) // Set Pedro Paulo age to 23

/**
 * "bind" é utilizado para "ligar/vincular" um contexto à uma função, e retorna essa função
 * com o contexto "ligado" podendo ser executada posteriormente
 */
var printUserName = User.printName.bind({ name: 23 });
printUserName();

/**
 * `arguments` é um objeto array-like disponível em todo escopo de função
 * 
 * Ao executar console.log(arguments) no Node.js pode-se perceber a assinatura do ModuleWrapper que envolve os módulos
 */
function multiply() {
  const args = Array.from(arguments)
  return args.reduce((acc, value) => value * acc);
}

console.log(multiply(2, 3, 4)); // 6