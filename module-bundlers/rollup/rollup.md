# rollup.js

Rollup é um module bundler para JavaScript que compila de pequenos a grandes códigos como libs ou aplicações. Utiliza o formato padronizado de módulos disponibilizado na especificação ES6.

## Por quê?

Desenvolver software é geralmente mais facil se o projeto for separado em pequenas partes, visto que isso diminui a probabilidade de interações não desejadas e reduz dramaticamente a complexidade dos problemas que teremos que resolver. Infelizmente o JavaScript não incluia esta funcionalidade como principal da linguagem.

Isso finalmente mudou com a chegada da revisão do EcmaScript6 (ES6), o qual incluiu a sintaxe para importar e exportar funções e dados, a fim de ser compartilhado entre diferentes scripts. Mas esta funcionalidade é suportada somente em browsers mais modernos e ainda não está finalizada no Node.js (fase experimental).

O rollup permite que código seja escrito nesse novo sistema de módulos e compila permitindo compatibilidade entre versões antigas como CommonJS, AMD, IIFE-style scripts, permitindo que os códigos sejam escritos já na versão mais atualizada do sistema de módulos, além de outros benefícios que o rollup fornece, como _tree-shaking_ que elimina código não utilizado através de uma analise dos _imports_, eliminando dependência extra que aumenta tamanho do bundle final.

## Instalação

`npm i -g rollup` ou `npm i -D rollup`, pode ser utilizado via APIs do JavaScript, ou CLI.

_Exemplo:_

- Compila no formato _immediately-invoked-function-expression (IIFE)_ para ser utilizado em tags `<script>` em browsers: `rollup main.js --file bundle.js --format iife`

- Compila no formato _CommonJS_ para ser utilizado em Node.js: `rollup main.js --file bundle.js --format cjs`

