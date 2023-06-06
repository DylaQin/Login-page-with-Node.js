const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
// require the passport under services folder
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app); // calls the arrow function

const PORT = process.env.PORT || 3000;
app.listen(PORT);