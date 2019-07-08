const https = require('https')

const start = Date.now()

function doRequest() {
  https
    .request('https://www.google.com.br', res => {
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