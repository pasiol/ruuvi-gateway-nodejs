const config = require('./utils/config')
const app = require('./app')
const fs = require('fs')
const http = require('http')
const https = require('https')

const args = process.argv.slice(2)
console.log('Getting arguments ', args[0])

let server = null

if (args[0] === 'testmode') {
  server = http.createServer(app)
} else {
  try {
    var options = {
      key: fs.readFileSync(`${config.SSLPATH}/privkey.pem`),
      cert: fs.readFileSync(`${config.SSLPATH}/fullchain.pem`),
      ca: fs.readFileSync(`${config.SSLPATH}/chain.pem`)
    }
  } catch (error) {
    console.log('Not founded ssl-certificates: ', error.code, error.path)
    process.exit(0)
  }
  server = https.createServer(options, app)
}

server.listen(parseInt(config.PORT), () => {
  console.log(`API-server running on port ${config.PORT}.`)
})
