#
# Router
#

module.exports = (app, express)->

  ###
  #  Middleware
  ###
  allRouter = express.Router()
  allRouter.use (req, res, next)->
    res.set
      'Access-Control-Allow-Origin': '*'
      'Access-Control-Allow-Headers': 'Content-Type'
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
      'Content-Type': 'application/vnd.api+json'
    next()
  app.use('/', allRouter) # Mounts this router at the root



  ###
  #  Categories Route
  ###
  categoriesRouter = express.Router()
  require('../routes/categories')(categoriesRouter)
  app.use('/categories', categoriesRouter) # Mounts this router at /categories



  ###
  #  Collections Route
  ###
  collectionsRouter = express.Router()
  require('../routes/collections')(collectionsRouter)
  app.use('/collections', collectionsRouter) # Mounts this router at /categories



  ###
  #  Handle Errors
  ###
  app.use (err, req, res, next)->
    if err.message = 'not found'
      res.status(404).end()
    else if err.name == 'ValidationError'
      res.status(400).end()
    else
      console.error err.stack
    next()
