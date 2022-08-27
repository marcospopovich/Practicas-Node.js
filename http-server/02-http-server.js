'use strict'
const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  console.log('Escuchando ...')
  console.log(res.statusCode)
  res.statusCode = 404
  console.log(res.statusCode)
  
  res.end('Hola Mundo')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})