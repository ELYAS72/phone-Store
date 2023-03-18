const express = require('express');
const app = express();
const path = require ('path'); // Importer le module 'path' de Node.js
const bodyParser = require('body-parser');
const { engine } = require ('express-handlebars');
const connectDB = require('./dbConfig');
const dotenv = require('dotenv').config();





//connexion à la BDD
connectDB();





app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuration de Handlebars
app.engine('hbs', engine({defaultLayout: 'main', extname: 'hbs'}));
app.set('view engine', 'hbs'); // Indiquer à l'application d'utiliser le moteur de template 'hbs'
app.set('views', './views');


// Définition du dossier contenant les fichiers statiques
app.use('/assets', express.static(path.join(__dirname, '/assets')));



app.get('/', (req, res) => {
  res.render('home', {'home': true});
});

app.get('/about', (req, res) => {
  res.render('about', {'about': true});
});

app.get('/contact', (req, res) => {
  res.render('contact', {'contact': true});
});






app.listen(9000, () => {
  console.log('Example app listening on http://localhost:9000');
});
