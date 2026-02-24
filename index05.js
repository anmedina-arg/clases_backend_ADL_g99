//slide 25
//importamos
const fs = require('fs');
//leemos y guardamos en una variable
const tareas = fs.readFileSync('tareas.json', 'utf8');

//mostrar lo leído
console.log(JSON.stringify(tareas));
// JSON.parse(tareas).forEach((tarea) => {
//   console.log(tarea);
// });

/*
[
  { "text": '1. Ir al gimnasio' },
  { "text": '2. Buscar al niño al colegio' },
  { "text": '3. Pagar los gastos comunes' },
  { "text": '4. Cargar bencina' }
]; // JSON - JAvascript Object Notation
*/
