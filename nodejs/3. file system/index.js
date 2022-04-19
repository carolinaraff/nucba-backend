const fs = require("fs");
const content = '\nTe escribi algo mas puntoooo';

fs.writeFile('contenido.txt', 'Este es mi contenido!', (err) => {
    if (err) throw err;
    console.log('El archivo se creo');
});


fs.appendFile('contenido.txt', content, (err) => {
    if (err) throw err;
    console.log('El archivo se modifico');
});
