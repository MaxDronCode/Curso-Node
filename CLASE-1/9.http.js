const http = require('node:http')

const server = http.createServer((req, res) => {
  console.log('Rquest recieved')
  res.end('Hola mundo') // .end termina la comunicacion - y en este caso devuelve un 'Hola mundo'
})

// El servidor tiene que escuchar por algun puerto
// server.listen(1234, () => {
//   console.log('Server listening in port 1234')
// })

// Truco para siempre abrir un puerto que NO este ya en uso
server.listen(0, () => { // ponemos aqui el puerto 0
  console.log(`Server listening in port http://localhost:${server.address().port}`) // recuperamos del server el puerto para saber cual es
})
