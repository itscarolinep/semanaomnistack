const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://root:root@cluster0-ssqya.mongodb.net/omnistackweek?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);


// Métodos HTTP: GET, POST, PUT, DELETE
/** 
 * Tipos de parâmetros
 * Query Params: req.query (Mas utilizado em GET. Filtros, ordenação, paginação, ...)
 * Route Params: req.params (Principalmente PUT e DELETE. Identificar um recurso na alteração ou remoção)
 * Body: req.body (Mais utilizado para POST e PUT. Dados para criação ou alteração de um registro)
*/