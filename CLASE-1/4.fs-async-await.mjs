// Para usar await
// Cambiar la extension a .mjs
import { readFile } from 'node:fs/promises' // lo importamos no como CommonJS sino como ECMAScript modules

console.log('Leyendo el primer archivo...')

const text = await readFile('./archivo.txt', 'utf8')
console.log('Primer texto: ', text)
console.log('--> Hacemos cosas mientras se lee el archivo...')

console.log('Leemos el segundo archivo...')
const secondText = await readFile('./archivo2.txt', 'utf8')
console.log(secondText)
