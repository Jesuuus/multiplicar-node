const fs = require('fs');
const color = require('colors');

let listarTabla = (base, limite = 10) => {
    let data = '';
    for (let i = 0; i <= limite; i++) {
        data += (`${base} * ${i} = ${base*i}\n`);
    }
    console.log(data.underline.blue);
}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 0; i <= limite; i++) {
            data += (`${base} * ${i} = ${base*i}\n`);
        }

        //const data = new Uint8Array(Buffer.from('Hello Node.js'));

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }.txt`)
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}