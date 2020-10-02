const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();
const { dbConnection } = require('./database/config');

// Crear el servidor de express
const app = express();

// BD
dbConnection();

app.set('port', process.env.PORT || 4001);
app.use(express.json());
app.use(cors());

// Directorio publico
app.use(express.static(path.join(__dirname, 'public')));


// Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));
// TODO: CRUD de eventos

// Escuchar peticiones
app.listen(app.get('port'), ()=> {
    console.log(`Servidor en puerto ${ app.get('port') }`);
});