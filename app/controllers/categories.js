var Category, mongoose;

mongoose = require('mongoose');

Category = mongoose.model('Category');

exports.load = function(req, res, next) {
  return Category.findById(req.param('id'), function(err, category) {
    if (err != null) {
      return next(err);
    }
    if ((category == null) || category.length === 0) {
      return next(new Error('not found'));
    } else {
      req.category = category;
    }
    return next();
  });
};

exports.show = function(req, res, next) {
  res.json({
    category: req.category
  });
  return res.status(200);
};

exports.index = function(req, res, next) {
  return Category.find(function(err, categories) {
    res.json({
      categories: categories
    });
    return res.status(200).end();
  });
};

exports["new"] = function(req, res, next) {
  return Category.create(req.body.category, function(err, category) {
    if (err != null) {
      return next(err);
    }
    console.log("Created category: " + category.title);
    res.set({
      'Location': "/categories/" + category._id
    });
    res.json({
      category: category
    });
    return res.status(201).end();
  });
};

exports.update = function(req, res, next) {
  var category, key, value, _ref;
  category = req.category;
  _ref = req.body.category;
  for (key in _ref) {
    value = _ref[key];
    if (category[key] != null) {
      category[key] = req.body.category[key];
    }
  }
  return category.save(function(err) {
    if (err != null) {
      return next(err);
    }
    return res.status(204).end();
  });
};

exports["delete"] = function(req, res, next) {
  var category;
  category = req.category;
  return category.remove(function(err, category) {
    if (err != null) {
      return next(err);
    }
    console.log("Removed category: " + category.title);
    return res.status(204).end();
  });
};
