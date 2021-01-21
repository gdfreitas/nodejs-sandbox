# Node Config

## Default

Carrega automaticamente os arquivos do [./config/default.json](./config/default.json)

```
node index.js
```

## Production

Carrega automaticamente os arquivos do [./config/production.json](./config/production.json)

```
NODE_ENV=production node index.js
```

## Environment Variables

Possibilita mapear variáveis de ambiente para as propriedades de configurações do perfil `.json` usado conforme [./config/custom-environment-variables.json](./config/custom-environment-variables.json)

```
DATABASE_URL=aws:rds NODE_ENV=production node index.js
```
