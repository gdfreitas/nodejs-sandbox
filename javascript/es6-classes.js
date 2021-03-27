class DatabaseEntity {
  constructor(id) {
    this._id = id
  }

  get id() {
    return this._id
  }

  static get version() {
    return 'Database Entity v1.0'
  }

  static printDriverVersion() {
    return 'Database Driver v0.8'
  }
}

class Registro extends DatabaseEntity {
  constructor(id) {
    super(id)
    this._description = 'Descrição padrão'
  }

  get description() {
    return this._description
  }

  set description(description) {
    this._description = description
  }

  processSomething() {
    return 'Hello, world!'
  }
}

const registro = new Registro(12345)

console.log(registro.id) // 12345
console.log(registro.id = 20) // 20, porém não altera o objeto (não tem set)
console.log(registro.id) // 12345

console.log(registro.processSomething()) // Hello, world!

// static getter function
console.log(Registro.version) // Database Entity v1.0

// static function
console.log(Registro.printDriverVersion()) // Database Driver v0.8

// Classe básica
class Person1 {
  constructor() {
    this.kind = 'Human'
  }
}

const person1 = new Person1();

console.log('person1 kind', person1.kind); // kind Human
person1.kind = 'Beast'; // Permite alterar
console.log('person1 kind', person1.kind); // kind Beast

// Classe com implementação intenção de propriedades "privada" (convenção)
class Person2 {
  constructor() {
    this._kind = 'Human'
  }

  get kind() {
    return this._kind;
  }
}

const person2 = new Person2();
console.log('person2 kind', person2.kind); // kind Human
person2.kind = 'Beast'; // Não altera a propriedade pois está "escondida" em um underline
console.log('person2 kind', person2.kind); // kind Human

// Descobre as propriedades do objeto
console.log(Object.getOwnPropertyNames(person2));
person2._kind = 'Beast'; // Alterou a propriedade :(
console.log('person2 kind', person2.kind); // kind Beast

// Node.js V12 Field Declaration
// Não precisa mais declarar as propriedades por meio do construtor
class Person3 {
  kind = 'Human'; // public
  #age = 34; // private

  get age() {
    return this.#age;
  }

  set age(age) {
    this.#age = age;
  }
}

const person3 = new Person3();
console.log('person3 kind', person3.kind); // person3 kind Human
console.log('person3 age', person3.age); // person3 age 34
person3.kind = 'Beast';
console.log('person3 kind', person3.kind); // person3 kind Beast

// Descobre as propriedades do objeto
console.log('person3', Object.getOwnPropertyNames(person2)); // person3 [ '_kind' ]
// person3.#age = 666; // ERROR
person3.age = 666; // setter
console.log('person3 age', person3.age); // person3 age 666

