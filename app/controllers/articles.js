var Article, mongoose;

mongoose = require('mongoose');

Article = mongoose.model('Article');

exports.load = function(req, res, next) {
  return Article.findById(req.param('id'), function(err, article) {
    if (err != null) {
      return next(err);
    }
    if ((article == null) || article.length === 0) {
      return next(new Error('not found'));
    } else {
      req.article = article;
    }
    return next();
  });
};

exports.show = function(req, res, next) {
  res.json({
    article: req.article
  });
  return res.status(200);
};

exports.index = function(req, res, next) {
  return Article.find(function(err, articles) {
    res.json({
      articles: articles
    });
    return res.status(200).end();
  });
};

exports["new"] = function(req, res, next) {
  return Article.create(req.body.article, function(err, article) {
    if (err != null) {
      return next(err);
    }
    console.log("Created article: " + article.title);
    return res.status(201).end();
  });
};

exports.update = function(req, res, next) {
  var article, key, value, _ref;
  article = req.article;
  _ref = req.body.article;
  for (key in _ref) {
    value = _ref[key];
    if (article[key] != null) {
      article[key] = req.body.article[key];
    }
  }
  return article.save(function(err) {
    if (err != null) {
      return next(err);
    }
    return res.status(204).end();
  });
};

exports["delete"] = function(req, res, next) {
  var article;
  article = req.article;
  return article.remove(function(err, article) {
    if (err != null) {
      return next(err);
    }
    console.log("Removed article: " + article.title);
    return res.status(204).end();
  });
};
