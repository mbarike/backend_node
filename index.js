const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const connectBD = require("./config/db");
const userRoute = require('./routes/user.route')

//appeller la fonction dotenv pour utiliser les variables d'environnement
dotenv.config();
const app = express();

// on m'appelle maintenant la fonction de connexion connectBD
connectBD();
//accepter les donnees sous format json
app.use(express.json());
app.use(cors({ origin: "*"}));
    
const PORT = process.env.PORT ;
app.listen( PORT , () => {
    console.log(`serveur demarrer sur http://localhost:${PORT}`)
})


// Route de test

app.get('/', (req , res) => {
    res.send('Bienvenue sur mon serveur express')
})

app.use("/api/auth",userRoute);
