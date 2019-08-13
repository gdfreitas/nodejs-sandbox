const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');
const uuidv4 = require('uuid/v4');
const graphqlHttp = require('express-graphql')

const graphqlSchema = require('./graphql/schema')
const graphqlResolver = require('./graphql/resolvers')

const auth = require('./middlewares/auth');
const errorHandler = require('./middlewares/error-handler')
const fileHandler = require('./middlewares/file-handler')
const cors = require('./middlewares/cors')

const { clearImage } = require('./util/file');

const app = express();

app.use('/images', express.static(path.join(__dirname, '..', 'images')))

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json
app.use(cors);
app.use(auth);

app.use(fileHandler);

app.put('/post-image', (req, res, next) => {
  if (!req.isAuth) {
    throw new Error('Not authenticated!');
  }

  if (!req.file) {
    return res
      .status(200)
      .json({ message: 'No file provided!' });
  }

  if (req.body.oldPath) {
    clearImage(req.body.oldPath);
  }

  return res
    .status(201)
    .json({ message: 'File stored.', filePath: req.file.filename });
});

app.use('/graphql', graphqlHttp({
  schema: graphqlSchema,
  rootValue: graphqlResolver,
  graphiql: true,
  formatError: (err) => {
    if (!err.originalError) {
      return err;
    }
    const data = err.originalError.data;
    const message = err.message || 'An error occurred';
    const status = err.originalError.code || 500;
    return { message, status, data }
  }
}))

app.use(errorHandler);

module.exports = app;

