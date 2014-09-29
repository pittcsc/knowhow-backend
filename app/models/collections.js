var CollectionSchema, Schema, mongoose;

mongoose = require('mongoose');

Schema = mongoose.Schema;

CollectionSchema = new Schema({
  title: {
    type: String,
    "default": '',
    trim: true
  },
  description: {
    type: String,
    "default": '',
    "true": true
  },
  category: {
    type: Schema.ObjectId,
    ref: 'Category'
  },
  articles: [
    {
      article: {
        type: Schema.ObjectId,
        ref: 'Article'
      }
    }
  ]
});

CollectionSchema.path('title').required(true, 'Collection title can\'t be blank');

mongoose.model('Collection', CollectionSchema);
