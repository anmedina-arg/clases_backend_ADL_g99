// //slide 15
const fs = require('fs'); // Commonjs

//import { writeFileSync } from 'fs'; // Ecma Script

const tareas = `    1. Ir al gimnasioooooooooooooooooooo`;

fs.writeFileSync('tareas-5.txt', tareas);

// const fs = {
//   propiedad1: 'valor1',
//   propiedad2: 'valor2',
//   writeFileSync: function () {
//     console.log('holiiiiiii');
//   },
//   suma: function (a, b) {
//     return a + b;
//   },
// };

// console.log(fs.writeFileSync());

console.log('tareas creadas con exito!');
