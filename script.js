var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// http://expressjs.com/en/starter/basic-routing.html
app.get('/home', function(request, response) {
  response.sendFile(__dirname + '/views/home.html');
});

// http://expressjs.com/en/starter/basic-routing.html
app.get('/terms', function(request, response) {
  response.sendFile(__dirname + '/views/terms.html');
});

// http://expressjs.com/en/starter/basic-routing.html
app.get('/application', function(request, response) {
  response.sendFile(__dirname + '/views/application.html');
});

// http://expressjs.com/en/starter/basic-routing.html
app.get('/contact', function(request, response) {
  response.sendFile(__dirname + '/views/contact.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});