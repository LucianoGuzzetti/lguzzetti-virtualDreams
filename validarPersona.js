export function validarPersona(req) {
    var nombre = null;
    var apellido = null;
    var dni = null;

    if (req.body.hasOwnProperty("name"))
        nombre = req.body.name;

    if (req.body.hasOwnProperty("lastName"))
        apellido = req.body.lastName;

    if (req.body.hasOwnProperty("dni"))
        dni = req.body.dni;

    if (apellido == null || dni == null) {
        return false;
    }

    if (apellido.length == 0 || dni.length == 0) {
        return false;
    }

    if (typeof (apellido) != "string" || (typeof (nombre) != "string" && nombre != null)) {
        return false;
    }

    // si apellido o nombre tienen algo que no es valido
    if (/^([0-9])*$/.test(apellido) || (typeof (nombre) != null && /^([0-9])*$/.test(nombre))) {
        return false;
    }

    // si dni tiene algo que no es valido
    if (!/^([0-9])*$/.test(dni)) {
        return false;
    }

    if (dni.length > 10) {
        return false;
    }

    if ((nombre != null && req.body.length > 3) ||
        (nombre == null && req.body.length > 2)) {
        return false;
    }

    return true;
}
