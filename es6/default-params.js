// método de soma de 2 numerais
function sum(a, b) {
    return a + b;
}

console.log(sum(1, 2)) // 3
console.log(sum(2)) // NaN

// alternativa convencional para considerar valores caso o parâmetro seja `undefined` ou `null`
function sum(a, b) {
    a = a || 0
    b = b || 0
    return a + b;
}

console.log(sum(1, 2)) // 3
console.log(sum(null, 2)) // 2

// `default parameters`: valores padrões para parâmetros `undefined` ou `null`
function sum(a = 0, b = 0) {
    return a + b;
}

console.log(sum(1, 2)) // 3
console.log(sum(2)) // 2
console.log(sum(null, 3)) // 2