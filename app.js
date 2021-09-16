//emporter

// import des modules npm - Ajout des plugins externes
const express = require('express');// Importation d'express => Framework basé sur node.j

// On importe mongoose pour pouvoir utiliser la base de données
const mongoose = require('mongoose');

// Plugin qui sert à éliminer  les err cors 
const cors = require('cors');

// Plugin qui sert dans l'upload des images et permet de travailler avec les répertoires et chemin de fichier
const path = require('path');

// On importe la route dédiée aux sauces
const sauceRoutes = require('./routes/sauce');
// On importe la route dédiée aux users
const userRoutes = require('./routes/user');

// Connection à la base de données MongoDB 
mongoose.connect('mongodb+srv://NICOLA18:Ilmioaccount!!97@cluster0.zm2so.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use(cors());

// Création d'une application express
app.use(express.json());

app.use((req, res, next) => {
  //Ces headers permettent :
  //d'accéder à notre API depuis n'importe quelle origine ( '*' ) ;
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  //d'ajouter les headers mentionnés aux requêtes envoyées vers notre API (Origin , X-Requested-With , etc.) ;
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization, Range' );
  //d'envoyer des requêtes avec les méthodes mentionnées ( GET ,POST , etc.).
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  //res.setHeader('Access-Control-Allow-Credentials', true);

  next();
}); 



app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);

//Export de l'application express pour déclaration dans server.js
module.exports = app;