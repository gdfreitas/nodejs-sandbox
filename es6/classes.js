class Registro {

    constructor(_id) {
        this._id = _id;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    getSomething() {
        return 'Hello, world!'
    }

}

const registro = new Registro(12345);
console.log(registro.id) // 12345
console.log(registro.id = 20) // 20
console.log(registro.id) // 20
console.log(registro.getSomething()) // Hello, world!