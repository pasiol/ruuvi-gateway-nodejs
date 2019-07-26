const app = require('./app')
const fs = require('fs')
const http = require('http')
const https = require('https')
const config = require('./utils/config')

const args = process.argv.slice(2)
console.log('Getting arguments ', args[0])

let server = null

if (args[0] === 'testmode') {
  server = http.createServer(app)
} else {
  try {
    var options = {
      key: fs.readFileSync(
        `/etc/letsencrypt/archive/${config.DOMAINNAME}/privkey1.pem`
      ),
      cert: fs.readFileSync(
        `/etc/letsencrypt/archive/${config.DOMAINNAME}/fullchain1.pem`
      ),
      ca: fs.readFileSync(
        `/etc/letsencrypt/archive/${config.DOMAINNAME}/chain1.pem`
      )
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
