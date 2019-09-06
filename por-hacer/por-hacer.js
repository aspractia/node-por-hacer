const fs = require('fs');


let listadoPorHacer = [];
const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer); //Convierte el objeto en un JSON válido

    // Escribo en archivo el json
    fs.writeFile('db/data.json', data, 'utf8', (err) => {
        if (err)
            throw new Error("No se pudo grabar", err);
    });

};


const cargarDB = () => {

    //listadoPorHacer = require('..db/data.json');
    try {
        //Guardo en el array lo que hay actualmente en el archivo
        //Guarda en diferentes elementos 
        listadoPorHacer = JSON.parse(fs.readFileSync('db/data.json', 'utf8'));

    } catch (error) {

        listadoPorHacer = [];
    }
};

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion, //es lo mismo que poner descripcion: descripcion
        completado: false,
    };

    listadoPorHacer.push(porHacer); //Inserto el elemento en el array

    guardarDB();

    return porHacer;
}


const getListado = () => {

    cargarDB();
    return listadoPorHacer;
};

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    //Busca dentro del array listadoPorHacer 
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion; //Condición a buscar
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
};


const borrar = (descripcion) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer.splice(index, 1); //Elimino un elemento especifico del array
        guardarDB();
        return true;

    } else {
        return false;
    }
};


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}