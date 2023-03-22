const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({

  name: {
    type: String,
    trim: true
  },

  email: {
    type: String,
    trim: true
  },

  phone: {
    type: String,
    trim: true
  },

  subject: {
    type: String, 
    trim: true
  },

  message: {
    type: String,
    trim: true
  }
});




module.exports = mongoose.model('Contact', contactSchema);

