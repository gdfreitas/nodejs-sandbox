const frase = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident`;

const REGEX = /\w?dolor/g;

/**
 * Saída
 * [ 'dolor', 'dolor', 'dolor', 'dolor' ]
 */
console.log(frase.match(REGEX))

/**
 * Mas e para obter mais informações sobre os itens correspondentes?
 * Antes podíamos fazer assim através da iteração utilizando o "exec"
 *
 * Saída:
 * [ 'dolor', index: 12, input: '... ', groups: undefined ],
 * [ 'dolor', index: 105, input: '... ', groups: undefined ],
 * [ 'dolor', index: 254, input: '... ', groups: undefined ],
 * [ 'dolor', index: 308, input: '... ', groups: undefined ]
 */
let pattern;
while (pattern = REGEX.exec(frase)) {
  console.log(pattern)
}

/**
 * Agora podemos fazer utilizando matchAll
 *
 * Saída:
 * [ 'dolor', index: 12, input: '... ', groups: undefined ],
 * [ 'dolor', index: 105, input: '... ', groups: undefined ],
 * [ 'dolor', index: 254, input: '... ', groups: undefined ],
 * [ 'dolor', index: 308, input: '... ', groups: undefined ]
 */
for (let pattern of frase.matchAll(REGEX)) {
  console.log(pattern);
}
