const http = require('node:http')
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 1234

function processRequest (req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf8')

  if (req.url === '/') {
    req.statusCode = 200
    res.end('<h3>Bienvenido a mi página web</h3>')
  } else if (req.url === '/img') {
    fs.readFile('./test.png', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h3>500: Internal server error</h3>')
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.statusCode = 200
        res.end(data)
      }
    })
  } else if (req.url === '/contacto') {
    res.statusCode = 200
    res.end('<h3>Bienvenido a mi página de contacto</h3>')
  } else {
    res.statusCode = 404
    res.end('<h3>404 ERROR</h3>')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`Server listening in port http://localhost:${desiredPort}`)
})
