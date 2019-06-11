//const fs = require('fs'); //componente propio de node
//const fs = require('express');paquete instalable no es nativo
//const fs = require('./fs');archivos a parte
//yargs es una libreria que valida los comandos al ejecutar una aplicacion
const argv = require('./config/yargs').argv;
const color = require('colors');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); //si despues de un const o let vienen llaves eso es una destructuracion

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);

        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comandon no reconocido');
}
//process = variable de entorno es como un platform datos del sistema y demas
//process.argv ubicacion de node y ubicacion del archivo utilizado en ese momento, todos los parametros pasados a la funcion se visualizan


/* let parametro = argv[2];
let base = parametro.split('=')[1]; */