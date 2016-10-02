var express = require('express');           /*Server Express*/
var bodyParser = require('body-parser');
var mongoose = require('mongoose');         /*Conexión con MongoDB*/
var io = require('socket.io');              /*Comunicación entre Master y Slave*/

/*Inicio Express*/
var app = express();
var server = require('http').Server(app);

/*Middlewares express*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/*Views y HTML*/
app.use(express.static(__dirname + '/public'));

/*Conexión a la base de datos de MongoDB que tenemos en local*/
require('mongoose-middleware').initialize(mongoose);
mongoose.connect('mongodb://localhost/cp2', function(err, res) {
    if (err) throw err;
    console.log('Conectado con éxito a la Base de Datos');
});

// Start server
server.listen(3005, function() {
    console.log("Servidor en http://localhost:3005/");
});