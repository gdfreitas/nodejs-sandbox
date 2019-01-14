# Adonis.js Framework

Esta estrutura foi gerada automaticamente pelo utilitário de linha de comando do adonis.

O Adonis abstrai implementações como:

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Inicializar estrutura de uma api:

```adonis new adonis-js --api-only```

## Migrations

```adonis migration:run```

## Model

```adonis make:model Tweet -m -c```

- `-c` cria automaticamente um controller para o model
- `-m` cria automaticamente um migration para o model

## Controllers

```adonis make:controller Auth```

## Routes

Exibir as rotas existentes de forma interativa:

```adonis route:list```

## Rodar servidor de desenvolvimento

```adonis serve --dev```

