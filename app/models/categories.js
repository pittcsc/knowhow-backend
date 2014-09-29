var CategorySchema, Schema, mongoose;

mongoose = require('mongoose');

Schema = mongoose.Schema;

CategorySchema = new Schema({
  title: {
    type: String,
    "default": '',
    trim: true
  },
  description: {
    type: String,
    "default": '',
    "true": true
  }
});

CategorySchema.path('title').required(true, 'Category title can\'t be blank');

mongoose.model('Category', CategorySchema);
