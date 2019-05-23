const express = require('express');
require('./services/passport');

const app = express();

// Auth routes function invoked with app as an argument
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);