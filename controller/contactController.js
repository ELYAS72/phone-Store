const ContactModel = require('../model/contactModel');

module.exports.setNewContact = async (req, res) => {

  //if (!req.body.name || !req.body.email || !req.body.phone || !req.body.subject || !req.body.message) {
  //  return res.status(400).json({message: "Veuillez remplir tous les champs obligatoires."});
 // };

  
  const contact = await ContactModel.create({


      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      subject: req.body.subject,
      message: req.body.message

   


  })
  console.log(contact);

  res.status(200).json(contact);
  
};
