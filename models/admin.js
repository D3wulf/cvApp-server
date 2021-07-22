const { Schema, model } = require('mongoose');

const AdminSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
    },
    // img: {
    //     type: String,
    // },
    // rol: {
    //     type: String,
    //     required: true,
    //     emun: ['ADMIN_ROLE', 'USER_ROLE']
    // },
    // estado: {
    //     type: Boolean,
    //     default: true
    // },
    // google: {
    //     type: Boolean,
    //     default: false
    // },
});
//transformar el _id en uid
AdminSchema.methods.toJSON = function() {
    //no retornamos todo lo anterior al admin
    const { __v, password, _id, ...admin } = this.toObject();
    admin.uid = _id;
    return admin;
}

module.exports = model('Admin', AdminSchema);