// NET - Protocolo como el http per mas liviano y rapido para hacer conexiones
const net = require('node:net')

// creamos una funcion para buscar un puerto disponible
function findAvailablePort (desiredPort) {
  // devolveremos una promesa
  return new Promise((resolve, reject) => {
    const server = net.createServer()

    server.listen(desiredPort, () => {
      const { port } = server.address()
      server.close(() => {
        resolve(port)
      })
    })

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        findAvailablePort(0).then(resolve)
      } else {
        reject(err)
      }
    })
  })
}

module.exports = { findAvailablePort }
