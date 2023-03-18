const express = require('express');
const router = express.Router();
const contactController = require('./controller/contactController');




router.route('/contact')
    .post(contactController.post)