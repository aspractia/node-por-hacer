const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

switch (argv._[0]) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        break;

    case 'listar':

        let listadoPorHacer = porHacer.getListado();

        console.log("Listado de cosas por hacer".green);
        for (let tarea of listadoPorHacer) { //foreach
            console.log("- " + tarea.descripcion + " (Completado: " + tarea.completado + ")");
        }

        break;

    case 'actualizar':

        let actualizar = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizar);

        break;

    case 'borrar':

        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        break;
}