// SISTEMA ASÍNCRONO CON CALLBACKS
const fs = require('node:fs')
const { text } = require('stream/consumers')

console.log('Leyendo el primer archivo...')
// const file = fs.readFileSync('./archivo.txt', 'utf-8') // Si le pasas de segundo parametro 'utf-8', el archivo pelao se formatea a string

// Node no sabe en que momento ha terminado de  leer un archivo
// Para eso se utiliza un mecanismo llamado callbacks
// Que son funciones que se ejecutan cuando una tarea ha terminado
// De manera que comentamos la linea 5 y la volvemos a hacer abajo con el callback
fs.readFile('./archivo.txt', 'utf-8', (err, text) => { // quiero que me leas este archivo, lo codifiques en utf8 y cuando termines de leerlo ejecutes el siguiente codigo
  console.log(text)
})
console.log('Hacer cosas mientras se lee el archivo...')
// console.log(file)

// console.log('Archivo pelao: ', file)
// console.log('Archivo pasado a string: ' , file.toString())
// console.log('El length del archivo: ', file.length)

console.log('Leyendo el segundo archivo...')
// const file2 = fs.readFile('./archivo2.txt', 'utf-8')
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
  console.log(text)
})

// console.log(file2)

// Aqui se puede apreciar como los eventos se ejecutan ASINCRONAMENTE con readFile
// NO SABEMOS cual llega ANTES y cual DESPUÉS
// IMPORTANCIA DEL CALLBACK -> Función que sabemos que se ejecutará cuando ese evento termine
