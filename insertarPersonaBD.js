import http from 'request-promise';

export function insertarPersonaBD(persona){
    var datos = {
        method: 'POST',
        uri: 'https://reclutamiento-14cf7.firebaseio.com/personas.json',
        body: {
            nombre: persona.name,
            apellido: persona.lastName,
            dni: persona.dni
        },
        json: true,
    };
    
    return http(datos);
}