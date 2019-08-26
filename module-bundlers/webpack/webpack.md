# Module Bundler

## Webpack

Webpack é utilizado para compilar módulos JavaScript. Após instalado, pode ser utilizado através da CLI ou de sua API (programáticamente).

### Instalação

`npm i -D webpack` ou `npm i -D webpack@version`

Para versões >= 4.0.0, é necessário a CLI também: `npm i -D webpack-cli`

É recomendado que seja instalado localmente, pois facilita o upgrade em diferentes projetos, ou seja, evitar instalar globalmente (`-g`).

Para rodar localmente dentro do projeto, é utilizado os _npm scripts_:

Em `package.json`

```json
{
  "scripts": {
    "build": "webpack --config webpack.config.js"
  }
}
```

## Estrutura de Diretórios

A documentação oficial sugere uma estrutura de diretórios onde separa os arquivos fonte (`src`) dos arquivos de distribuição (`dist`).

## npx

O webpack pode ser executado utilizando _package runner_ (`npx`) do NPM através do comando `npx webpack` que toma como _entrypoint_ o `src/index.js` e gera o `dist/main.js` como _output_.

Este _package runner_ obtém os binários do node_modules local e só é compatível com versões Node >= 8.2 e NPM >= 5.2.0.

É possível também específicar um arquivo de configuração, desta forma: `npx webpack --config webpack.config.js`. Vale ressaltar que este comando de configuração deve ser utilizado somente para configurações customizadas, pois por padrão, o webpack já identifica a existência de um arquivo `webpack.config.js` e o utiliza.

Em `webpack.config.js`

```js
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
}
```

## Gerênciando "assets"

Qualquer tipo de arquivo é suportado pelo webpack para gerar o _bundle_, a única coisa que será necessária será um _loader_ para determinado arquivo.

Os loaders são declarados dentro do objeto `module` do `webpack.config.js`, e permite configurar loaders para serem utilizados por determinados arquivos, filtrados por expressões regulares.

### Carregando estilos CSS

Para arquivos de CSS, são necessários dois loaders `npm i -D style-loader css-loader`

