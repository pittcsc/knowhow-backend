#
# Categories Controller
#

mongoose   = require 'mongoose'
Collection = mongoose.model 'Collection'


# Helper method to load an article onto the request object
exports.load = (req, res, next)->
  Collection.findById req.param('id'), (err, collection)->
    return next(err) if err?
    req.collection = collection
    next()


# Return a single collection
exports.show = (req, res, next)->
  console.log "Showing collection:"
  console.log "\tid:    #{req.collection._id}"
  console.log "\ttitle: #{req.collection.title}"
  res.status(200).json { collection: req.collection}


# Return an array of collections
exports.index = (req, res, next)->
  Collection.find (err, collections)->
    res.json { collections: collections}
    res.status(200).end()


# Create a new collection
exports.new = (req, res, next)->
  req.body.collection.category = req.category._id
  Collection.create req.body.collection, (err, collection)->
    return next(err) if err?
    req.category.addCollection collection, ->
      console.log "Created collection: #{collection.title}"
      res.set
        'Location': "/collections/#{collection._id}"
      res.status(201).json { collection: collection }


# Update
exports.update = (req, res, next)->
  collection = req.collection
  for key,value of req.body.collection
    collection[key] = req.body.collection[key] if collection[key]?
  collection.save (err)->
    return next(err) if err?
    res.status(204).end()


exports.delete = (req, res, next)->
  collection = req.collection
  collection.remove (err, collection)->
    return next(err) if err?
    console.log "Removed collection: #{collection.title}"
    res.status(204).end()

