// imports com babel-loader no web
import TodoList from './features/TodoList'

import GitHub from './features/GitHub'

// import { sum as soma, sub } from './utils/mathematics'
import * as mathematics from './utils/mathematics'

import minhaPromise from './utils/minhaPromise'

TodoList.doSomethingNotRelatedToInstance()

const MinhaLista = new TodoList()

document.getElementById('bthAddTodo').onclick = () => {
    MinhaLista.add('Novo todo')
    MinhaLista.mostraUsuario()
}

// @babel/plugin-proposal-object-rest-spread
const usuario = {
    nome: 'Gabriel Dal Farra de Freitas',
    idade: 22,
    estado: 'Santa Catarina'
}

const { nome, ...resto } = usuario

console.log(nome)
console.log(resto)

// console.log(soma(1, 2))
// console.log(sub(10, 5))
console.log(mathematics.sum(1, 2))
console.log(mathematics.sub(10, 5))

// Promise ES6
minhaPromise()
    .then(console.log)
    .catch(console.error)

// @babel/plugin-transform-async-to-generator
// async e await ES8
const executaPromise = async () => {
    const resultado1 = await minhaPromise()
    console.log(resultado1)
    const resultado2 = await minhaPromise()
    console.log(resultado2)
}
executaPromise()

const gitHub = new GitHub()
