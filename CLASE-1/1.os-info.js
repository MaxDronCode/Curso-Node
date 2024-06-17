import { arch, freemem, totalmem, cpus } from 'node:os'

console.log('Arquitectura del sistema operativo: ', arch())
console.log('Memoria libre: ', freemem() / 1024 / 1024)
console.log('Memoria Total: ', totalmem() / 1024 / 1024)
console.log(cpus())
