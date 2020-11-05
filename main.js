import express from 'express';
const app = express();
import { urlencoded } from 'body-parser';

import { validarPersona } from './validarPersona.js';
import { insertarPersonaBD } from './insertarPersonaBD.js';

app.use(urlencoded({ extended: true }));

app.listen(4200);

app.post('/postPersona', function (req, res) {

    if (!validarPersona(req)) {
        res.status(400).end();
        return;
    }


    insertarPersonaBD({
        name: req.body.name,
        lastName: req.body.lastName,
        dni: req.body.dni
    })
        .then(function (response) {
            res.status(201).send(JSON.stringify(req.body));
        })
        .catch(function (err) {
            res.status(500).end();
            console.error('Error al subir los datos', err);
        });
});