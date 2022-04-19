const fs = require('fs');
const inquirer = require('inquirer');



inquirer.prompt([
    {
        type: 'input',
        name: 'gastoMonto',
        message: 'Ingrese el monto gastado: ',
        default: 0
    }, 
    {
        type: 'input',
        name: 'gastoRazon',
        message: 'Descripción de lo comprado: ', 
        default: '-'
    }
])

.then((a) => {
    let entrada = JSON.stringify(a, null, 2);
    fs.writeFile('gastos.json', entrada, (err) => {
        if (err) throw err
       console.log('Archivo de gastos creado, gasto agregado')
    })

    // fs.readFile('gastos.json', 'utf-8', (err, data) => {
    //     try {
    //         entrada = JSON.parse(data) // ahora vuelve a ser un objeto
    //         console.log(data) 
    //     }
    //     catch (err) {
    //         console.log('ALERRTAAAAAA: ', err)
    //     }
    // });
})