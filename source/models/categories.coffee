#
# Category Model
#

mongoose = require 'mongoose'
Schema = mongoose.Schema

CategorySchema = new Schema
  title: { type: String, default: '', trim: true }
  description: { type: String, default: '', true: true }
  collections: [
    collect: { type: Schema.ObjectId, ref: 'Collection' }
  ]


# Validations
CategorySchema.path('title').required true, 'Category title can\'t be blank'


# Methods
CategorySchema.method
  # Override the default toJSON method so that we
  # can send a JSON format to the front end that
  # actually makes sense.
  toJSON: ->
    json = {}
    json.id = @_id
    json.title = @title

    # Set up collection array
    json.collections = []
    for collection in @collections
      json.collections.push collection._id

    return json


  returnSomething: ->
    return 'This is a test'


  addCollection: (collection, cb)->
    @collections.push collection._id
    console.log this
    @save(cb)

mongoose.model 'Category', CategorySchema
