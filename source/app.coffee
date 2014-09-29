###
#  Knowhow Server
#  Alex LaFroscia
#  Sep 26, 2014
###

fs       = require 'fs'
express  = require 'express'
mongoose = require 'mongoose'
app      = express()
router   = express.Router()


# Set up Database
connect = ->
  mongoose.connect 'mongodb://localhost:27018/knowhow'
connect()
mongoose.connection.on 'error', console.error.bind(console, 'connection error:')


# Set up Models
fs.readdirSync(__dirname + '/models').forEach (file)->
  require(__dirname + '/models/' + file)

# Express Config
require('./config/express')(app)

# Router
require('./config/router')(app, express)


# Start server
server = app.listen 3000, ->
  console.log "listening on port %d", server.address().port

module.exports = app
