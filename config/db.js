const mongoose = require('mongoose');


//creation de la fonction qui gere la connexion avec la bd 

const connectBD = async () => {
    try {
        //attendre la base de donnee
        await mongoose.connect(process.env.URL_MONGO);
        console.log('MongoDB connecté');


    }catch (error) {
        //recuperer les erreurs
        console.log('Erreur mongoDB');
        console.log('Erreur mongoDB' , error);

        process.exit(1);
    }
}
//proccess.exit(0) ->le programme s'est terminer normalement (succes).
//proccess.exit(1) -> le programme s'est terminer a cause d'une erreur .


module.exports = connectBD