//slide 19
const fs = require('fs')

const tareas = [
    {text:'1. Ir al gimnasio'},
    {text:'2. Buscar al niño al colegio'},
    {text:'3. Pagar los gastos comunes'},
    {text:'4. Cargar bencina'}
]

fs.writeFileSync('tareas.json', JSON.stringify(tareas))