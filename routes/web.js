const express = require('express');

const router = express.Router();

// Home page
router.get('/', (req, res) =>{
  res.render('pages/home');
});

// About page
router.get('/about', (req, res) =>{
   res.render('pages/about');
});

//contact page
router.get('/contact', (req, res) =>{
  res.render('pages/contact');
});

// contact form submission
router.post('/contact', (req, res) =>{
  const { name, email, message } = req.body;
  console.log(`Received contact form submission: Name: ${name}, Email: ${email}, Message: ${message}`);
  res.render('pages/contact', { success: true });
});

module.exports = router;