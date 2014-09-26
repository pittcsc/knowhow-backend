var app, express, server;

express = require('express');

app = express();

app.get('/', function(req, res) {
  return res.send('<h1>Hello world!</h1>');
});

server = app.listen(3000, function() {
  return console.log("listening on port %d", server.address().port);
});
