const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')
const expressHandleBars = require('express-handlebars')

const SERVER_PORT = process.env.SERVER_PORT || 80;

const app = express();

// diferente do pug que, é preciso alterar a engine default
const HANDLEBARS_ENGINE_NAME = 'hbs';
app.engine(HANDLEBARS_ENGINE_NAME, expressHandleBars({
    layoutsDir: 'views/layouts/',
    defaultLayout: 'main-layout',
    extname: 'hbs'
}));

// app.set('view engine', 'pug')
app.set('view engine', HANDLEBARS_ENGINE_NAME)
app.set('views', 'views')

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const anthenticationMiddleware = require('./middlewares/authentication');
const pageNotFoundMiddleware = require('./middlewares/page-not-found');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

app.use(anthenticationMiddleware);

app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);

app.use(pageNotFoundMiddleware)

app.listen(SERVER_PORT, () => console.log(`Server is running on port ${SERVER_PORT}`))
