// `var` apesar de não definida ainda, é possível acessá-la antes de sua declaração, pois em runtime ela estará no topo do bloco da função
console.log(i) // undefined

// escopo de `var` é o mais próximo bloco de função, que neste caso é o do próprio arquivo
for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i) // 5, 5, 5, 5, 5
    }, 1000)
}

// acessando var fora após seu bloco de declaração
console.log(i) // 5

// `let` não é acessível antes de ser declarada
console.log(j) // ReferenceError: j is not defined

// escopo de `let` é o mais próximo bloco, que neste caso é o bloco do `for`, e somente dentro do for.
for (let j = 0; j < 5; j++) {
    setTimeout(() => {
        console.log(j) // 0, 1, 2, 3, 4
    }, 1000)
}

// acesso fora do bloco
console.log(j) // ReferenceError: j is not defined
