// DOM - Document Object Model

// Representação da árvore hieraquica que é o DOM
const window = {
    location: {},
    document: {
        html: {
            head: {
                meta: {},
                title: {},
            },
            body: {
                h1: {},
                p: {},
                p: {
                    strong: {}
                },
                div: {},
            }
        }
    },
    history: {}
}

// Eventos
// https://developer.mozilla.org/pt-BR/docs/Web/Events