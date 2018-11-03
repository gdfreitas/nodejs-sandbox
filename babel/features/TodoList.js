import List from './List'

export default class TodoList extends List {
    constructor () {
        super()
        this.usuario = 'Gabriel Freitas'
    }

    mostraUsuario () {
        console.log(this.usuario)
    }

    static doSomethingNotRelatedToInstance () {
        console.log('You are doing something not related to any instance')
    }
}
