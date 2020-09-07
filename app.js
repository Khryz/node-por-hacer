//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let tar = '';
        let estado = '';

        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('======Tareas-por-hacer====='.green);
            console.log(`Tarea: ${tarea.descripcion} Estado: ${tarea.completado}`);
            console.log('==========================='.red);
        }

        break;
    case 'actualizar':
        let actualizar = porHacer.actualizarDB(argv.descripcion, argv.completado);
        console.log(actualizar);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido');
        break;
}