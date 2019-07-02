# nodejs-sandbox

Repositório destinado à estudar, documentar e aplicar conceitos sobre qualquer conteúdo relacionado à Node.js e JavaScript;

## O que é Node.js

Plataforma de código aberto para a execução de JavaScript.
É caracterizado pelo paradigma de Event-Driven, onde ações são executadas conforme eventos.
É composto pelo interpretador V8, do Google, com a biblioteca libuv, e por outros conjuntos de APIs/módulos.

## Características

**JavaScript Runtime**:

- **Single Threaded**: o programa só "executa uma operação por vez" _(não é bem assim)_, contrário de multithreaded que consegue realizar múltiplas operações no mesmo instante de tempo.
- **Non-blocking**: o contexto de execução não é bloqueado por tarefas assícronas, seja I/O (acesso à disco e rede) ou por APIs como o timeout
- **Asynchronous**: paradigma para execução das operações com callbacks
- **Concurrent**: os callbacks executam concorrentemente

**Event loop (task scheduler)**: é o responsável por verificar se há chamadas na task queue que podem ser levadas para serem executadas no callstack (que deve estar vazio, pois uma chamada é processada por vez)

**Call stack (execution contexts)**: pilha de instruções que serão executadas para uma determinada chamada no contexto de execução;

**Task queue (delayed tasks)**: fila de instruções à serem executadas, são geralmente funções de callbacks utilizadas em alguma das APIs do Node.js (I/O, etc) ou Web APIs (DOM manipulation, etc):

**Worker pool (background-tasks - multithreaded)**: é onde são executadas instruções de APIs como I/O assíncrono do Node.js (através do libuv), onde a leitura de um arquivo ou a escuta de um socket é processada até que seu callback possa ser enviado para a task queue, ou quando a API do setTimeout está contando regressivamente o timer para enviá-lo para a task queue.

**Heap (memory available)**: é o recurso de memória do hardware disponível para armazenar valores de objetos, strings, etc. São automaticamente liberados quando não são mais utilizados, e esse processo é identificado através do garbage collection, que utiliza o conceito de contagem por referências para identificar quando é possível liberar recursos alocados para este determinado espaço da memória. [Ler mais em Memory Management @ Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Memory_Management)

_Exemplo: Uma função de callback do setTimeout, dispara um contador regressivo, assim que esse tempo estiver finalizado, a função de callback é enviada para a task queue aguarda pelo event loop._

Funções à serem executadas pelo Event-Loop são caracterizadas em:

- **Macro tasks**: categoriza tarefas que devem ser processada em um ciclo do Event Loop. Exemplo: setTimeout, I/O e setInterval.

- **Micro tasks**: categoriza tarefas que devem ser executadas rapidamente, fazendo com que após o Event Loop processar uma macro task, todas as micro tasks disponíveis na _task queue_ sejam processadas (enviadas para a callstack) antes da próxima macro task da fila, independente da posição em que as micro tasks estavam. Exemplo: Promises e process.nextTick.

**Vendor APIs**: São implementações dos conceitos acima. à exemplo:

- Node.js para runtime à nível de servidores;
- V8 Engine embutido no browser Google Chrome (web);
- SpiderMonkey Engine embutido no browser Firefox (web);

**REPL ou Read-Eval-Print-Loop**: forma de escrever e validar códigos através da linha de comando, é basicamente um "console interativo", comportamento semelhante ao console do navegador Chrome, onde pode-se criar variáveis, funções, e validá-las em linhas posteriores.

