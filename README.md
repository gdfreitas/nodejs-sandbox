# Node.js

Repositório destinado à reunir e aplicar conceitos, documentar e ou referênciar qualquer conteúdo relacionado à Node.js

## O que é

Plataforma de código aberto para a execução de JavaScript.
É caracterizado pelo paradigma de Event-Driven, onde ações são executadas conforme eventos.
É composto pelo interpretador V8, do Google, com a biblioteca libuv, e por outros conjuntos de APIs/módulos.

## Características

**Javascript Runtime**:

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

**CommonJS**: específicação de sistema de módulos para javascript, utilizada pelo node. [Docs](http://wiki.commonjs.org/wiki/CommonJS)

## Core Modules

- [`util`](https://nodejs.org/api/util.html) módulo nativo com inúmeros métodos utilitários, um exemplo é o promisify, que retorna uma promise da função desejada;
- [`libuv`](https://github.com/libuv/libuv) biblioteca multi-plataforma responsável pela realização de I/O assíncrono, fornecendo implementação do event loop e do thread pool, juntamento com o suporte a TCP e UDP socket, resolução de DNS, sistema de arquivos, processos, entre outras;
- `crypto` fornece funcionalidade criptográfica que inclui um conjunto de invólucros para as funções hash, HMAC, cipher, decipher, sign, e verify do OpenSSL.
- TODO...

## Community Modules

- [Async](https://caolan.github.io/async/docs.html) módulo com vários métodos para o uso em trabalhos assíncronos com javascript.
- [EJS](http://ejs.co/) `<% Embedded Javascript %>`: linguagem de templating para gerar HTMLs com javascript.
- `express` servidor web não organizado e minimalista para NodeJS
- `express-validator` middleware para validações de parâmetros em requests
- `express-session` middleware para criação e controle de sessions utilizando cookies
- `nodemon` utilitário para monitorar alterações em arquivos e reiniciar servidores de desenvolvimento
- `consign` utilitário usado para carregar automaticamente todos os templates de um determinado diretório
- `body-parser` middleware para fazer o parse do body das requests
- `mongodb` base de dados NoSQL, alta performance, sem esquemas e orientado à documentos
- TODO...

## Referências

- [Official Node.js Guides](https://nodejs.org/en/docs/guides/)
- [Official Node.js Documentations](https://nodejs.org/dist/latest/docs/api/)
- [Node.js - Event Loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)
- [Node.js - Blocking Code & Non-Blocking Code](https://nodejs.org/en/docs/guides/dont-block-the-event-loop/)
- [Node.js @ GitHub](https://github.com/nodejs/node)
- [Node.js @ Rodrigo Branas](https://youtu.be/KtDwdoxQL4A?list=PLQCmSnNFVYnTFo60Bt972f8HA4Td7WKwq)
- [Loupe - Site interativo para entender callstack, event loop, APIs e callback queue](http://latentflip.com/loupe)
- [Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)
- [Web HTTP Headers @ Mozilla MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
- [Holding on to your Performance Promises - Maya Lekova and Benedikt Meurer](https://www.youtube.com/watch?v=DFP5DKDQfOc&)
- [ES6 Generators estão mudando nosso modo de escrever JavaScript](https://medium.com/nossa-coletividad/es6-generators-est%C3%A3o-mudando-nosso-modo-de-escrever-javascript-e99f7c79bdd7)
- [Pagar.me - Talks @ Youtube](https://www.youtube.com/channel/UCNhSCufrcOMeFvzEM7tt9Lw)
- [Curso Desenvolvedor Node.js @ Udemy](https://www.udemy.com/curso-completo-do-desenvolvedor-nodejs)
- [CommonJS Specification](http://wiki.commonjs.org/wiki/CommonJS)
- [The Strict Mode of ECMAScript](http://www.ecma-international.org/ecma-262/5.1/#sec-C)