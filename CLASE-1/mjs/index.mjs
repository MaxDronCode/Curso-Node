// .js -> Por defecto utiliza commonJS
// .mjs -> para utilizar ES modules
// .cjs -> para forzar que utilice commonJS 

import { sum, sub, mult } from './sum.mjs'// { sum } con llaves para asegurarnos que usamos la forma nombrada, para que los nombres hagan match entre un archivo y otro 'sum'

console.log(sum(1, 20))
console.log(sub(3, 4))
console.log(mult(3, 3))