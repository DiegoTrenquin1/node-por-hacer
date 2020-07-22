const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');
const { borrar } = require('./por-hacer/por-hacer');
let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':

        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log(colors.green('=========Por Hacer=========='));
            console.log(tarea.descripcion);
            console.log('Estado', tarea.completado);
            console.log(colors.green('=========Por Hacer=========='));
        }
        break;

    case 'actualizar':

        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);

        break;
    case 'borrar':

        let numero = borrar(argv.descripcion);
        console.log(numero);
        break;

    default:
        console.log('Comando no es reconocido');

}