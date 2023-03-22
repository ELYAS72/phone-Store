const express = require('express');
const app = express();
const path = require ('path'); // Importer le module 'path' de Node.js
const bodyParser = require('body-parser');
const cors = require('cors')
const { engine } = require ('express-handlebars');
const connectDB = require('./dbConfig');
const { setNewContact } = require('./controller/contactController');
const dotenv = require('dotenv').config();





//connexion à la BDD
connectDB();




app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
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

app.get('/succes', (req, res) => {
  res.render('succes', {'succes': true});
});

app.get('/error', (req, res) => {
  res.render('error', {'error': true});
});


app.post('/contact', setNewContact);






app.listen(9000, () => {
  console.log('Server ✅ http://localhost:9000');
});
