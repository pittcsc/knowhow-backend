#
# Category Model
#

mongoose = require 'mongoose'
Schema = mongoose.Schema

CategorySchema = new Schema
  title: { type: String, default: '', trim: true }
  description: { type: String, default: '', true: true }


# Validations
CategorySchema.path('title').required true, 'Category title can\'t be blank'


mongoose.model 'Category', CategorySchema
