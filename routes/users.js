var express = require('express');
var router = express.Router();
var User = require('../models/user.js');


//GET - GET All Users By Into DB
router.get('/allusers', function (req, res) {
    console.log('GET /allusers');
/*    var recibido = req.body;
    console.log(recibido);*/
    User.find(function (err, users) {
        if (err) res.send(500, err.message);
        console.log(users);
        res.status(200).jsonp(users);
        console.log('\n');
    });

});

//POST - Add User in DB
router.post('/adduser', function (req, res) {
    console.log('POST /user');
    console.log(req.body);
    var user = new User({
        nombre: req.body.nombre,
        email: req.body.email,
        rol: req.body.rol,
        password: req.body.password
    });
    console.log('\n');
    console.log("Devuelve el user registrado");
    user.save(function (err, user) {
        if (err) return res.status(500).send(err.message);
        console.log(user);
        res.status(200).jsonp(user);
    });
});

//POST - Comprovar user en DB
router.post('/login', function (req, res) {

    console.log('LOGIN /user');
    console.log("Comprueba si la contraseña es correcta");

    User.findOne({email: req.body.email}, function (err, user) {
        if (err) res.send(500, err.message);

        else if (user == null) {
            console.log("No existe el usuario");
            return res.status(404).jsonp({"loginSuccessful": false, "email": req.body.email});
        }
        else {
            console.log(user);
            var usuario = JSON.stringify(user);
            var trozos = usuario.split(",");
            var password = trozos[4].split(":");
            var pwd2 = password[1];
            var pwd1 = JSON.stringify(req.body.password);
            console.log("Password del login: " + pwd2);
            if (pwd1 == pwd2) {
                console.log("Login Correcto");
                return res.status(200).jsonp({"loginSuccessful": true, "user": user});
            }
            else {
                console.log("Contraseña erronea");
                return res.status(404).jsonp({"loginSuccessful": false, "email": req.body.email});
            }
        }
    });
});
module.exports = router;
