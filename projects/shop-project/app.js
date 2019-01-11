const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const csrf = require('csurf');
const flash = require('connect-flash');
const multer = require('multer')

const User = require('./models/User')
const ErrorController = require('./controllers/error');
const ShopController = require('./controllers/shop');
const isAuthenticated = require('./middlewares/is-authenticated');

const { MONGODB_URI } = require('./.env')

const app = express();
const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'sessions'
});
const csrfProtection = csrf();

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        cb(null, `${new Date().toISOString().replace(/\:./g, '.')}-${file.originalname}`)
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        return cb(null, true);
    }

    cb(null, false);
}

app.set('view engine', 'ejs');
app.set('views', 'views');

const AdminRoutes = require('./routes/admin');
const ShopRoutes = require('./routes/shop');
const AuthRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ storage: fileStorage, fileFilter }).single('image'))
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(
    session({
        secret: 'mySecretForSessions',
        resave: false,
        saveUninitialized: false,
        store: store
    })
);

app.use(flash());

app.use((req, res, next) => {
    res.locals.isAuthenticated = req.session.isLoggedIn;
    next();
});

app.use((req, res, next) => {
    if (!req.session.user) {
        return next();
    }

    User.findById(req.session.user._id)
        .then(user => {
            if (!user) {
                return next();
            }
            req.user = user;
            next();
        })
        .catch(err => {
            next(new Error(err))
        });
});

app.post('/create-order', isAuthenticated, ShopController.postOrder);

app.use(csrfProtection);
app.use((req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
});

app.use('/admin', AdminRoutes);
app.use(ShopRoutes);
app.use(AuthRoutes)

app.get('/500', ErrorController.get500)

app.use(ErrorController.get404);

// Error Handling Middleware
app.use((error, req, res, next) => {
    // res.status(error.httpStatusCode).render(...);
    // res.redirect('/500');

    console.error(error)

    res.status(500).render('500', {
        pageTitle: 'Error!',
        path: '/500',
        isAuthenticated: req.session.isLoggedIn
    });
})

mongoose
    .connect(`${MONGODB_URI}`, { useNewUrlParser: true })
    .then(result => {
        app.listen(process.env.PORT || 80)
    })
    .catch(console.error);

