const Contact = require('../model/contactModel');

module.exports.setNewContact = async (req, res) => {
  try {
    if (!req.body.fullName || !req.body.email || !req.body.phone || !req.body.subject || !req.body.message) {

      res.render('error');
    } else {
      res.render('succes');
    }

    const contact = await Contact.create({

      fullName: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      subject: req.body.subject,
      message: req.body.message
    });

    console.log(contact);

  } catch (error) {
    console.log("Impossible d'insérer la data", error);
  }
};
