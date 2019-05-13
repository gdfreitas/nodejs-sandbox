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

// Node.js V12 - 
// Não precisa de construtor
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

