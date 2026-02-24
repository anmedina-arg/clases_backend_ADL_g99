//slide 22
const fs = require('fs')
const autos = [
   {
       marca: 'Susuki',
       modelo: 'Kicks',
   },
   {
       marca: 'Toyota',
       modelo: 'Corola',
   },
   {
       marca: 'GAC',
       modelo: 'GS4',
   }
]
fs.writeFileSync('vehiculos.json', JSON.stringify(autos) )