// Express
const express = require('express')
const app = express()

// Resources
const { config } = require('./config')
const moviesApi = require('./routes/movies')

// middlewares
const { logErrors, wrapErrors, errorHandler } = require('./utils/middleware/errorHandlers')
const notFoundHandler = require('./utils/middleware/notFoundHandler')
const cors = require('cors')

const corsOptions = {
  origin: config.cors
}

// Body parser
app.use(express.json())

// cors
app.use(cors(corsOptions))

// Routes
moviesApi(app)

// Catch 404
app.use(notFoundHandler)

// Error handlers
app.use(logErrors)
app.use(wrapErrors)
app.use(errorHandler)

app.listen(config.port, () => {
  console.log(`listening http://localhost:${config.port}`)
})
