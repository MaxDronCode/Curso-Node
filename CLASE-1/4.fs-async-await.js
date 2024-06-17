// MÉTODO ASÍNCRONO SENCUENCIAL
const { readFile } = require('node:fs/promises')
async function init() {
    
    console.log('Leyendo el primer archivo...')
    const text = await readFile('./archivo.txt', 'utf8')
    console.log('Primer texto: ', text)
    console.log('--> Hacemos cosas mientras se lee el archivo...')
    
    console.log('Leemos el segundo archivo...')
    const secondText = await readFile('./archivo2.txt', 'utf8')
    console.log(secondText)
}

init()
