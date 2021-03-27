// Normalmente utilizado
let numero = 1000000000;
console.log(numero); // 1000000000

// Exemplos utilizando underline como separador numérico (facilita visualizacão para devs)
numero = 1_000_000_000;
console.log(numero); // 1000000000

numero = 1_0_0_0_0_0_0_0_0_0;
console.log(numero); // 1000000000

numero = 0.0_0_0_0_0_0_0_0_0_1;
console.log(numero); // 1e-10

// Alguns exemplos de uso incorreto que irão resultar em erros
// console.log(_1111); // ReferenceError: _1111 is not defined
// console.log(1_.1111); // Numeric separators are not allowed at the end of numeric literals
// console.log(1._1111); // SyntaxError: Invalid or unexpected token
// console.log(1111_); // SyntaxError: Numeric separators are not allowed at the end of numeric literals
