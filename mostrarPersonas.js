const http = require('request-promise');

var consulta = {
    uri: 'https://reclutamiento-14cf7.firebaseio.com/personas.json',
    json: true
};

http(consulta)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (err) {
        console.error('Fallo la conexion con la bdd',err);
    });