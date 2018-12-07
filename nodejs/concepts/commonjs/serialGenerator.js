const MAX = 10000

const generate = () => {
    return Math.floor(Math.random() * MAX)
}

// Existem diferentes formas disponíveis para exportar funções/objetos/variáveis do seu módulo
// module.exports = { generate }
// module.exports.generate = generate;
// exports.generate = generate;

module.exports = {
    generate: generate
}

