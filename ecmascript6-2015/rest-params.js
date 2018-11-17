// rest params (ou variadic functions) permite infinito número de argumentos
function sum (...numbers) {
    return numbers.reduce((accumulator, value) => accumulator + value, 0)
}

console.log(sum(1, 2, 3, 4, 5, 6)) // 21

// rest params (ou variadic functions) permite infinito número de argumentos
function sumWithPadding (initial, ...numbers) {
    return numbers.reduce((accumulator, value) => accumulator + value, initial)
}

console.log(sum(100, 1, 2, 3, 4, 5, 6)) // 121
