class List {
    constructor () {
        this.content = []
    }

    add (data) {
        this.content.push(data)
        console.log(this.content)
    }
}

class TodoList extends List {
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

TodoList.doSomethingNotRelatedToInstance()

const MinhaLista = new TodoList()

document.getElementById('bthAddTodo').onclick = () => {
    MinhaLista.add('Novo todo')
    MinhaLista.mostraUsuario()
}
