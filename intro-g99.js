// console.log('ejecutando suma');

// function suma(a, b) {
//   return a + b;
// }

// console.log(suma(4, 5));

const fs = require('fs');

// console.log('que tiene la variable pepito? ', fs.writeFileSync);

// const tareas = `
//  1. Ir al gimnasio
//  2. Buscar al niño al colegio
//  4. Estudiar Node
// `;

const tareas = [
  { text: 'Ir al gimnasio' },
  { text: 'Pagar los gastos comunes' },
  { text: 'Cargar bencina' },
];

// console.log('que es tareas? ', tareas);

//fs.writeFileSync('tareas-G99.json', JSON.stringify(tareas));

const tareas_leidas = fs.readFileSync('tareas-G99.json', 'utf-8');

console.log(tareas_leidas);

// console.log(typeof tareas_leidas);
// console.log(typeof JSON.parse(tareas_leidas));

const tareas_leidas_parseadas = JSON.parse(tareas_leidas);

tareas_leidas_parseadas.forEach((tarea) => console.log(`tarea: ${tarea.text}`));
