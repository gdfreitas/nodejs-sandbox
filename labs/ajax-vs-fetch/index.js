/**
 * Este site fornece APIs para testarmos requisições: http://httpbin.org/
 */
const MOCK_APIS_URL = {
  USER_IP: 'https://httpbin.org/ip',
  CREATE_POST: 'https://httpbin.org/post'
}

/**
 * AJAX - Asynchronous JavaScript e XML, é um objeto exposto em webapis que permite enviar/receber
 * informações em diversos formatos (JSON, XML, HTML, etc) em um fluxo assíncrono, sem a necessidade
 * de atualizar a página do navegador.
 * Docs: https://developer.mozilla.org/pt-BR/docs/Web/Guide/AJAX
 */
let xhr = new XMLHttpRequest();
xhr.open('GET', MOCK_APIS_URL.USER_IP);
xhr.responseType = 'json';
xhr.onload = function () {
  console.log('XHR Response', xhr.response);
}
xhr.onerror = function () {
  console.error('Ocorreu um erro', error)
}
xhr.send();


/**
 * Fetch API fornece uma interface para buscar recursos na rede, sendo disponibilizado como webapi e sendo
 * uma evolução do AJAX, com recursos mais poderosos e mais flexível.
 * Docs: https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API
 */
fetch(MOCK_APIS_URL.USER_IP)
  .then(function (response) {
    // console.log(response);
    // json() método utilitario p/ parse do ReadableStream, retorna uma Promise
    return response.json();
  })
  .then(function (body) {
    console.log('Fetch body', body);
  })
  .catch(function (error) {
    console.error('Ocorreu um erro', error)
  })

/**
 * Especificando métodos, entre outros parâmetros
 */
let options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  mode: 'no-cors', // Default: "cors", inclui os headers "Access-Control-Allow-Credentials/Origin"
  body: JSON.stringify({
    message: 'Isto funciona?'
  })
};

fetch(MOCK_APIS_URL.CREATE_POST, options)
  .then(function (response) {
    // console.log(response);
    // json() método utilitario p/ parse do ReadableStream, retorna uma Promise
    return response.json();
  })
  .then(function (body) {
    console.log('body', body);
  })
  .catch(function (error) {
    console.error('Ocorreu um erro', error)
  })
