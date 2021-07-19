/*
  Ruta:   /api/mensajes
*/
const { Router } = require('express');
const { check } = require('express-validator');

//---------------CREAMOS EL CONTROLADOR PARA LIMPIEZA DE CODIGO-----------------------//
const { getMensajes, borrarMensaje, crearMensaje } = require('../controllers/formularioController');

//---------------- VALIDACION DE CAMPOS- MIDDLEWARE ------------//
const { validarCampos } = require('../middlewares/validar-campos');


const router = Router();

//Las rutas, lo primero que haremos tras llamar al express
// Ruta : api/usuarios

router.get('/', getMensajes);

//Creacion users
router.post('/', [
    check('nombre', 'El nombre de la persona es obligatorio').not().isEmpty(),
    check('email', 'El email de la persona es obligatorio').not().isEmpty().isEmail(),
    check('mensaje', 'El mensaje no debe estar vacio').not().isEmpty(),
    validarCampos
], crearMensaje);




router.delete('/:id', borrarMensaje);



module.exports = router;