Neste tipo de loader, é comum a [minificação](https://webpack.js.org/plugins/mini-css-extract-plugin/#minimizing-for-production) de css para melhores tempos de carregamentos em produção. Também há outros loaders bastante utilizados, como [`postcss`](https://webpack.js.org/loaders/postcss-loader), [`sass`](https://webpack.js.org/loaders/sass-loader), [`less`](https://webpack.js.org/loaders/less-loader)

```js
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
```

### Carregando Imagens

Para imagens é utilizado um outro loader `npm i -D file-loader`, é importante ressaltar, que ao importar algum arquivo de imagem, o webpack irá retornar uma referência do arquivo, assim esta variável pode ser utilizada.

Neste tipo de loader, é muito comum a utilização de minificadores e otimizadores de imagens para aprimorar o processo de carregamento das imagens. [`image-webpack-loader`](https://github.com/tcoopman/image-webpack-loader) e [`url-loader`](https://webpack.js.org/loaders/url-loader)

```js
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  }
}
```

### Carregando Fontes

Assim como nos arquivos de imagens é necessário utilizar o `file-loader` para carregamento de fontes, e a mesma será identificada no arquivo de `css` automaticamente pelo webpack.

```js
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}
```

### Carregando Dados (JSON, CSVs, XMLs)

O suporte à alguns tipos de dados, são na verdade, embutidos, assim como no Node.js, outros ainda dependem da instalação de loaders.

Instalando loaders para csv e xml `npm i -D csv-loader xml-loader`

```js
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.(csv|tsv)$/,
        use: [ 'csv-loader' ]
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      }
    ]
  }
}
```

### "assets" globais

O mais legal dessa arquitetura é que isso permite que componentes sejam criados e agrupados com seus próprios _assets_, evitando a criação de um diretório global de assets. Isso facilita a manutenção e compartilhamento de componentes e suas dependências.

De qualquer forma, o webpack ainda permite que sejam utilizados assets globais, e ainda por cima, permite que sejam criados [`aliases`](https://webpack.js.org/configuration/resolve#resolve-alias) para facilitar a importação.

## Gerenciando de "saídas"

Com o decorrer dos projetos utilizando webpack, se faz necessário lidar com as saídas geradas, algumas vezes [utilizando hashes no arquivos](https://webpack.js.org/guides/caching) para combater caching e gerenciar versões, outras vezes [criando múltiplos módulos](https://webpack.js.org/guides/code-splitting) ('bundles'), etc.

### Gerando múltiplos bundles

A configuração abaixo, irá gerar dois arquivos de bundles, conforme específicado. `app.bundle.js` e `print.bundle.js`. Os respectivos devem ser importados no `index.html`.

```js
const path = require('path')

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
```

#### Gerando `index.html` automático

Para facilitar a injeção dos bundles gerados, existe um plugin chamado [`HtmlWebpackPlugin`](https://github.com/jantimon/html-webpack-plugin) para gerar o index.html automaticamente. Também é possível utilizar [`html-webpack-template`](https://github.com/jaketrent/html-webpack-template) para prover algumas funcionalidades extras para o template padrão.

Para instalar: `npm i -D html-webpack-plugin`

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
```

## Limpando o diretório de distribuição (`dist`)

É uma boa prática limpar o diretório para evitar que arquivos não mais utilizados pela ultima build permaneçam por lá.

Há um plugin muito popular que faz isso e pode ser instalado: `npm i -D clean-webpack-plugin`

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
```

## Desenvolvimento

O webpack fornece algumas ferramentas para criar um ambiente de desenvolvimento que facilite a vida do desenvolvedor. _Nota: estes recursos devem ser utilizados somente em modo de desenvolvimento_

Adicionar o `mode: 'development'` às configurações.

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
```

### Source maps

Quando minificado no bundle final, os códigos JavaScript podem ficar difícil de rastrear ou identificar algum problema em algum ponto. Para facilitar o JavaScript fornece a geração de [source maps](http://blog.teamtreehouse.com/introduction-source-maps) o que mapeia o código compilado para o fonte original, facilitando as etapas citadas.

Existem [diferentes configurações disponíveis](https://webpack.js.org/configuration/devtool), antes de utilizar, verificar.

Exemplo: `devtool: 'inline-source-map'`

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
```

### Ferramenta de Desenvolvimento

As vezes pode se tornar chato ficar executando `npm run build` toda vez que são realizas manutenções no código. Para isso, há algumas diferentes opções que automaticamente compilam o código assim que alterado.

#### Watch Mode

Através desta opção, o webpack irá observar alteraçòes em todas as dependências do projeto, se alguma for atualizada, o código será recompilado.

Em `package.json`

```json
{
  "scripts": {
    "build": "webpack",
    "watch": "webpack --watch"
  }
}
```

Executar: `npm run watch`

_*O lado negativo deste modo, é que será necessário atualizar o navegador manualmente para verificar as alterações.*_

#### webpack-dev-server

Esta opção fornece um servidor http simples com a habilidade de _live-reloading_

Verificar a [Documentação](https://webpack.js.org/configuration/dev-server) para mais opções de configuração

Instalar: `npm i -D webpack-dev-server`

Configurar

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
```

Em `package.json`

```json
{
  "scripts": {
    "build": "webpack",
    "watch": "webpack --watch",
    "start": "webpack-dev-server --open"
  }
}
```

#### webpack-dev-middleware

Esta opção é um wrapper que irá emitir todos os arquivos processados pelo webpack para um servidor. Este pacote é utilizado internamente no `webpack-dev-server`, mas disponibilizado caso seja necessário criar cenários customizados.

Exemplo: combinando o `webpack-dev-middleware` com um servidor `express`.

Instalando: `npm i -D express webpack-dev-middleware`

Ajustar a propriedade `output.publicPath` pois ela será utilizada para servir os arquivos corretamente.

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
}
```

Criar o servidor express em `server.js`

```js
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});
```

## Code Splitting

É um dos recursos mais "atraentes" do webpack, permitindo que o código seja separado em vários bundles, que podem ser baixados por demanda ou em paralelo. Pode ser utilizado para obter bundles menores e controle de priorização de download de recurso. _Se usado corretamente deve impactar drasticamente no tempo de carregamento._

Há 3 principais abordagens disponíveis:

1. Entry Points: manualmente distribuir o código utilizando a configuraçõa de [`entry`](https://webpack.js.org/configuration/entry-context)
2. Prevent Duplication: Utilizar [SplitChunksPlugin](https://webpack.js.org/plugins/split-chunks-plugin/) para remover duplicados e separar em pedaços.
3. Dynamic Imports: separar os códigos através de chamadas às funções inline dentro dos módulos.

### Entry Points

Este é de longe, o mais facil e mais intuitivo modo de separar código, entretanto, é mais manual e tem algumas armadilhas.

```js
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    another: './src/another-module.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
```

Como dito, há algumas armadilhas, como:

- Se houver módulos duplicados entre os _chunks_, este irá ser incluído em ambos (Ex: lodash)

- Não é flexível e não pode ser usado para importar dinamicamente com o core da aplicação

### Prevent Duplication

Utilizando o plugin [`SplitChunksPlugin`](https://webpack.js.org/plugins/split-chunks-plugin/) irá permitir que dependencias em comum coexistam em ambos os _chunks_. Vamos ver como remover o "lodash" das dos dois _chunks_ gerados.

```js
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    another: './src/another-module.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}
```

Percebe-se que agora temos um novo _chunk_ gerado somente com o lodash, chamado de `vendors.bundle.js`

Alguns plugins fornecidos pela comunidade para code-splitting:

- [`mini-css-extract-plugin`](https://webpack.js.org/plugins/mini-css-extract-plugin): útil para separação de css da aplicação principal
- [`bundle-loader`](https://webpack.js.org/loaders/bundle-loader) usado para separar os códigos e aplicar tecnica de lazy-loading nos bundles finais
- [`promise-loader`](https://github.com/gaearon/promise-loader) similar ao `bundle-loader` mas utilizando promises.

### Dynamic Imports

Duas técnicas são suportadas pelo webpack para importação dinamica, uma é utilizando a sintáxe de `import()` que confere na [nesta proposta ao EcmaScript](https://github.com/tc39/proposal-dynamic-import), outra abordagem, que é legada, chama-se `webpack-specific` que utiliza `require.ensure`.

Configurar a propriedade `chunkFilename`

```js
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
```

Utilizaremos o `index.js` para importar dinâmicamente o `lodash`

```js
function getComponent() {
  return import(/* webpackChunkName: "lodash" */ 'lodash')
    .then(({ default: _ }) => {
      const element = document.createElement('div');

      element.innerHTML = _.join(['Hello', 'webpack'], ' ');

      return element;
    })
    .catch(error => 'An error occurred while loading the component');
}

getComponent()
  .then(component => {
    document.body.appendChild(component);
  })
```

### Bundle Analysis

Depois de começar a utilizar os recursos de code-splitting pode ser necessário utilizar ferramentas para analisar como está sendo formado os bundles. Para isto, [há uma ferramenta oficial](https://github.com/webpack/analyse), entretanto, há outras na comunidade também:

- [`webpack-chart`](https://alexkuz.github.io/webpack-chart/): gráfico de pizza interativo com estatísticas
- [`webpack-visualizer`](https://chrisbateman.github.io/webpack-visualizer/) visualiza e analise os bundles para verificar quais modulos estão tomando espaço, e possíveis duplicadas.
- Entre outros, podem ser encontrados [aqui](https://webpack.js.org/guides/code-splitting/#bundle-analysis)

## Caching

Quando utilizamos webpack para gerar bundles de uma aplicação modular, assim que um browser identifica que está requisitando o mesmo arquivo de um servidor, ele geralmente identifica que esse arquivo pode ser "cacheável", permitindo que ele possa ser carregado de forma mais rápida. Entretanto, isto pode dar dores de cabeças quando novos códigos precisam ser liberados.

### Output Filenames

O webpack provê substituições no `output.filename` por meio de templates, uma delas é a `[contenthash]` o qual fornece um hash único e será trocado toda vez que o conteúdo do arquivo mudar.

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Caching'
    })
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  }
}
```

Algumas técnicas podem ser utilizadas para separar códigos de terceiros (_node_modules_) em bundles separados, pois estes, difícilmente alteram na mesma frequência que os arquivos da aplicação, permitindo que os clientes baixem menos para continuarem atualizados.

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Caching'
    })
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
}
```

## Utilizando Webpack para criar Libraries

Assim como para aplicações, o webpack também pode ser utilizado para gerar bundles de libraries em JavaScript, tendo em vista que algumas estratégias mudam.

Será utilizado o `/lib` para criar uma pequena lib chamada `somador`, que terá uma função que permite somar números.

Exemplo: Uma lib que terá uma função `somar` que recebe dois argumentos e verifica se são números utilizando funções de uma 3rd party lib `lodash`, esta lib se chamará `somador` e deverá ser acessível através da variável de mesmo nome. Não deverá levar `lodash` junto no seu bundle final, e deverá ser possível utiliza-la via variável globa caso importada via `<script>`, através de ES6 modules `import somador from 'somador'` e CommonJS module `require('somador')`.

Configuração:

```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'somador.js',
    library: 'somador',
    libraryTarget: 'umd'
  },
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    }
  }
};
```

Código em: `module-bundlers/webpack/lib/somador`

## Variáveis de Ambiente

A linha de comando do webpack permite passar uma opção para definir variáveis de ambiente `--env` para que assim possam ser acessíveis via `webpack.config.js`.

Para acessar as propriedades, a exportação do objeto de configuração muda para uma função que recebe o parâmetro `env`

Ao executar: `webpack --env.NODE_ENV=local --env.production --progress`

```js
const path = require('path');

module.exports = env => {
  console.log('NODE_ENV: ', env.NODE_ENV); // 'local'
  console.log('Production: ', env.production); // true

  return {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  };
};
```

## Tree Shaking

É um termo muito comum utilizado no contexto de linguagem JavaScript para remoção de códigos considerados "mortos", ou seja, não utilizados. _O nome e o conceito foi popularizado pelo module bundler rollup_

Criar um utilitário, que possua 2 funções, na qual, somente 1 será utilizada no código, a outra será considerada dead-code.

```js
export function square(x) {
  return x * x;
}

export function cube(x) {
  return x * x * x;
}
```

Adicionar a propriedade `optimization.usedExports = true` significando que somente exports utilizados serão considerados.

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Tree Shaking'
    })
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    usedExports: true
  }
}
```

Ainda assim, é necessário definir uma propriedade chamada `sideEffects` no `package.json` do projeto, indicando que o webpack pode de maneira segura dropar os exports não utilizados, ou se de alguma forma, algum arquivo pode estar exportando algo globalmente, assim como em polyfills, que não necessariamente estariam sendo utilizados dentro deste projeto.

```json
{
  "name": "my-project",

  // Contém arquivo que possui efeitos colaterais
  "sideEffects": [
    "./src/some-side-effectful-file.js",
    "*.css"
  ],

  // O projeto não possui efeitos colaterais
  "sideEffects": false
}
```

_Nota: Esta propriedade também pode ser configurada no arquivo de configuração do webpack, através da propriedade `rules.sideEffects`._

## Production

Melhores práticas e utilitários para construção de apps

Os objetivos em ambiente de desenvolvimento são fortes source-mappings para facilitar debug e um servidor localhost com live reloading ou hot module replacement.

Já em produção, os objetivos são focar em bundles minificados, leves, com source mappings mais leves, assets otimizados para aprimorar tempo de carregamento.

Com essa separação lógica entre os ambientes, a documentação oficial do webpack recomenda que diferentes configurações do webpack sejam criandas por ambientes para projetos.

Utilizando o conceito de DRY _(Dont Repeat Yourself)_, manteremos uma configuração em comum entre os dois ambientes, e para fazer a mescla entre os arquivos, há um utilitário chamado [`webpack-merge`](https://github.com/survivejs/webpack-merge). Para instalar: `npm i -D webpack-merge`.

Sugere-se a criação de 3 novos arquivos `webpack.common.js`, `webpack.dev.js` e `webpack.prod.js`, conforme abaixo:

`webpack.common.js` contendo as configurações em comum, como `entry`, `plugins` e `output`

```js
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Production'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```

`webpack.dev.js` com as configurações de source mapping e dev-server

```js
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  }
});
```

`webpack.prod.js` com as configurações de production

```js
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
});
```

O `package.json` deve conter os scripts devidamente apontando para as configurações

```json
{
  "scripts": {
    "start": "webpack-dev-server --open --config webpack.dev.js",
    "build": "webpack --config webpack.prod.js"
  }
}
```

### Minification

Por padrão o webpack minificará automaticamente o código quando utilizado a flag `mode: 'production'`.

Nota: vale ressaltar que possívelmente outras libraries também tenham certas tomadas de decisão ao utilizar o modo de `production`, visto que é uma convenção do Node.js utilizar o `NODE_ENV` para separação entre ambientes, sendo assim, reduzindo o bundle final.

### npm_lifecycle_event

Uma alternativa à estrutura de arquivos por ambiente sugerida na documentação oficial, é utilizar a variável que captura o evento do npm que está em execução para encontrar o arquivo para aquele contexto. A variável é `process.env.npm_lifecycle_event`.

Neste cenário, temos somente um `webpack.config.js` no root da aplicação, que irá carregar os módulos conforme o evento.

- `npm run build` irá executar a configuração do webpack em `./build/build.js`
- `npm run server` irá executar a configuração do webpack em `./build/server.js`
- E em `./build/common.js` está a configuração padrão, esta opção, alternativa evita poluir o root do projeto com configurações por "ambiente".

Em `./build/common.js`

```js
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, '..', 'src', 'index.js')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Production'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '..', 'dist')
  }
};
```

Em `./build/server.js`

```js
const path = require('path');

const merge = require('webpack-merge');
const common = require('./common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '..', 'dist'),
    compress: true,
    port: 9000
  }
});
```

Em `./build/build.js`

```js
const merge = require('webpack-merge');
const common = require('./common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map'
});
```

Em `webpack.config.js`

```js
console.log(`Loading webpack for ${process.env.npm_lifecycle_event}`)

module.exports = require(`./build/${process.env.npm_lifecycle_event}.js`)
```

Em `package.json`

```json
{
  "scripts": {
    "build": "webpack",
    "server": "webpack-dev-server --open",
  }
}
```
