const express = require('express');
const Contact = require('../models/contact');
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

// Contact form submission
router.post('/contact', async (req, res) => {

  try {

    const { name, email, message } = req.body;

    // Save into MongoDB
    await Contact.create({
      name,
      email,
      message
    });

    console.log('Contact form saved successfully');

    res.render('pages/contact', {
      success: true
    });

  } catch (error) {

    console.log(error);

    res.render('pages/contact', {
      success: false
    });
  }

});

module.exports = router;