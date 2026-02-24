//slide 29
const fs = require('fs')
const autos = fs.readFileSync('vehiculos.json', 'utf8')
JSON.parse(autos).forEach((auto) => {
    console.log(auto)
})