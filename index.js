const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

// Let express know to care about cookies
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        keys: [keys.cookieKey] // encrypts the cookie
    })
);
app.use(passport.initialize());
app.use(passport.session());

// Auth routes function invoked with app as an argument
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);