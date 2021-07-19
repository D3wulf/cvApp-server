const { response } = require('express');

const Mensaje = require('../models/mensaje');

const getMensajes = async(req, res = response) => {

    try {

        const mensajes = await Mensaje.find();
        console.log(mensajes);
        res.json({
            ok: true,
            mensajes

        })

    } catch (error) {
        console.log(error);
    }


}

const crearMensaje = async(req, res = response) => {

    const mensaje = new Mensaje(req.body);



    try {

        const mensajeDB = await mensaje.save();


        res.json({
            ok: true,
            msg: 'Todo correcto al enviar el mensaje'

        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error al enviar el mensaje'
        })

    }

}

const borrarMensaje = async(req, res = response) => {

    const uid = req.params.id;

    try {

        const mensajeDB = await Mensaje.findById(uid);

        if (!mensajeDB) {

            return res.status(404).json({
                ok: false,
                msg: ' No existe mensaje con ese ID'
            })
        }

        //mete en una constante lo que mandamos como id, los campos del body y que nos devuelva lo nuevo
        await Mensaje.findByIdAndDelete(uid);

        res.json({
            ok: true,
            msg: 'mensaje borrado!',
            uid
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({

            msg: 'Error en borrar mensaje'
        });

    }

}



module.exports = { getMensajes, crearMensaje, borrarMensaje };