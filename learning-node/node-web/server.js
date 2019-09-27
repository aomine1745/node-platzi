const http = require('http')
const server = http.createServer() 
const PORT = 8000

server.on('request', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain')

  res.end('hello world\n')
})

server.listen(PORT)
console.log(`servidor en la url http://localhost:${PORT}`)
