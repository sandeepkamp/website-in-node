const http = require('http');

const express = require('express');

const mongoose = require('mongoose');

const path = require('path');

const app = express();

// Mongo DB connection
mongoose.connect('mongodb://localhost:27017/website')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB', err));

// Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

// view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
const webRoutes = require('./routes/web');
app.use('/', webRoutes);

const PORT = 3000;

const server = app.listen(PORT, () =>{
  console.log(`Server is running on port ${PORT}` );
});

