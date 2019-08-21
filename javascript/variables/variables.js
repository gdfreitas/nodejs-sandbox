// Pode começar com letra, $ ou _
var variavel = 10
var $variavel = 10
var _variavel = 10

// Não pode começar com números
var 1abc = 10; // SyntaxError: Invalid or unexpected token
var a123 = 10; // Permite usar letras e números no restante

// É possível usar acentos e alguns símbolos
var média = 10;
var àtoa = 20;
var dinh$iro = 10;
var você = {};
var não = 10;

// Não pode conter espaços
var a a = 10; // SyntaxError: Unexpected identifier

// Não permite palavras reservadas
var new = 10; // SyntaxError: Unexpected token new

// Case sensitive: maiúsculas e minúsculas são diferentes
var valor = 10
var Valor = 15