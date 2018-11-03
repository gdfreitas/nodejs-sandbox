// imports com babel-loader no web
import TodoList from './features/TodoList'

// import { sum as soma, sub } from './utils/mathematics'

import * as mathematics from './utils/mathematics'

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
