const mongoose = require('mongoose');



const dbConnection = async() => {

    try {

        await mongoose.connect('mongodb+srv://Miguel:Destino2021@junio2021.phawd.mongodb.net/miBaseDatos', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log('Base de datos online');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }


}



module.exports = {
    dbConnection
}