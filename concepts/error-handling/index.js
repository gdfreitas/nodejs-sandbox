class MyCustomError extends Error {
    constructor(options) {
        super();
        this.errors = options.errors;
        this.name = 'MyCustomError';
    }
}

function myFunction(apiRest) {
    return new Promise(function myPromise(resolve, reject) {

        function emulateError() {
            throw new MyCustomError({
                errors: [{
                    card_number: 'Valor inválido'
                }]
            });
        }

        emulateError();
    })
}

myFunction()
    .then(console.log)
    .catch(handleError)

function handleError(err) {
    if (err instanceof TypeError) {
        // computar alguma coisa específica ao TypeError
        console.log(err);
        return;
    }

    if (err instanceof MyCustomError) {
        console.log(err.name);
        console.log(err.errors);
        console.log(err.stack);
        return;
    }

    console.log('Erro desconhecido');
    console.log(err.stack);
}