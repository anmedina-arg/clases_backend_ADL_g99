const {createFile, readFile} = require('./operaciones.js')

createFile('archivito.json', 'esto es un mensajito lindo')

readFile('archivito.json')