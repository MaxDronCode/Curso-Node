const express = require('express')
const app = express()
app.disable('x-powered-by') // Quitamos esto de la cabecera para evitar problemas de seguridad
const ditto = require('./pokemon/ditto.json')

const PORT = process.env.PORT ?? 1234

// Vamos a hacer un middleWare (se ejecuta entre la peticion y la respuesta)

// Vamos a hacer un middleWare de verdad
// app.use((req, res, next) => {
//   if (req.method !== 'POST') return next()
//   if (req.headers['Content-Type'] !== 'application/json') return next()
//   // Aqui solo llegan las peticiones POST y que tienen el header Content-Type : application/json
//   let body = ''

//   req.on('data', (chunk) => {
//     body += chunk.toString()
//   })

//   req.on('end', () => {
//     const data = JSON.parse(body)
//     data.timestamp = Date.now()
//     // res.status(201).json(data) NO vamos a responder, vamos a mutar la request y meter la informacion en el req.body
//     req.body = data
//     next()
//   })
// })

// app.use((req, res, next) => { // Se pone next porque es el método al que llama para pasar a la siguiente
//   console.log('Mi primer middleWare')
//   // Ejemplos de uso:
//   // Traquear la request a la base de datos
//   // revisar si el usuario tiene cookies
//   // Puedes decirle al middleWare que solo afecte a las peticiones que empiecen por /pokemon así; (o a las que quieras)
//   // app.use('/pokemon/*', (req, res, next) => {})
//   // Acordarse de poner next() porque sino no sales del middleware (next())
//   next()
// })

// Express ya tiene un middleware que hace esto:
app.use(express.json())

// Cada vez que la aplicacion reciba un get...
app.get('/pokemon/ditto', (req, res) => {
  // La respues que tenemos aqui en express es un poco mas especial y amplia que en nodejs
  // res.status(200).send('<h1>Mi Página</h1>') // El status lo puedes quitar
  // Se puede devolver un json
  // res.json({ message: 'Bienvenido a mi página' })
  res.json(ditto)
})

app.post('/pokemon', (req, res) => {
  // let body = ''

  // req.on('data', (chunk) => {
  //   body += chunk.toString()
  // })

  // req.on('end', () => {
  //   const data = JSON.parse(body)
  //   // Llamar a una bd o lo que sea
  //   data.timestamp = Date.now()
  //   res.status(201).json(data)
  // })
  res.status(201).json(req.body) // Despues de tratar el req.body en el middleWare
})
// Para tratar el error 404 hay que ponerlo al final, despues del get y del post (somo si fueran ifs)
app.use((req, res) => { // .use es como decir * (get, post, delete...)
  res.status(404).send('<h1>Error 404</h1>')
})

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})
