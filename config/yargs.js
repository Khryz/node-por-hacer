const descripcion = {
    demand: true,
    alias: 'd',
}

const completado = {
    alias: 'c',
    default: true
}

const argv = require('yargs')
    .command('crear', 'Crea una tarea a realizar', { descripcion })
    .command('actualizar', 'Actualiza una tarea a realizar', { descripcion, completado })
    .command('borrar', 'Borra un elemento de la lista', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}