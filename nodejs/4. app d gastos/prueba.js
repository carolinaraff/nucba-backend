const fs = require('fs');
// const inquirer = require('inquirer');

// const gasto = {
//     productoComprado: 'Cocacola',
//     montoGastado: 100
// };
// const gastoJSON = JSON.stringify(gasto);
// fs.writeFileSync('gastos.json', gastoJSON);

// inquirer.prompt([
//     {
//         type: 'input',
//         name: 'gastoMonto',
//         message: 'Ingrese el monto gastado: ',
//         default: 0
//     }, 
//     {
//         type: 'input',
//         name: 'gastoRazon',
//         message: 'Descripción de lo comprado: ', 
//         default: '-'
//     }
// ])
// .then((a) => {
//    console.log(a)
//    const entrada = JSON.stringify(a);
//    fs.writeFileSync('gastos.json', entrada);
// })

/* TODO FUNCIONA OK PERO:
    - al correrse de nuevo el prog el write sobre escribe las entradas
*/ 

const dataBuffer = fs.readFileSync('gastos.json'); // Retorna el contenido del archivo pero no como un string, si no data del buffer de nodeJS (es la manera de representar informacion binaria, q la convierte a representacion hexadecimal)
const dataJSON = dataBuffer.toString(); // Para obtener la info del archivo en forma de string y no en buffer data 
const dataJS = JSON.parse(dataJSON); // Para convertir el objeto JSON en un objeto de JavaScript
console.log(dataJS); // Se puede acceder al objeto
console.log(data.gastoMonto); // Se puede acceder a una propiedad del objeto


const leerSinBuffer = fs.readFile('gastos.json', 'utf-8', (err, JSONString) => { // ESTO LO LEE SIN NECESIDAD DE BUFFE PQ SE ESPECIFICA EL ECONDING
    try {
        const data = JSON.parse(JSONString) // SI SE TIENE QUE PARSEAR PARA CONVETTIRLO EN OBJETO DE JAVASCRIPT
        console.log(data) 
    }
    catch (err) {
        console.log(err)
    }
}); 