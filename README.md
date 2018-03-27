# Práticas Node.js
Práticas de abrangência geral com NodeJS

## Módulos
### [EJS](http://ejs.co/) `<% Embedded Javascript %>`: templating language para gerar HTMLs com javascript.
### [Async](https://caolan.github.io/async/docs.html): módulo com vários métodos para o uso em trabalhos assíncronos com javascript.
### **crypto**: fornece funcionalidade criptográfica que inclui um conjunto de invólucros para as funções hash, HMAC, cipher, decipher, sign, e verify do OpenSSL.
### **express**: servidor web não organizado e minimalista para NodeJS
### **express-validator**: middleware para validações de parâmetros em requests
### **express-session**: middleware para criação e controle de sessions utilizando cookies
### **nodemon**: utilitário para monitorar alterações em arquivos e reiniciar servidores de desenvolvimento
### **consign**: utilitário usado para carregar automaticamente todos os templates de um determinado diretório
### **body-parser**: middleware para fazer o parse do body das requests
### **mongodb**: base de dados NoSQL, alta performance, sem esquemas e orientado à documentos

# Content Negociation

## Request Headers
###  `Accept`: qual o formato de conteúdo que deseja receber

### `Content-type`: qual o formato do conteúdo que está sendo enviado na request

## Status Code

#### CLASSE 2: `200 até 206`: correspondem ao sucesso da requisição
#### CLASSE 3 `300 até 307`: outra ação precisa ser tomada pelo cliente
#### CLASSE 4 `400 até 417`: algum erro foi cometido pelo cliente
#### CLASSE 5 `500 até 505`: servidor está consciente de que errou, ou incapaz de executar o pedido

## Acrônimos

### API _Application Programming Interface_ (Interface de Programação de Aplicativos)

### URI _Uniform Resource Identifier_ (Identificador Uniforme de Recursos)

### URL _Uniform Resource Locator_ (Identificador Uniforme de Recursos)
- Ex: `http://www.domain.com:80/api/technologies/nodejs.png`

### URN _Uniform Resource Name_ (Nome Uniforme de Recurso)
- Ex: `urn:technology:nodejs` > URN Resolver > Rescurso

### [MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) _Multipurpose Internet Mail Extensions_
