const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },

  phone: {
    type: String,
    required: true
  },

  subject: {
    type: String,
    required: true
  },

  message: {
    type: String,
    required: true
  }
});

const Contact = mongoose.model('Contact', contactSchema);

Contact.newContact = async function (contactData) {
    const contact = new Contact(contactData);
    try {
      await contact.save();
      return contact;
    } catch (error) {
      throw new Error(error);
    }
  };

module.exports = Contact;
