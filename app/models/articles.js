var ArticleSchema, Schema, mongoose;

mongoose = require('mongoose');

Schema = mongoose.Schema;

ArticleSchema = new Schema({
  title: {
    type: String,
    "default": '',
    trim: true
  },
  body: {
    type: String,
    "default": '',
    "true": true
  }
});

ArticleSchema.path('title').required(true, 'Article title can\'t be blank');

mongoose.model('Article', ArticleSchema);
