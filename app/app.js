var app, db, express, server;

express = require('express');

app = express();

db = require('./data');

app.use(function(req, res, next) {
  res.set({
    'Access-Control-Allow-Origin': '*'
  });
  return next();
});

app.get('/', function(req, res) {
  return res.send('<h1>Hello world!</h1>');
});


/*
 *  Categories Route
 */

app.route('/categories').all(function(req, res, next) {
  return next();
}).get(function(req, res, next) {
  res.json({
    categories: db.toArray()
  });
  res.status(200).end();
  return next();
}).post(function(req, res, next) {
  return ress.status(200).end();
});

app.route('/categories/:id').get(function(req, res, next) {
  var category;
  category = db.find(parseInt(req.param('id')));
  res.json({
    category: category
  });
  return res.status(200).end();
});


/*
 *  Finish Initialization
 */

server = app.listen(3000, function() {
  return console.log("listening on port %d", server.address().port);
});
