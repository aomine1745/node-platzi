const http = require('http')
const server = http.createServer()
const PORT = 8002

const getDayOfDate = (date) => {
  const formatDate = new Date(date)
  const day = formatDate.getDay()
  const month = formatDate.getMonth()
  const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado']
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre']
  return {
    day: days[day],
    month: months[month],
    year: formatDate.getFullYear()
  }
}

server.on('request', (req, res)=> {
  if (req.method === 'POST' && req.url === '/echo') {
    let body = []

    req
    .on('data', chunk => {
      body.push(chunk)
    })
    .on('end', () => {
      res.writeHeader(200, {
        'Content-Type': 'text/plain'
      })
      const date = Buffer.concat(body).toString()
      const { day, month, year } = getDayOfDate(date)
      res.end(`naciste el día ${day} de ${month} del año ${year}`)
    })
  } else {
    res.statusCode = 404
    res.end('page not found')
  }

})

server.listen(PORT)
console.log(`server running in http://localhost:${PORT}`)