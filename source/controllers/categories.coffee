#
# Categories Controller
#

mongoose = require 'mongoose'
Category = mongoose.model 'Category'


# Helper method to load an article onto the request object
exports.load = (req, res, next)->
  Category.findById req.param('id'), (err, category)->
    return next(err) if err?
    if !category? or category.length == 0
      return next(new Error('not found'))
    else
      req.category = category
    next()


# Return a single category
exports.show = (req, res, next)->
  res.json { category: req.category }
  res.status 200


# Return an array of categories
exports.index = (req, res, next)->
  Category.find (err, categories)->
    res.json { categories: categories }
    res.status(200).end()


# Create a new category
exports.new = (req, res, next)->
  Category.create req.body.category, (err, category)->
    return next(err) if err?
    console.log "Created category: #{category.title}"
    res.set
      'Location': "/categories/#{category._id}"
    res.json { category: category }
    res.status(201).end()


# Update
exports.update = (req, res, next)->
  category = req.category
  for key,value of req.body.category
    category[key] = req.body.category[key] if category[key]?
  category.save (err)->
    return next(err) if err?
    res.status(204).end()


exports.delete = (req, res, next)->
  category = req.category
  category.remove (err, category)->
    return next(err) if err?
    console.log "Removed category: #{category.title}"
    res.status(204).end()

