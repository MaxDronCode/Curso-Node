const fs = require('node:fs/promises') // Al añadir /promises, el codigo en vez de callbacks trabajará con promesas

console.log('Leyendo el primer archivo...')

fs.readFile('./archivo.txt', 'utf-8').then(text => console.log(text)) // Ya no hace falta callback, se usa .then (Cuando acabe, entonces me haces el console.log)

console.log("Hacemos cosas mientras se lee el archivo...")

fs.readFile('./archivo2.txt', 'utf-8')
    .then(text => {
        console.log(text)
})