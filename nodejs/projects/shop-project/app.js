const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const csrf = require('csurf');
const flash = require('connect-flash');

const User = require('./models/User')
const ErrorController = require('./controllers/ErrorController');

const { MONGODB_URI } = require('./.env')

const app = express();
const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'sessions'
});
const csrfProtection = csrf();

app.set('view engine', 'ejs');
app.set('views', 'views');

const AdminRoutes = require('./routes/AdminRoutes');
const ShopRoutes = require('./routes/ShopRoutes');
const AuthRoutes = require('./routes/AuthRoutes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    session({
        secret: 'mySecretForSessions',
        resave: false,
        saveUninitialized: false,
        store: store
    })
);
app.use(csrfProtection);
app.use(flash());

app.use((req, res, next) => {
    if (!req.session.user) {
        return next();
    }
    User.findById(req.session.user._id)
        .then(user => {
            req.user = user;
            next();
        })
        .catch(err => console.log(err));
});

app.use((req, res, next) => {
    res.locals.isAuthenticated = req.session.isLoggedIn;
    res.locals.csrfToken = req.csrfToken();
    next();
});

app.use('/admin', AdminRoutes);
app.use(ShopRoutes);
app.use(AuthRoutes)

app.use(ErrorController.get404);

mongoose
    .connect(`${MONGODB_URI}`, { useNewUrlParser: true })
    .then(result => {
        app.listen(process.env.PORT || 3000)
    })
    .catch(console.error);

