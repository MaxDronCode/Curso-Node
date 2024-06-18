// PROCESS : Objeto global que proporciona informacion y control sobre el proceso actual de ejecucion
// Que elementos podemos sacar del proceso actual?
// 1. Argumentos de entrada
// console.log(process.argv)
// 2. Podemos controlar los eventos del proceso
// process.on('exit', () => {
//     // Limpiar los recursos por ejemplo, o la consola...
// })
// podemos escuchar eventos, errores en concreto...

// tambien hay metodos como el Current Working Directory
// Nos dice desde que carpeta estamos ejecutando el proceso
console.log(process.cwd())

// Se pueden conocer la id del proceso, carga de la cpu y muchas mas cosas. Explocar en process(.)

// Una cosa interesante es conoceer las variables de entorno
console.log(process.env.NODE_ENV)
