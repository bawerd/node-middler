var express = require('express')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.use(app.router);
});

for (var i = 0; i < 100; i++) {
  app.get('/test/' + i, function (req, res, next) {
    res.write('what\'s up!\n\n');
    next();
  });
}
app.get('/test/:id', function (req, res, next) {
  res.end('hello world ' + req.params.id);
});

var server = http.createServer(app);

server.listen(0);
console.log(server.address().port);