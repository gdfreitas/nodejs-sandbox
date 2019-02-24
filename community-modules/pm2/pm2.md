# PM2

Node.js Production Process Manager with a built-in Load Balancer

`pm2 start ./src/index.js -i 0`

`-i 0` permite que o pm2 decida a quantidade de workers (processos) que irá criar. O pm2 irá subir com base no número de cores lógicos (não físicos) da maquina.

fisical core vs logical core

a diferença fica entre multithreading and hyperthreading

## Referencias

[pm2 @ GitHub](https://github.com/Unitech/pm2)
[pm2 @ Official Docs](https://pm2.io/doc/en/runtime/overview/)