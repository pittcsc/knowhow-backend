var Category, CollectionSchema, Schema, mongoose;

mongoose = require('mongoose');

Schema = mongoose.Schema;

Category = mongoose.model('Category');

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

CollectionSchema.pre('remove', function(next) {
  var _ref;
  if (((_ref = this.category) != null ? _ref._id : void 0) == null) {
    next();
  }
  Category.remove({
    collection: this._id
  }).exec();
  return next();
});

CollectionSchema.method({
  toJSON: function() {
    var article, json, _i, _len, _ref;
    json = {};
    json.id = this._id;
    json.title = this.title;
    json.category = this.category;
    json.articles = [];
    _ref = this.articles;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      article = _ref[_i];
      json.articles.push(article._id);
    }
    return json;
  }
});

mongoose.model('Collection', CollectionSchema);
