const mongoose = require('mongoose');

const connectDB = async() => {
   try {
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.DB_URI, () => 
    console.log("Connecté ✅")
    );
    
   } catch (err) {
        console.log("Pas connecté ❌" + err);
        process.exit();
   }
};

module.exports = connectDB;