**CommonJS**: específicação de sistema de módulos para JavaScript, utilizada pelo node. [Docs](http://wiki.commonjs.org/wiki/CommonJS)

## Node.js Internals

Como funciona o Node.js internamente? Qual seu relacionamento com o C++?

![Node.js Internals](diagrams\nodejs_internals.PNG)

> **Repositório Node.js no GitHub https://github.com/nodejs/node**

- _`lib/internal`_ contém todas as implementações de funções e módulos disponíveis do lado "JavaScript" do Node.js  
- _`src`_ contém todas as implementações em C++ das funções, é onde estão alocados as implementações utilizando libuv, v8, etc.

### Ponte entre JavaScript and C++

- `process.binding()` é o método que conecta métodos JavaScript e C++, servindo como ponte  
- `v8` é utilizado para traduzir as estrutura de dados do JavaScript para os equivalentes em C++

![Node.js Internals - Exemplo Diagrama JavaScript vinculando método em C++](diagrams\nodejs_internals_linking_javascript_w_cplusplus.PNG)

## Threads

Quando iniciamos um programa em nosso computador, nós iniciamos algo denonimado `process`, sendo esta uma instância de um programa de computador que está sendo executado.

Para cada `process` podemos ter múltiplas `threads`, que por sua vez, pode ser interpretado como uma _lista de tarefas a fazer_, contendo uma sequência de instruções que deve ser processada pela CPU do computador, começando pelo topo, indo até o fim.

`OS Scheduler` é o responsável por definir qual `thread` deve ser processada pela CPU em um determinado momento do tempo, sabendo que cada CPU tem seu limite de recurso disponível, logo isso precisa ser gerênciado.

Ex:
> `process`
>> `thread 01`
>>> 1. Multiplicar 2 por 2
>>> 2. Atribuir resultado em uma variável
>>> 3. Dividir variável por 2
>>> 4. Verificar se a variável é igual a 2
>>> 5. ...

>> `thread 02`
>>> 1. Multiplicar 3 por 3
>>> 2. Atribuir resultado em uma variável
>>> 3. Dividir variável por 3
>>> 4. Verificar se a variável é igual a 3
>>> 5. ...

## Core Modules

- [`util`](https://nodejs.org/api/util.html) módulo nativo com inúmeros métodos utilitários, um exemplo é o promisify, que retorna uma promise da função desejada;
- [`libuv`](https://github.com/libuv/libuv) biblioteca multi-plataforma responsável pela realização de I/O assíncrono, fornecendo implementação do event loop e do thread pool, juntamento com o suporte a TCP e UDP socket, resolução de DNS, sistema de arquivos, processos, entre outras, implementada em C++;
- `crypto` fornece funcionalidade criptográfica que inclui um conjunto de invólucros para as funções hash, HMAC, cipher, decipher, sign, e verify do OpenSSL.
- TODO...

## Community Modules

- [`nodemon`](https://github.com/remy/nodemon#nodemon) ferramenta de restart de processos em caso de alterações de arquivos
- [`artillery`](https://github.com/artilleryio/artillery) ferramenta completa para testes de APIs, testes de cargas, testes funcionais, etc.
- [`mongodb`](https://github.com/mongodb/node-mongodb-native) driver de interação com banco de dados MongoDB;
- [`jsonwebtoken`](https://github.com/auth0/node-jsonwebtoken) é uma implementação da RFC-7519 (JSON Web Token) utilizada para encodar, assinar, etc estruturas de dados JSON de forma digital e segura.
- [`Express`](https://expressjs.com/pt-br/4x/api.html#express) servidor web não organizado e minimalista para NodeJS
  - [`express-validator`](https://express-validator.github.io/docs/) middleware para validações de parâmetros em requests
  - [`express-session`](https://github.com/expressjs/session) middleware para criação e controle de sessions utilizando cookies
  - `body-parser` middleware para fazer o parse do body das requests
- [`Hapi`](https://hapijs.com/api) é um framework para construção de aplicações e API's, com bastante foco na configuração e reuso.
  - [`@hapi/joi`](https://www.npmjs.com/package/@hapi/joi) permite criação de validações
- [`validator.js`](https://github.com/chriso/validator.js) utilitário com inúmeros métodos de validações em JavaScript (é dependência do express-validator) - [`nodemailer`](https://nodemailer.com/about/) criação e envio de e-mails
- [`Qs`](https://github.com/ljharb/qs) é um parser de querystring
- [`Sequelize`](http://docs.sequelizejs.com/) promise-based object-relational mapping (ORM) c/ suporte para PostgreSQL, MySQL, etc, suporta inúmeras características de bancos relacionais.
- [`Mongoose`](https://mongoosejs.com/docs/index.html) MongoDB object modeling, com suporte à validação, queries, hooks, etc.
- [`Knex.js`](https://knexjs.org/) é um utilitário para criação de queries para Postgres, MySQL, Oracle, etc, com o objetivo de ser flexível, portável e fácil, suporta inúmeras características de bancos relacionais.
- [`async`](https://caolan.github.io/async/docs.html) módulo com vários métodos para o uso em trabalhos assíncronos com JavaScript.
- [`consign`](https://www.npmjs.com/package/consign) utilitário usado para requerir automaticamente todos os arquivos de um determinado diretório
- [`connect-flash`](https://github.com/jaredhanson/connect-flash) utilitário para troca de mensagens através de cookies em requests.
- [`connect-mongodb-session`](https://github.com/mongodb-js/connect-mongodb-session) utilitário para armazenamento de sessões no MongoDB com o módulo Express.
- [`bcrypt.js`](https://github.com/dcodeIO/bcrypt.js/blob/master/README.md) documentação oficial do bcrypt.js
- [`Multer`](https://github.com/expressjs/multer) middleware para express para lidar com _multipart/form-data_ que é utilizado principalmente para upload de arquivos.
- [`PDFKit`](http://pdfkit.org/) ferramenta para criação de PDFs dentro do Node.js.
- [`Morgan`](https://github.com/expressjs/morgan) http request logger middleware.
- [`socket.io`](https://socket.io/docs/) biblioteca que permite comunicação realtime utilizando websockets.
- [`express-ws](https://www.npmjs.com/package/express-ws) websockets para aplicações com servidor http com express.
- [`helmet`](https://github.com/helmetjs/helmet) middleware p/ express que adiciona varios http headers para previnir alguns attacks conhecidos;
- [`compression`](https://github.com/expressjs/compression) middleware para express para habilitar compression (gzip/deflate) de recursos;
- [`mocha`](https://mochajs.org/) framework para nodejs e browser para implementaçõa de testes unitários;
- [`chai`](https://www.chaijs.com/) biblioteca de asserção para nodejs e browser;
- [`Sinon.JS`](https://sinonjs.org/) biblioteca para mocks, stubs, spies em testes;
- [`node-config`](https://github.com/lorenwest/node-config) permite facilmente configurar parâmetros de deployments por environment (development, staging, production, etc)
- [`dovenv`](https://github.com/motdotla/dotenv) permite carregar environment variables através de um arquivo `.env` para o `process.env`
- [`sucrase`](https://github.com/alangpierce/sucrase) alternativa ao Babel para compilação de TypeScript, Flow, JSX, imports -> JavaScript, muito mais veloz para ambientes de desenvolvimento.
- [`TypeScript`](https://github.com/Microsoft/TypeScript) "superset" of JavaScript, conjunto de extra-features ao JavaScript, principalmente, tipagem estática.
- [`gm`](https://github.com/aheckmann/gm) [GraphicsMagick and ImageMagick para Node.js](http://www.graphicsmagick.org/) - utilitário para manipulação de imagens

### Templating Engines

- [`EJS`](http://ejs.co/) permite construção de templates dinâmicos com uma sintáxe própria.
- [`handlebars`](https://handlebarsjs.com/) permite construção de HTMLs com expressões customizadas, sintáxe de expressões parecida com a do Angular.js 1.x.
- [`pug`](https://pugjs.org/api/reference.html) permite construção de HTMLs minimalistas, sem tags de fechamentos, com identação estilo `.yaml` para definir blocos de tags.

## Docs & References

- [Official Node.js Guides](https://nodejs.org/en/docs/guides/)
- [Official Node.js Documentation](https://nodejs.org/dist/latest/docs/api/)
- [Official MongoDB Documentation](https://docs.mongodb.com/manual/)
- [CommonJS Specification](http://wiki.commonjs.org/wiki/CommonJS)
- [Node.js @ GitHub](https://github.com/nodejs/node)
- [MongoDB - Atlas](https://docs.atlas.mongodb.com/connect-to-cluster/)
- [Official Stripe.js Docs](https://stripe.com/docs)
- [Web HTTP Headers @ Mozilla MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
- [HTTP Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
- [What is a session in a Web Application?](https://www.quora.com/What-is-a-session-in-a-Web-Application)
- [SendGrid - Mailer](https://sendgrid.com/docs/)
- [Error Handling with Express](https://expressjs.com/en/guide/error-handling.html)
- [Json](https://www.json.org/)

## Articles

- [Node.js - Event Loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)
- [Node.js - Blocking Code & Non-Blocking Code](https://nodejs.org/en/docs/guides/dont-block-the-event-loop/)
- [Loupe - Site interativo para entender callstack, event loop, APIs e callback queue](http://latentflip.com/loupe)
- [Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)
- [MVC - Modern Web App Architecture @ MDN](https://developer.mozilla.org/en-US/docs/Web/Apps/Fundamentals/Modern_web_app_architecture/MVC_architecture)
- [Holding on to your Performance Promises - Maya Lekova and Benedikt Meurer](https://www.youtube.com/watch?v=DFP5DKDQfOc&)
- [The Strict Mode of ECMAScript](http://www.ecma-international.org/ecma-262/5.1/#sec-C)
- [ES6 Generators estão mudando nosso modo de escrever JavaScript](https://medium.com/nossa-coletividad/es6-generators-est%C3%A3o-mudando-nosso-modo-de-escrever-javascript-e99f7c79bdd7)
- [CSRF Attacks, XSRF or Sea-Surf](https://www.acunetix.com/websitesecurity/csrf-attacks/)
- [Node.js Streams - Everything you need to know](https://medium.freecodecamp.org/node-js-streams-everything-you-need-to-know-c9141306be93)
- [MySQL Data - Best way to implement pagination](https://stackoverflow.com/questions/3799193/mysql-data-best-way-to-implement-paging)
- [Sequelize - Pagination](http://docs.sequelizejs.com/manual/tutorial/querying.html#pagination-limiting)
- [AJAX - Getting started](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started)
- [Introduction to _fetch()_](https://developers.google.com/web/updates/2015/03/introduction-to-fetch)
- [Node.js Detailed Approach Logging](https://blog.risingstack.com/node-js-logging-tutorial/)
- [TypeScript - Vantagens, Mitos e Conceitos @ RocketSeat](https://blog.rocketseat.com.br/typescript-vantagens-mitos-conceitos)
- [Node.js API Gateway vs API Manager @ Luiz Tools](https://www.luiztools.com.br/post/api-gateway-em-arquitetura-de-microservices-com-node-js/)

## Cursos, Talks, Playlists, etc

- [Curso Desenvolvedor Node.js - Jorge Sant Ana @ Udemy](https://www.udemy.com/curso-completo-do-desenvolvedor-nodejs)
- [NodeJS - The Complete Guide - Maximilian Schwarzmuller @ Udemy](https://www.udemy.com/nodejs-the-complete-guide/)
- [Advanced Node.js for Developers - Stephen Grider @ Udemy](https://www.udemy.com/advanced-node-for-developers)
- [Node.js Playlist - Rodrigo Branas @ Youtube](https://youtu.be/KtDwdoxQL4A?list=PLQCmSnNFVYnTFo60Bt972f8HA4Td7WKwq)
- [Pagar.me - Talks @ Youtube](https://www.youtube.com/channel/UCNhSCufrcOMeFvzEM7tt9Lw)
- [SQL vs NoSQL @ Academind](https://academind.com/learn/web-dev/sql-vs-nosql/)
- [MongoDB Learn More @ Academind](https://academind.com/learn/mongodb)
