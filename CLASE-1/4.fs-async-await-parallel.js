// SISTEMA EN PARALELO
const { readFile } = require('node:fs/promises')

// Lo que hace aqui es: te lees los dos archivo y cuando termines...
// Te creas todas las promesas
Promise.all([
  readFile('./archivo.txt', 'utf8'),
  readFile('./archivo2.txt', 'utf8')
]).then(([text, secondText]) => {
  console.log('Primer Texto: ', text)
  console.log('Segundo Texto: ', secondText)
})
