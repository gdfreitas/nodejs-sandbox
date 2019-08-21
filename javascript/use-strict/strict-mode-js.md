# Diretiva de uso restrito no Javascript

```js
"use strict"
```

O modo "restrito" (strict-mode) foi criado no javascript para obter uma interpretação mais rigorosa da linguagem.

Ao declarar `"use strict"` no cabeçalho do arquivo JavaScript ou, no escopo local de uma função, o interpretador então pode proibir certas práticas que em versões antigas eram permitidas, mas não são recomendadas atualmente.

Ex:

```js
x = 10 // variável global implícita, sem o operador "var"
```

O principal objetivo é diminuir a chance de bugs difíceis de identificar (como um conflito de nome ao se criar uma global implícita, ou a existência de duas chaves iguais em objeto literal)

## Visão geral das restrições

Conforme [EcmaScript 262 2.5 Section C](http://www.ecma-international.org/ecma-262/5.1/#sec-C)

- Os identificadores `implements`, `interface`, `let`, `package`, `private`, `protected`, `public`, `static`, e `yield` são palavras reservadas para a próxima versão da linguagem, e lançam uma exceção quando utilizados no strict mode.

- Literais numéricos nunca são considerados octais, nem mesmo quando começam com zero. O mesmo vale para octais escapados em strings, como `'\012'` (que os browsers modernos nem suportam mais, mesmo fora do strict mode)

- Tentar atribuir um valor a uma variável que não existe no escopo atual não cria mais uma propriedade no objeto global (ou seja, não cria mais uma variável global). Em vez disso, lança uma exceção do tipo ReferenceError. Além disso, não é possível atribuir para propriedades que tenham o atributo {[[Writable]]:false}, nem para um accessor sem setter definido ({[[Set]]:undefined}), nem para propriedades de objetos cuja propriedade interna [[Extensible]] seja false. Em todos esses casos será lançado um TypeError.

- Não é possível redefinir `eval`, nem utilizá-lo com `++` ou `--`.

- Se você tentar acessar `arguments.caller` ou `arguments.callee` em uma função, será lançado um TypeError.

- Argumentos nomeados de funções não compartilham valores dinamicamente com as propriedades equivalentes indexadas numericamente. Por exemplo, em `function foo(bar) { arguments[0] = 10; }`, `bar` mantém o valor passado na chamada e não assume o valor 10.

- O mesmo é válido no caso inverso: em `function foo(bar) { bar = 10; }`, `arguments[0]` mantém o valor passado na chamada e não assume o valor 10.

- Se houver mais de uma propriedade com o mesmo nome em um objeto literal, um `SyntaxError` é lançado.

- Os identificadores `"eval"` e `"arguments"` não podem ser utilizados como nomes de parâmetros de funções que definam getters ou setters em objetos literais (mesmo que o código externo não esteja em strict mode, mas o corpo do getter/setter esteja).

- O `eval` em strict mode não pode instanciar variáveis ou funções no escopo de quem chama `eval`. O código passado ao `eval` irá criar um novo escopo, onde essas variáveis serão instanciadas.

- Em `strict mode`, não há coerção de `this` para objeto. Em casos onde `this` for `null` ou `undefined`, ele não será convertido para o objeto global. Por exemplo: em `function f(){ console.log(this) }; f();`, this é `undefined` em `strict mode`, e não o objeto global (em browsers, window). Além disso, se um valor primitivo for passado como this, ele não será convertido ao wrapper equivalente.

- O operador delete lança um `SyntaxError` quando utilizado em itens não deletáveis como variáveis, funções e argumentos. Por exemplo: `delete variavel`, `delete funcao` e `function(foo) { delete foo; }`.

- O operador delete lança um TypeError se a propriedade a ser deletada tiver o atributo { [[Configurable]]:false }.

- Se você tentar declarar uma variável com o nome de "eval" ou "arguments", será lançado um `SyntaxError`.

- O uso de with lança um SyntaxError.

- Numa cláusula catch não é possível utilizar "eval" ou "arguments" como nome da exceção; isso é um SyntaxError.

- Os identificadores "eval" e "arguments" não podem ser utilizados como nomes de parâmetros de funções; isso é um SyntaxError.

- Funções não podem ter múltiplos parâmetros com o mesmo nome; isso é um SyntaxError.

- É proibido às implementações estenderem o significado das propriedades "caller" e "arguments" de instâncias de funções para além do que consta da especificação.

- É um SyntaxError tentar utilizar "eval" ou "arguments" como nome de função ou parâmetro, assim como tentar forçar isso por meio do construtor Function.