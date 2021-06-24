

const fs = require('fs'); // Se llama el metodo filesystem dentro de la biblioteca de node
const colors = require('colors');

const crearArchivo = (base, listar, hasta = 10) => {

    return new Promise((resolve,reject) =>{  // Se crea una una promesa 
            let salida ='';
            
            
        
            for (let i = 1; i <= hasta; i++) {  
                salida += `${base} x ${i} = ${base *i} \n`;
            }

                if (listar){
                    console.log(`==========================`.blue)
                    console.log('      Tabla del: ',base)
                    console.log(`==========================`.blue)
                    
                    console.log(colors.rainbow(salida));
                }
            
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
            
            resolve(`Tabla tabla-${base}.txt creada`); // si es verdad retorna esto

            

    })


};


module.exports = {
    crearArchivo
};