- Compila no formato _[UMD (universal module definition)](https://github.com/umdjs/umd)_ que é um padrão de código para módulos em JavaScript que funciona em qualquer plataforma, neste a documentação diz que requer um nome, mas executou da mesma forma: `rollup main.js --file bundle.js --format umd --name "myBundle"`

## Configuração

O _rollup_ permite que seja utilizado somente via CLI, mas recomenda que seja criado um arquivo de configuração, o que também permite que seja chamado via npm scripts.

- Utilizando nome de arquivo padrão _(rollup.config.js)_: `rollup --config`
- Especificando arquivo de configuração: `rollup --config my.config.js`

O arquivo de configuração é basicamente um módulo ecmascript que exporta um objeto com as opções desejadas, tipicamente nomeado como `rollup.config.js`.

Uma grande quantidade de opções estão disponíveis. [Consultar aqui](https://rollupjs.org/guide/en/#big-list-of-options)

```js
module.exports = {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  }
};
```

### Multiplas configurações

Múltiplas configurações de entrada e saída podem ser utilizadas, basta informar um array em vez do objeto.

```js
export default [{
  input: 'main-a.js',
  output: {
    file: 'dist/bundle-a.js',
    format: 'cjs'
  }
}, {
  input: 'main-b.js',
  output: [
    {
      file: 'dist/bundle-b1.js',
      format: 'cjs'
    },
    {
      file: 'dist/bundle-b2.js',
      format: 'esm'
    }
  ]
}];
```

### Async Fetch Config

O arquivo de configuração também pode ser obtido de algum serviço/repositório, basta exportar uma Promise que resolva para um objeto ou um array.

```js
import fetch from 'node-fetch';
export default fetch('/some-remote-service-or-file-which-returns-actual-config');
```

ou

```js
export default Promise.all([
  fetch('get-config-1'),
  fetch('get-config-2')
])
```

### Obtendo perfis diferentes

Ao executar `rollup --config --configDebug`, o arquivo de debug será utilizado.

```js
import defaultConfig from './rollup.default.config.js';
import debugConfig from './rollup.debug.config.js';

export default commandLineArgs => {
  if (commandLineArgs.configDebug === true) {
    return debugConfig;
  }
  return defaultConfig;
}
```

## CLI Flags

Uma grande quantidade de opções estão disponíveis via CLI

```raw
-c, --config <filename>     Use this config file (if argument is used but value
                              is unspecified, defaults to rollup.config.js)
-d, --dir <dirname>         Directory for chunks (if absent, prints to stdout)
-e, --external <ids>        Comma-separate list of module IDs to exclude
-f, --format <format>       Type of output (amd, cjs, esm, iife, umd)
-g, --globals <pairs>       Comma-separate list of `moduleID:Global` pairs
-h, --help                  Show this help message
-i, --input <filename>      Input (alternative to <entry file>)
-m, --sourcemap             Generate sourcemap (`-m inline` for inline map)
-n, --name <name>           Name for UMD export
-o, --file <output>         Single output file (if absent, prints to stdout)
-v, --version               Show version number
-w, --watch                 Watch files in bundle and rebuild on changes
--amd.id <id>               ID for AMD module (default is anonymous)
--amd.define <name>         Function to use in place of `define`
--assetFileNames <pattern>  Name pattern for emitted assets
--banner <text>             Code to insert at top of bundle (outside wrapper)
--chunkFileNames <pattern>  Name pattern for emitted secondary chunks
--compact                   Minify wrapper code
--context <variable>        Specify top-level `this` value
--dynamicImportFunction <name>         Rename the dynamic `import()` function
--entryFileNames <pattern>  Name pattern for emitted entry chunks
--environment <values>      Settings passed to config file (see example)
--no-esModule               Do not add __esModule property
--exports <mode>            Specify export mode (auto, default, named, none)
--extend                    Extend global variable defined by --name
--no-externalLiveBindings   Do not generate code to support live bindings
--footer <text>             Code to insert at end of bundle (outside wrapper)
--no-freeze                 Do not freeze namespace objects
--no-indent                 Don't indent result
--no-interop                Do not include interop block
--inlineDynamicImports      Create single bundle when using dynamic imports
--intro <text>              Code to insert at top of bundle (inside wrapper)
--namespaceToStringTag      Create proper `.toString` methods for namespaces
--noConflict                Generate a noConflict method for UMD globals
--no-strict                 Don't emit `"use strict";` in the generated modules
--outro <text>              Code to insert at end of bundle (inside wrapper)
--preferConst               Use `const` instead of `var` for exports
--preserveModules           Preserve module structure
--preserveSymlinks          Do not follow symlinks when resolving files
--shimMissingExports        Create shim variables for missing exports
--silent                    Don't print warnings
--sourcemapExcludeSources   Do not include source code in source maps
--sourcemapFile <file>      Specify bundle position for source maps
--strictDeprecations        Throw errors for deprecated features
--no-treeshake              Disable tree-shaking optimisations
--no-treeshake.annotations  Ignore pure call annotations
--no-treeshake.propertyReadSideEffects Ignore property access side-effects
--treeshake.pureExternalModules        Assume side-effect free externals
```

## JavaScript API

O rollup disponibiliza uma API que pode ser utilizava via Node.js. Na documentação diz que esta deve ser utilizada somente em casos específicos, como geração de bunles programaticamente.

[Mais sobre a API aqui](https://rollupjs.org/guide/en/#javascript-api)

## ES Module Syntax

Abaixo iremos ver um resumo de referência sobre os comportamentos definidos para modulos na especificação [EcmaScript 2015 (ES6)](https://www.ecma-international.org/ecma-262/6.0/), visto que será essencial para desenvolver melhor com rollup.

### Importing

Valores importados não podem ser reatribuitos, entretanto objetos e arrays podem ser alterados, sendo assim, o módulo será afetado pela alteração em todos os locais que o importam. Sendo assim, os módulos têm um comportamento simiular ao de declarações com `const`.

#### Named Imports

Importar um item em específico de um módulo com seu nome original

```js
import { something } from './module.js'
```

Importar um item específico de um módulo, com um nome customizado atribuído

```js
import { something as somethingElse } from './module.js'
```

#### Namespace Imports

Importar tudo de um módulo como um objeto que expoe todos seus métodos e propriedades que são exportadas.

```js
import * as module from './module.js'
```

Se presente, o `exports default` pode ser acesso via `module.default`

#### Default Import

Importar a exportação padrão (`exports defult`)

```js
import something from './module.js'
```

#### Empty Import

Carrega o código do módulo mas não expoe nenhum objeto/propriedade

```js
import './module.js'
```

É bastante util para polyfills, ou quando o propósito principal é mexer com prototypes.

#### Dynamic Import

Importar módulos utilizando a [`dynamic import API`](https://github.com/tc39/proposal-dynamic-import#import)

```js
import('./modules.js').then(({ default: DefaultExport, NamedExport })=> {
  // do something with modules.
})
```

É bastante util para _code-splitting (separação de módulos)_ e também utilizando módulos _on-the-fly (via runtime)_.

### Exporting

#### Named Exports

Exportar um valor que foi declarado anteriormente.

```js
const something = true;
export { something }
```

Renomear ao exportar

```js
const something = true;
export { something as somethingElse };
```

Exportar diretamente ao declarar

```js
// this works with `var`, `let`, `const`, `class`, and `function`
export const something = true;
```

#### Default Export

Exportar um valor por padrão, esta práticamente é recomendada somente caso exista um único export no módulo, sendo má prática misturar default e named exports, apesar de ser permitido pela especificação.

```js
export default something
```

### How bindings work

Os módulos ES exportam através do conceito de _live bindings_, não sendo os valores em si, sendo que somente métodos do seu módulo os podem alterar.

Em `incrementer.js`

```js
export let count = 0;

export function increment() {
  count += 1;
}
```

Em `main.js`

```js
import { count, increment } from './incrementer.js';

console.log(count); // 0
increment();
console.log(count); // 1

count += 1; // Error — only incrementer.js can change this
```

## Gerênciando Bundles

Em `src/foo.js`

```js
export default 'hello world!';
```

Em `src/main.js`

```js
import foo from './foo.js';

export default function () {
  console.log(foo);
}
```

Para criar o bundle, executar: `rollup src/main.js -f cjs`, percebe-se que o output é impresso no console, visto que por padrão a saída vai para o `stdout`.

Para salvar para um arquivo, usa-se a flag `-o filename`: `rollup src/main.js -o bundle.js -f cjs` ou o o caracter que indica a saída para um arquivo, porém é menos flexível `rollup src/main.js -f cjs > bundle.js`

### Utilizando arquivos de configuração

A fim de ficar mais facil de declarar as opções do projeto, iremos utilizar o arquivo `rollup.config.js`

```js
export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  }
};
```

_Nota: é possível utilizar também os modulos do CommonJS neste arquivo (`module.exports = { /*config*/}`)_

Para rodar deve ser passado a flag `-c` ou `--config`: `rollup -c -o bundle.js`

Diferentes arquivos podem ser especificados para a configuração: `rollup --config rollup.config.dev.js` ou `rollup --config rollup.config.prod.js`

### Instalando rollup localmente

Quando trabalhando em times ou ambientes distribuídos, é mais inteligente utilizar o rollup de maneira local, instalado no projeto, prevenindo que diferentes versões sejam utilizados por membros da equipe.

#### Instalar local

Comando: `npm i -D rollup`

#### Executar

Comando `npx rollup --config`

Ou através de npm scripts no `package.json`

```json
{
  "scripts": {
    "build": "rollup --config"
  }
}
```

## Utilizando Plugins

Conforme o projeto vai ser tornando maior, algumas necessidades vêm a tona, como importar módulos instalados via NPM, compilar código com Babel, trabalhar com arquivos como json, etc.

Para isso são utilizados os _plugins_, que alteram o comportamento do rollup em pontos chaves do processo de bundling, [uma lista destes plugins é sugerida pela documentação](https://github.com/rollup/awesome).

### Exemplo rollup-plugin-json

Em `package.json`

```json
{
  "scripts": {
    "build": "rollup -c"
  }
}
```

Instalar o plguin como dependência de desenvolvimento: `npm i -D rollup-plugin-json`

Alterar o `main.js` para importar uma propriedade do `package.json`

```js
import { version } from '../package.json';

export default function () {
  console.log('version ' + version);
}
```

Atualizar o `rollup.config.js` para utilizar o plugin.

```js
import json from 'rollup-plugin-json'

export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  },
  plugins: [
    json()
  ]
};
```

Nota: perceba que somente a propriedade `version` é importada, isso é o `tree-shaking` em ação.

## Code Splitting

Para testar esta funcionalidade, utilizamos o `main.js` abaixo:

```js
export default function () {
  import('./foo.js')
    .then(({ default: foo }) => console.log(foo));
}
```

O rollup irá utilizar o dynamic import para criar um chunk separado que só é carregado quando for demandado. É necessário então que a gente informe ao rollup aonde colocar este chunk em vez de passar a opção `--file` ou `-c` iremos agora passar um diretório de outputs com a opção `--dir` ou `-d`

Comando: `rollup src/main.js -f cjs -d dist`

Ao executar o comando, percebe-se que uma pasta `dist` foi criada, contendo dois arquivos, um `main.js` e um `chunk-[hash].js` onde o hash é uma string baseada no conteúdo. Isso também é configurável através das propriedades [`output.chunkFileNames`](https://rollupjs.org/guide/en/#outputchunkfilenames) e [`output.entryFileNames`](https://rollupjs.org/guide/en/#outputentryfilenames)

==

Ao criar um segundo arquivo `main2.js` que também depende do `foo.js`, o build automaticamente irá utilizar a mesma referência.

Comando: `rollup src/main.js src/main2.js -f cjs`

### Browser

O mesmo código acima pode ser gerado para browsers via ES modules, AMD loader ou System JS.

#### ES modules

Comando: `rollup src/main.js src/main2.js -f esm -d dist`

```html
<!doctype html>
<script type="module">
  import main2 from './dist/main2.js';
  main2();
</script>
```

#### SystemJS

Comando: `rollup src/main.js src/main2.js -f system -d dist`

Instalar SystemJS: `npm install --save-dev systemjs`

```html
<!doctype html>
<script src="node_modules/systemjs/dist/system-production.js"></script>
<script>
  System.import('./dist/main2.js')
  .then(({ default: main }) => main());
</script>
```

[Ver aqui um exemplo de `code-spliting`](https://github.com/rollup/rollup-starter-code-splitting) que mostra como configurar uma web app com ES modules nativos, e como suportar utilizando o SystemJS como fallback caso necessário.

## Referências

[rollup.js - Official Docs](https://rollupjs.org/guide/en/)
