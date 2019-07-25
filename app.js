const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const ruuvitRouter = require('./controllers/ruuvit')
const middleware = require('./utils/middleware')
const mongoose = require('mongoose')

const mongoUrl = process.env.MONGODB_URI

console.log('Trying to connect the db.')

mongoose
  .connect(mongoUrl, { useNewUrlParser: true })
  .then(result => {
    console.log('Connecting to the db succeed: ', result)
  })
  .catch(err => {
    console.log('Connecting to the db failed: ', err.message)
  })

app.use(cors())
app.use(express.static('build'))
app.use(bodyParser.json())
app.use(middleware.requestLogger)

app.use('/api/ruuvi', ruuvitRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
