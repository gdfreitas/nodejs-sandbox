const https = require('https')

const URL = 'https://www.google.com.br';

const start = Date.now()

function doRequest() {
  https
    .request(URL, res => {
      res.on('data', (data) => { })
      res.on('end', () => {
        console.log(Date.now() - start);
      })
    })
    .on('error', console.error)
    .end();
}

doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();