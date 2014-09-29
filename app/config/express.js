var bodyParser, express, methodOverride, multer,
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

express = require('express');

bodyParser = require('body-parser');

methodOverride = require('method-override');

multer = require('multer');

module.exports = function(app) {
  app.use(bodyParser.json());
  app.use(bodyParser.json({
    type: 'application/vnd.api+json'
  }));
  app.use(bodyParser.json({
    type: 'application/json; charset=UTF-8'
  }));
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(multer());
  return app.use(methodOverride(function(req, res) {
    var method;
    if (req.body && typeof req.body === 'object' && __indexOf.call(req.body, '_method') >= 0) {
      method = req.body._method;
      delete req.body._method;
      return method;
    }
  }));
};
