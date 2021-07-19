const express = require('express');


const cors = require('cors');

const { dbConnection } = require('./database/config');

//para arreglar angular en node, el tema de las recargas de pagina
const path = require('path');

//para que use el archivo .env
//require('dotenv').config();
const dotenv = require('dotenv')
dotenv.config({ path: __dirname + '/.env' });

//Base de datos creado archivo de configuracion database/config






//PARA LAS VARIABLES DE ENTORNO por eso instalamos el dotenv
process.env



// creacion del servidor // aplicacion express

const app = express();


//cors es otro middleware, se ejecutara secuencial, he bajado la dbconnection()

app.use(cors());

//lectura y parseo del body, otro middleware, va debajo de cors y antes de las rutas, cuidado
//-----es la parte de body/raw/json de postman -----------//

app.use(express.json());



//Directorio público
//Manejar el resto de rutas ( por meter angular )

app.use(express.static('public'));

//Rutas (middleware) que vendran desde el archivo rutaUsuarios/rutaAuth
//el use es el middleware, usa el require para importar las rutas
app.use('/api/mensajes', require('./routes/formularioRuta'));

// app.use('/api/usuarios', require('./routes/rutaUsuarios'));

// app.use('/api/empresas', require('./routes/rutaEmpresas'));
// app.use('/api/trabajadores', require('./routes/rutaTrabajador'));
// app.use('/api/todo', require('./routes/rutaBusquedas'));
// app.use('/api/upload', require('./routes/rutaUploads'));

//Errores de recarga
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'))
});

//listen, puerto , callback
app.listen(process.env.PORT, () => {

    console.log(` Servidor ok, funcionando en el puerto ${process.env.PORT} `)
});