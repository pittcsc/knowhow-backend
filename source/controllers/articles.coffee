#
# Categories Controller
#

mongoose = require 'mongoose'
Article = mongoose.model 'Article'


# Helper method to load an article onto the request object
exports.load = (req, res, next)->
  Article.findById req.param('id'), (err, article)->
    return next(err) if err?
    req.article = article
    next()


# Return a single article
exports.show = (req, res, next)->
  res.json { article: req.article}
  res.status 200


# Return an array of articles
exports.index = (req, res, next)->
  Article.find (err, articles)->
    res.json { articles: articles}
    res.status(200).end()


# Create a new article
exports.new = (req, res, next)->
  Article.create req.body.article, (err, article)->
    return next(err) if err?
    console.log "Created article: #{article.title}"
    res.status(201).end()


# Update
exports.update = (req, res, next)->
  article = req.article
  for key,value of req.body.article
    article[key] = req.body.article[key] if article[key]?
  article.save (err)->
    return next(err) if err?
    res.status(204).end()


exports.delete = (req, res, next)->
  article = req.article
  article.remove (err, article)->
    return next(err) if err?
    console.log "Removed article: #{article.title}"
    res.status(204).end()

