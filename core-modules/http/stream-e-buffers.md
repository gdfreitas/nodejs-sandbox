# Stream e Buffers

## Fluxo de uma requisição

**Stream opened** _> Request Body Chunk 1 > Request Body Chunk 2 > Request Body Chunk N* >_ **Fully Parsed Body**

**Buffers** é uma estrutura auxiliar manipulações de chunks antes que sejam liberados.