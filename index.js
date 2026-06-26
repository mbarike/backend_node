const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const connectBD = require("./config/db");
const userRoute = require('./routes/user.route')
const questionRoute = require('./routes/question.route');
const answerRoute = require("./routes/answer.route");

//appeller la fonction dotenv pour utiliser les variables d'environnement
dotenv.config();
const app = express();

// on m'appelle maintenant la fonction de connexion connectBD
connectBD();
//accepter les donnees sous format json
app.use(express.json());
app.use(cors({
     origin: [
        "http://localhost:5173", //url _react
       // "https://front-node-self.vercel.app" // url_vercel
        "https://front-end-li9y.vercel.app/"
     ]
    }));
    
const PORT = process.env.PORT ;
app.listen( PORT , () => {
    console.log(`serveur demarrer sur http://localhost:${PORT}`)
})


//  -----------------------les Routes-----------------------
//inscription et connexion
app.use("/api/auth",userRoute);
// routes pour les questions
app.use("/api/question",questionRoute);
// routes pour les reponses
app.use("/api/answer", answerRoute);
app.get('/', (req , res) => {
    res.send('Bienvenue sur mon serveur express')
})