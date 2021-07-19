const { Schema, model } = require('mongoose')

const MensajeSchema = Schema({

        nombre: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        mensaje: {

            type: String,
            required: true,


        }

    },

);





module.exports = model('Mensaje', MensajeSchema);