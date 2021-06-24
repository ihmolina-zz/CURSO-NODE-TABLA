const argv = require('yargs')
    .options('b', {
        alias: 'base',
        demandOption: true,
        type: 'number',
        describe: 'El elemento debera ser un numero',
        default: false
    })

    .options ('l', {
        alias: 'listar',
        type: 'boolean',
        describe:'Listado en pantalla',
        default: false
    })

    .options('h',{
        alias:'hasta',
        type:'number',
        describe:'Hasta que número se realiza la tabla',
        defualt: 10
    })

    .check( (argv, options) => {
        if( isNaN(argv.b ) ){
            throw 'La base tiene que ser un número'
        }
        return true;
    })
    .argv;


module.exports = argv;