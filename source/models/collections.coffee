#
# Collection Model
#

mongoose = require 'mongoose'
Schema = mongoose.Schema
Category = mongoose.model 'Category'

CollectionSchema = new Schema
  title: { type: String, default: '', trim: true }
  description: { type: String, default: '', true: true }
  category: { type: Schema.ObjectId, ref: 'Category' }
  articles: [{
    article: { type: Schema.ObjectId, ref: 'Article' }
  }]


# Validations
CollectionSchema.path('title').required true, 'Collection title can\'t be blank'


# Pre-Remove Hook
CollectionSchema.pre 'remove', (next)->
  # Do nothing if it isn't set
  next() unless @category?._id?

  # Otherwise, find the category and remove the references to
  # this collection
  Category.remove(collection: @_id).exec()
  next()

CollectionSchema.method
  toJSON: ->
    json = {}
    json.id = @_id
    json.title = @title
    json.category = @category

    # Set up article array
    json.articles = []
    for article in @articles
      json.articles.push article._id

    return json


mongoose.model 'Collection', CollectionSchema
