const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Actualizar el estado'
        },
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marca como completado la tarea'
        }
    })
    .command('borrar', 'Borra una tarea específica', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Borra un elemento'
        }
    })
    .help()
    .argv;


module.exports = {
    argv
}