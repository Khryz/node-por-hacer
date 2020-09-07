let fs = require('fs');

let listadoPorHacer = [];


const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err)
            console.log(err);
        else
            console.log('Archivo Enviado');
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (err) {
        listadoPorHacer = [];
    }

}

const getListado = () => {
    listadoPorHacer = require('../db/data.json');
    return listadoPorHacer;
    //listadoPorHacer = require('../db/data.json');
}

const crear = (descripcion) => {
    cargarDB();

    let porHacer = {
        descripcion: descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();
    return porHacer;
}

const actualizarDB = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let borrarXD;
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index !== -1) {
        borrarXD = listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
    //console.log(index);
}

module.exports = {
    crear,
    getListado,
    actualizarDB,
    borrar
}