// const http = require('http');
require('dotenv').config();

const express = require('express');

const mongoose = require('mongoose');

const path = require('path');

const app = express();

// Mongo DB connection
mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 5000,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
  console.error('MongoDB Connection Error:', err.message);
});

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
const webRoutes = require('./routes/web');
app.use('/', webRoutes);

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () =>{
  console.log(`Server is running on port ${PORT}` );
});

