const fs = require('node:fs')

const stats = fs.statSync('./2.file-system.js')
console.log(
  stats.isFile(), // es un archivo
  stats.isDirectory(), // es un directorio
  stats.isSymbolicLink(), // es un link
  stats.size // tamaño en bites
)
