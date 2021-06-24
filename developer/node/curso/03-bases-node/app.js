

//const { demandOption, number, describe, options, boolean, require } = require('yargs');
const {crearArchivo }= require('./helpers/multiplicar');
const argv = require('./config/yargs');



console.clear();


console.log(process.argv); // este muestra los argumentos de la consola de argv
//console.log(argv); // este muestra la asignacion de argv = requere(`yargs})


//console.log('base: yargs', argv.b);

//const[ , ,arg3 = 1] = process.argv;
//const [ ,base = 5] = arg3.split('=')


//const base = 9;

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo,'creado'))
    .catch( err => console.log(er));








