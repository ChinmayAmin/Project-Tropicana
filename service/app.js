/*
 *+-----------------+
 *PROJECT TROPICANA
 *+-----------------+
 */

var express = require('express');
var app     = express();

app.use(function(req, res, next) {
  console.log('['+ new Date() +'] ', req.path);
  next();
});

app.get('/', function(req, res){
  res.send('HELLO NEW CLIENT, THIS IS DOG');
});

app.get('', function(req, res){
  res.send('HELLO NEW CLIENT, THIS IS DOG');
});

var server = app.listen(3000, '0.0.0.0', function() {
  console.log('Listening on port %d', server.address().port);
});
