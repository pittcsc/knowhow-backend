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

ArticleSchema.method({
  toJSON: function() {
    var json;
    json = {};
    json.id = this._id;
    json.title = this.title;
    json.body = this.body;
    return json;
  }
});

mongoose.model('Article', ArticleSchema);
