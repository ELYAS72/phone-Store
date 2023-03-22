const ContactModel = require('../model/contactModel');

module.exports.setNewContact = async (req, res) => {

  if (!req.body.name || !req.body.email || !req.body.phone || !req.body.subject || !req.body.message) {
    res.render('error')
  }else{
    res.render('succes')

  };

  
  const contact = await ContactModel.create({


      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      subject: req.body.subject,
      message: req.body.message

   
      

  });

  
contact.save(function (err, contact) {
  if (err) {
    console.log("Impossible d'insérer la data" + err);
  } else {
    console.log(contact);
  }
});


  //contact.insertOne(ContactModel.create(), { wtimeout: 30000 });



  
};
