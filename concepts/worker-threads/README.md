# Worker Threads

## Requisitos

- Worker Threads são suportadas somente acima da versão 10.5.0 do Node.js através da flag `--experimental-worker`
- A partir da versão 12.0.0 já é nativo

## O que é

É uma alternativa ao método provido pelo módulo de **Cluster**, o qual cria várias cópias isoladas da aplicação consumindo mais recursos de máquina.

Esta implementação de worker-threads utiliza o módulo [`vm`](https://nodejs.org/api/vm.html) do Node.js.

Diferente do `child_process` e `cluster` o `worker threads` pode compartilhar memória através dos objetos `ArrayBuffer` e `SharedArrayBuffer`

Conforme a documentação, Workers (threads) são úteis para performar operações que demandam bastante CPU, como um cálculo complexo, por exemplo.

Lembrando que na arquitetura do Node.js este tipo de implementaçõa nào irá auxiliar muito com I/O itensivo, pois a implementação do Node.js para este tipo de tarefa é mais eficiênte do que nos workers.

Evitar troca de mensagens muito grandes entre thread principal e thread do worker visto que esses objetos são copiados por inteiro e isso tem um custo.

## Referências

- [Worker Threads @ Node.js - Documentation](https://nodejs.org/api/worker_threads.html)
- [Does NodeJS have any plans for shared memory? @ Node.js Issues](https://github.com/nodejs/help/issues/560)
- [The Return of SharedArrayBuffers and Atomics](https://www.sitepen.com/blog/the-return-of-sharedarraybuffers-and-atomics/)
- [ecmascript_sharedmem](https://github.com/tc39/ecmascript_sharedmem)
- [SharedArrayBuffer @ MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)
- [Atomics @ MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics)
- [TypedArray @ MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)
- [Node.js multithreading: What are Worker Threads and why do they matter @ Reddit/Node](https://blog.logrocket.com/node-js-multithreading-what-are-worker-threads-and-why-do-they-matter-48ab102f8b10/)
- [Threads no Node js 💥Tudo o que você precisa saber!!](https://youtu.be/AGLq2stqAyY)
- [Node Docker Example @ Waldermart Github](https://github.com/waldemarnt/node-docker-example)
