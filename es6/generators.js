// generators: nota-se a declaração com uma sintaxe especial* e um operador novo `yield`
function * myGenerator () {
    yield 'first'
    let input = yield 'second'
    yield input
}

let generator = myGenerator() // retorna o objeto do generator
console.log(Object.toString(generator)) // function Object() { [native code] }

// toda vez que o método `next()` é executado, o generator é executado até a próxima chamada de `yield`,
// ... retornando um objeto contendo o valor retornado por `yield` e uma flag dizendo se o generator foi finalizado ou não
console.log(generator.next()) // { value: 'first', done: false }
console.log(generator.next()) // { value: 'second', done: false }

// passando valor para a próxima iteração
console.log(generator.next('third')) // { value: 'third', done: false }
console.log(generator.next()) // { value: undefined, done: true }

// iteradores com generators e o operador `for..of`
function * myGenerator2 () {
    yield `first`
    yield `second`
    yield `third`
}

for (var v of myGenerator2()) {
    console.log(v)
} // first, second, third
