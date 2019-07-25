const ruuviRouter = require('express').Router()
const Ruuvi = require('../models/ruuvi')

ruuviRouter.post('/', (request, response, next) => {
  const ruuvi = new Ruuvi(request.body)

  ruuvi
    .save()
    .then(result => {
      response.status(201).json(result)
    })
    .catch(error => next(error))
})

module.exports = ruuviRouter
