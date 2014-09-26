express = require 'express'
app = express()

app.get '/', (req, res)->
  res.send '<h1>Hello world!</h1>'


server = app.listen 3000, ->
  console.log "listening on port %d", server.address().port

