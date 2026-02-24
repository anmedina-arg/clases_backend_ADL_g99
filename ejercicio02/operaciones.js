//[1] Función para crear archivo
const createFile = (nombreArchivo, contenido) =>{
        //[1.1] Llamar al módulo FileSystem
        const fs = require('fs')
        //[1.2] Crear archivo
        fs.writeFileSync(nombreArchivo, JSON.stringify(contenido))
        //[1.3] Mensaje de archivo creado
        console.log(`el archivo ${nombreArchivo} fue creado`)
}

const readFile = (nombreArchivo) =>{
    //[2.1] Llamar al módulo FileSystem
    const fs = require('fs')
    //[2.2] Leer y almacenar
    const contenido= fs.readFileSync(nombreArchivo, 'utf8')
    //[2.3] Mostrar contenido
    console.log(contenido)
}

module.exports = { createFile, readFile }