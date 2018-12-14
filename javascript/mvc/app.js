const env = require('./.env')

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const User = require('./models/User')

const ErrorController = require('./controllers/ErrorController');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const AdminRoutes = require('./routes/AdminRoutes');
const ShopRoutes = require('./routes/ShopRoutes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    User.findById('5c12ef0f31d8782f000405db')
        .then(user => {
            req.user = user;
            next()
        })
        .catch(console.error)
});

app.use('/admin', AdminRoutes);
app.use(ShopRoutes);
app.use(ErrorController.get404);


mongoose.connect(`${env.MONGODB_URI}`, { useNewUrlParser: true })
    .then(result => {
        User.findOne().then(user => {
            if (!user) {
                const user = new User({
                    name: 'Gabriel',
                    email: 'gdfreitasdev@gmail.com',
                    cart: {
                        items: []
                    }
                })
                user.save()
            }
        })

        app.listen(process.env.PORT || 3000)
    })
    .catch(console.error);

