const http = require('node:http')
const dittoJSON = require('./pokemon/ditto.json')

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
  const { method, url } = req

  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          return res.end(JSON.stringify(dittoJSON))
        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          return res.end('<h2>Error 404 Not found</h2>')
      }
    case 'POST':
      switch (url) {
        case '/pokemon': {
          let body = ''
          // on data: a medida que me llegan los binarios los paso a string y almaceno
          req.on('data', (chunk) => {
            body += chunk.toString()
          })
          // on end: cuando termine, cojo el string y lo paso a JSON
          req.on('end', () => {
            const data = JSON.parse(body)
            // Aquí llamariamos a una bd , hariamos el insert o lo que sea , etc
            // En vez de setHeader puedes escribir el header directamente al enviar con writeHead
            res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' })
            res.end(JSON.stringify(data))
          })

          break
        }

        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html: charset=utf8')
          res.end('<h2>Error 404 not found</h2>')
      }
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`Server listening in port http://localhost:${desiredPort}`)
})
