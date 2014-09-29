var Collection, mongoose;

mongoose = require('mongoose');

Collection = mongoose.model('Collection');

exports.load = function(req, res, next) {
  return Collection.findById(req.param('id'), function(err, collection) {
    if (err != null) {
      return next(err);
    }
    req.collection = collection;
    return next();
  });
};

exports.show = function(req, res, next) {
  console.log("Showing collection:");
  console.log("\tid:    " + req.collection._id);
  console.log("\ttitle: " + req.collection.title);
  return res.status(200).json({
    collection: req.collection
  });
};

exports.index = function(req, res, next) {
  return Collection.find(function(err, collections) {
    res.json({
      collections: collections
    });
    return res.status(200).end();
  });
};

exports["new"] = function(req, res, next) {
  req.body.collection.category = req.category._id;
  return Collection.create(req.body.collection, function(err, collection) {
    if (err != null) {
      return next(err);
    }
    return req.category.addCollection(collection, function() {
      console.log("Created collection: " + collection.title);
      res.set({
        'Location': "/collections/" + collection._id
      });
      return res.status(201).json({
        collection: collection
      });
    });
  });
};

exports.update = function(req, res, next) {
  var collection, key, value, _ref;
  collection = req.collection;
  _ref = req.body.collection;
  for (key in _ref) {
    value = _ref[key];
    if (collection[key] != null) {
      collection[key] = req.body.collection[key];
    }
  }
  return collection.save(function(err) {
    if (err != null) {
      return next(err);
    }
    return res.status(204).end();
  });
};

exports["delete"] = function(req, res, next) {
  var collection;
  collection = req.collection;
  return collection.remove(function(err, collection) {
    if (err != null) {
      return next(err);
    }
    console.log("Removed collection: " + collection.title);
    return res.status(204).end();
  });
};
