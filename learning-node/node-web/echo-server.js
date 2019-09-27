const http = require('http')
const server = http.createServer() 
const PORT = 8001

server.on('request', (req, res) => {
  if (req.method === 'POST' && req.url === '/echo') {
    let body = []

    req.on('data', chunk => {
      body.push(chunk)
    })
    .on('end', () => {
      res.writeHeader(200, {
        'Content-Type': 'text/plain'
      })
      body = Buffer.concat(body).toString()
      res.end(body)
    })

  } else {
    res.statuCode = 404
    res.end('Error 404')
  }
  
})

server.listen(PORT)
console.log(`servidor en la url http://localhost:${PORT}`)
