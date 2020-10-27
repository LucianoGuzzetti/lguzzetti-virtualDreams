const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));

app.listen(4200);

app.post('/postPersona', function(req,res){
    
    var nombre = null;
    var apellido = null;
    var dni = null;
    
    if(req.body.hasOwnProperty("name"))
    nombre = req.body.name;
    
    if(req.body.hasOwnProperty("lastName"))
    apellido = req.body.lastName;
    
    if(req.body.hasOwnProperty("dni"))
    dni = req.body.dni;
    
    if(apellido == null || dni == null){
        res.status(400).end();
        return;
    }
    
    if(apellido.length == 0 || dni.length == 0){
        res.status(400).end();
        return;
    }
    
    if(typeof(apellido) != "string" || (typeof(nombre) != "string" && nombre != null)){
        res.status(400).end();
        return;
    }
    
    // si apellido o nombre tienen algo que no es valido
    if(/^([0-9])*$/.test(apellido) || (typeof(nombre) != null && /^([0-9])*$/.test(nombre))){
        res.status(400).end();
        return;
    }
    
    // si dni tiene algo que no es valido
    if(!/^([0-9])*$/.test(dni)){
        res.status(400).end();
        return;
    }
    
    if(dni.length > 10){
        res.status(400).end();
        return;
    }
    
    if((nombre != null && req.body.length > 3) || 
    (nombre == null && req.body.length > 2)){
        res.status(400).end();
        return;
    }
    
    const http = require('request-promise');
    
    var datos = {
        uri: 'https://reclutamiento-14cf7.firebaseio.com/personas.json',
        body: {
            nombre: nombre,
            apellido: apellido,
            dni: dni,
        },
        json: true,
    };
    
    http(datos)
    .then(function(response) {
        console.log(response);
    })
    .catch(function (err) {
        console.error('Error al subir los datos',err);
    });
    
    res.status(201).send(JSON.stringify(req.body));
    console.log(req);
});