const argv = require('yargs')
    .command('crear', 'Crear elementor por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualiza el estado completado a una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer',
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como completado o pendiente la tarea'
        }
    })
    .command('borrar', 'Borra un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'b',
            desc: 'Elimina segun la descripcion'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}