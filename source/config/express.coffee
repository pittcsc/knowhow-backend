#
# Express Configuration
#

express        = require 'express'
bodyParser     = require 'body-parser'
methodOverride = require 'method-override'
multer         = require 'multer'

module.exports = (app)->

  app.use bodyParser.json()
  app.use bodyParser.json type: 'application/vnd.api+json'
  app.use bodyParser.json type: 'application/json; charset=UTF-8'
  app.use bodyParser.urlencoded extended: true
  app.use multer()
  app.use methodOverride (req, res)->
    if req.body and typeof req.body == 'object' and '_method' in req.body
      method = req.body._method
      delete req.body._method
      return method

