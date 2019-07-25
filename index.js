const app = require('./app')
const http = require('http')
const config = require('./utils/config')

const server = http.createServer(app)

server.listen(parseInt(config.PORT), () => {
  console.log(`API-server running on port ${config.PORT}.`)
})
