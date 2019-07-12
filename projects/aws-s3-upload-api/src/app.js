require('dotenv').config()

const uuid = require('uuid/v1')

const AWS = require('aws-sdk')

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_BUCKET_ACCESS_KEY,
  secretAccessKey: process.env.AWS_BUCKET_SECRET_KEY,
})

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json());

// simula usuário para prefixar seus arquivos no Bucket
const CONTEXT_USER = {
  id: 'gdfreitas'
};

app.get('/api/v1/upload', (req, res) => {

  const contentType = 'jpeg';

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    ContentType: 'image/jpeg',
    Key: `${CONTEXT_USER.id}/${uuid()}.${contentType}`,
  };

  s3.getSignedUrl('putObject', params, function (err, url) {
    return res.json({
      key: params.Key,
      url
    })
  });

})

module.exports = app