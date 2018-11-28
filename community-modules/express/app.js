const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')

const SERVER_PORT = process.env.SERVER_PORT || 80;

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const anthenticationMiddleware = require('./middlewares/authentication');
const pageNotFoundMiddleware = require('./middlewares/page-not-found');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

app.use(anthenticationMiddleware);

app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);

app.use(pageNotFoundMiddleware)

app.listen(SERVER_PORT, () => console.log(`Server is running on port ${SERVER_PORT}`))
