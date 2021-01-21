# nodejs-sandbox

Repositório destinado à agregar conceitos e práticas relacionados ao Node.js e JavaScript

## O que é Node.js

É uma plataforma para execução de JavaScript desenhada para ser orientada a eventos assíncronos, permitindo a criação de aplicações que utilizam recursos de rede de forma bastante escalável, podendo lidar com inúmeras conexões concorrentes, sendo mais eficiente comparado ao modelo tradicional baseado em threads.

### Características

- Utiliza um conceito de [Event Loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/) que é responsável pela "orquestração" das operações, delegando tarefas e executando callbacks.
- Quase nenhuma função no Node.js executa I/O diretamente, sendo assim difícilmente o processo se tornará bloqueante, facilitando escalonamento da aplicação.
- Grande parte do código é escrito em C++.
- É open-source ([repositório Github](https://github.com/nodejs/node)), fomentando uma comunidade bastante ativa fornecendo excelentes módulos e capacidades adicionais às aplicações.

### Bibliotecas

O Node.js depende de um [conjunto de bibliotecas](https://nodejs.org/en/docs/meta/topics/dependencies/#libraries), sendo as principais:

- Engine JavaScript [V8](https://v8.dev/) que é controlada pelo Node.js por meio de suas APIs em C++. É mantida pela Google e é a mesma engine do browser Google Chrome.
- [libuv](http://docs.libuv.org/) é responsável por abstrair operações de I/O não bloqueante em todas as plataformas suportadas pelo Node.js. Provê mecanismos para lidar com _filesystem_, DNS, _network_, _child processes_, _pipes_, _signal handling_, _polling_ e _streaming_. Possui também um _thread pool_ que é utilizado para cargas de trabalho que, à nível de sistema operacional, não conseguem ser executadas de modo assíncrono.

### Ferramentas

O Node.js também traz [algumas ferramentas](https://nodejs.org/en/docs/meta/topics/dependencies/#tools) sendo a mais comum o seu gerenciador de pacotes.

- [npm](https://docs.npmjs.com/) é uma ferramenta de linha de comando que permite o gerenciamento de pacotes no ecosistema do Node.js.

### Quais são as principais aplicações?

Pode ser utilizado inúmeras aplicações em diversas plataformas, como podemos ver neste relatório oficial [Node.js Foundation - User Survey Report](https://nodejs.org/en/user-survey-report/), que exibe inúmeras métricas de uso e impacto.

#### Principais uso

Abaixo, alguns exemplos onde podemos extrair o máximo da plataforma:

1. _Single Page Applications (SPAs)_ onde tende à ter um volume de requisições muito grande ao servidor em busca de pequenos fragmentos de dados que vão modelando a interface com o usuário.
2. _Real-time Applications (RTAs)_ estes tipos de aplicações executam uma carga ou frequência elevada de operações I/O, podendo aproveitar ao máximo a natureza baseada em eventos assíncronos e performance de rede através de websockets. _Ex: Chat rooms, Google Documents/Spreadsheets_
3. _Data Streaming Apps_ permite através da Stream API transmitir partes _(chunks)_ de dados sem fechar a conexão caso outras operações precisem ser atendidas, sem necessidade de _buffering_ facilitando _streaming_ em tempo real
4. _REST APIs_ possui uma posição de destaque na construção de arquiteturas fazendo o uso do protocolo HTTP, e algumas outras vantagens como a não necessidade de conversões entre objetos JSON com o banco NoSQL MongoDB.
5. _Command line tools_ se faz viável pela aptidão do Node.js na escrita de scripts de linha de comando.
6. _Hardware programming (IoT)_ pode extrair o máximo do Node.js para o processamento de inúmeras requisições de diversos dispositivos periféricos, tendo um fluxo de informações de maneira rápida. _Ex: robôs, quadcopters, dispositivos embarcados e IoT_

#### Fatores que implicam na utilização

- **Praticidade** a mesma linguagem pode ser utilizada frontend e backend, acelerando muito o ciclo de desenvolvimento.
- **Microservices** a natureza do Node.js é perfeita para construção de micro serviços
- **Compatibilidade Mobile** temos plataformas que permitem construção de aplicativos móveis através de JavaScript como React Native, Ionic, etc.

## Módulos

No ecosistema do Node.js temos módulos nativos e comunitários

- [Módulos nativos](https://nodejs.org/api/), embutidos no Node.js, não sendo necessário a instalação.
- [Módulos comunitários](https://www.npmjs.com/) implementados e distribuídos pela comunidade por meio de alguma ferramenta de gerenciamento de pacotes, sendo a alternativa oficial o **npm** (Node Package Manager).

> Nesta sandbox alguns desses pacotes são testados/explorados nos [core-modules](./core-modules), [community-modules](./community-modules) e também no [labs](./labs)

## Conceitos avançados

Alguns conceitos avançados do funcionamento do Node.js são explorados neste documento [docs/nodejs-conceitos-avancados.md](./docs/nodejs-conceitos-avancados.md), dentre eles estão: Event Loop, Relação com C++, libuv, OS e Performance.

## Links Oficiais

- [Official Node.js Guides](https://nodejs.org/en/docs/guides/)
- [Official Node.js Documentation](https://nodejs.org/dist/latest/docs/api/)
- [Node.js @ GitHub](https://github.com/nodejs/node)
