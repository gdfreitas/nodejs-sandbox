console.log('A', new Date());
setTimeout(() => {
    console.log('I', new Date())
}, 0)
console.log('B', new Date())

/* 
    Saída execução:
    A 2018-10-12T22:31:02.609Z
    B 2018-10-12T22:31:02.611Z
    I 2018-10-12T22:31:02.612Z

    Por que o I vem em terceiro? Pois com timeout zero, a função é executado pelo EventLoop quando todo o processamento estiver sido finalizado
*/