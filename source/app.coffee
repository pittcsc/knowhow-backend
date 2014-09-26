express = require 'express'
app = express()
db = require './data'

app.use (req, res, next)->
  res.set
    'Access-Control-Allow-Origin': '*'
  next()

app.get '/', (req, res)->
  res.send '<h1>Hello world!</h1>'


###
#  Categories Route
###

app.route '/categories'
.all (req, res, next)->
  next()
.get (req, res, next)->
  res.json { categories: db.toArray() }
  res.status(200).end()
  next()
.post (req, res, next)->
  ress.status(200).end()


app.route '/categories/:id'
.get (req, res, next)->
  category = db.find parseInt(req.param('id'))
  res.json { category: category }
  res.status(200).end()



###
#  Finish Initialization
###

server = app.listen 3000, ->
  console.log "listening on port %d", server.address().port
