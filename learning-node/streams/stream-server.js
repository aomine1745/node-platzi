const http = require('http')
const server = http.createServer()
const fs = require('fs')
const PORT = 3000

server.on('request', (req, res) => {
  const src = fs.createReadStream('./big')
  src.pipe(res)
})

server.listen(PORT)
console.log(`Server is listening in http://localhost:${PORT}`)