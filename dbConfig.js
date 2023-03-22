const mongoose = require('mongoose');

const connectDB = async() => {

    mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {console.log('Connecté ✅')})
    .catch(err => {
      console.log('Connexion échoué' + err);
    })
    
}
module.exports = connectDB;