/**
 * Este site fornece APIs para testarmos requisições: http://httpbin.org/
 */
const MOCK_APIS_URL = {
  USER_IP: 'https://httpbin.org/ip',
  CREATE_POST: 'https://httpbin.org/post'
}

/**
 * fetch é uma webapi disponível nos browsers
 * por padrão irá fazer um http get na URL informada
 */
fetch(MOCK_APIS_URL.USER_IP)
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

/**
 * Especificando métodos, entre outros parâmetros
 */
let options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  mode: 'cors', // Default: "cors", inclui os headers "Access-Control-Allow-Credentials/Origin"
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
