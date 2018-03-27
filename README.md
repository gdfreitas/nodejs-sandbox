# Práticas Node.js
Práticas de abrangência geral com NodeJS

## Módulos
- **[Async](https://caolan.github.io/async/docs.html)** módulo com vários métodos para o uso em trabalhos assíncronos com javascript.
- **[EJS](http://ejs.co/)** `<% Embedded Javascript %>`: linguagem de templating para gerar HTMLs com javascript.
- `crypto` fornece funcionalidade criptográfica que inclui um conjunto de invólucros para as funções hash, HMAC, cipher, decipher, sign, e verify do OpenSSL.
- `express` servidor web não organizado e minimalista para NodeJS
- `express-validator` middleware para validações de parâmetros em requests
- `express-session` middleware para criação e controle de sessions utilizando cookies
- `nodemon` utilitário para monitorar alterações em arquivos e reiniciar servidores de desenvolvimento
- `consign` utilitário usado para carregar automaticamente todos os templates de um determinado diretório
- `body-parser` middleware para fazer o parse do body das requests
- `mongodb` base de dados NoSQL, alta performance, sem esquemas e orientado à documentos

# Content Negociation

## Request Headers
`Accept` qual o formato de conteúdo que deseja receber</br>
`Content-type` qual o formato do conteúdo que está sendo enviado na request

## Status Code

_CLASSE 2_ `[200 <> 206]` correspondem ao sucesso da requisição<br/>
_CLASSE 3_ `[300 <> 307]` outra ação precisa ser tomada pelo cliente<br/>
_CLASSE 4_ `[400 <> 417]` algum erro foi cometido pelo cliente<br/>
_CLASSE 5_ `[500 <> 505]` servidor está consciente de que errou, ou incapaz de executar o pedido

## Acrônimos

API _Application Programming Interface_ (Interface de Programação de Aplicativos)

URI _Uniform Resource Identifier_ (Identificador Uniforme de Recursos)

URL _Uniform Resource Locator_ (Identificador Uniforme de Recursos)
- Ex: `http://www.domain.com:80/api/technologies/nodejs.png`

URN _Uniform Resource Name_ (Nome Uniforme de Recurso)
- Ex: `urn:technology:nodejs` > URN Resolver > Rescurso

[MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) _Multipurpose Internet Mail Extensions_
