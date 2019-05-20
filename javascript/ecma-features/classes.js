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
