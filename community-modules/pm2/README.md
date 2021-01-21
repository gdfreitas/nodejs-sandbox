# PM2

```sh
pm2 start ./src/index.js -i 0
```

`-i 0` permite que o pm2 decida a quantidade de workers (processos) que irá criar com base no número de núcleos lógicos (não físicos) da maquina.

## Referencias

[pm2 @ GitHub](https://github.com/Unitech/pm2)
[pm2 @ Official Docs](https://pm2.io/doc/en/runtime/overview/)
