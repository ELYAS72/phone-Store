const Contact = require('../model/contactModel');

exports.newContact = async (req, res) => {
  const { name, email, subject, message } = req.body;

  const contact = new Contact({
    name,
    email,
    phone,
    subject,
    message
  });

  try {
    await contact.save();
    res.send('Votre message a été envoyé avec succès ✔️. Nous vous répondrons dans les meilleurs délais.');
  } catch (error) {
    res.status(500).send(error.message);
  }
};
