
/*
 *  Knowhow Server
 *  Alex LaFroscia
 *  Sep 26, 2014
 */
var app, connect, express, fs, mongoose, router, server;

fs = require('fs');

express = require('express');

mongoose = require('mongoose');

app = express();

router = express.Router();

connect = function() {
  return mongoose.connect('mongodb://localhost:27018/knowhow');
};

connect();

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

fs.readdirSync(__dirname + '/models').forEach(function(file) {
  return require(__dirname + '/models/' + file);
});

require('./config/express')(app);

require('./config/router')(app, express);

server = app.listen(3000, function() {
  return console.log("listening on port %d", server.address().port);
});

module.exports = app;
