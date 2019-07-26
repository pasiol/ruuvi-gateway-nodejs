require('dotenv').config()

let PORT = process.env.PORT
let MONGODB_URI = process.env.MONGODB_URI
let SSLPATH = process.env.SSLPATH

module.exports = {
  MONGODB_URI,
  PORT,
  SSLPATH
}
