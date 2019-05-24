const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

// Auth routes function invoked with app as an argument
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);