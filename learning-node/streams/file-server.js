const http = require('http')
const server = http.createServer()
const fs = require('fs')
const PORT = 800

server.on('request', (req, res) => {
  fs.readFile('./big', (err, data) => {
    if (err) {
      console.log(`error: ${error}`)
    } else {
      res.end(data)
    }
  })
})

server.listen(PORT)
console.log(`Server is listening in http://localhost:${PORT}`)