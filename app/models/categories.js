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
  },
  collections: [
    {
      collect: {
        type: Schema.ObjectId,
        ref: 'Collection'
      }
    }
  ]
});

CategorySchema.path('title').required(true, 'Category title can\'t be blank');

CategorySchema.method({
  toJSON: function() {
    var collection, json, _i, _len, _ref;
    json = {};
    json.id = this._id;
    json.title = this.title;
    json.collections = [];
    _ref = this.collections;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      collection = _ref[_i];
      json.collections.push(collection._id);
    }
    return json;
  },
  returnSomething: function() {
    return 'This is a test';
  },
  addCollection: function(collection, cb) {
    this.collections.push(collection._id);
    console.log(this);
    return this.save(cb);
  }
});

mongoose.model('Category', CategorySchema);
