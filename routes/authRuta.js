/*
  Ruta:   /api/auth
*/
const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { login } = require('../controllers/authController');

const { validarCampos } = require('../middlewares/validar-campos');

//la ruta sera /api/auth/login
router.post('/login', [
    check('correo', 'El correo es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validarCampos
], login)






module.exports = router;