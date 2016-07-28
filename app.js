// Module dependencies
const express = require('express');
const path = require('path');
<<<<<<< HEAD
// Local dependencies
const app = express();
const port = process.env.PORT || 3000;
=======

// Local dependencies
const app = express();
const port = process.env.PORT || 3000;
const publicPath = __dirname + '/public/';

>>>>>>> f567652e2492d3c19d64ce2fcd343f0481379036

// Logs request method on every incoming request
app.use(function(req,res,next) {
  console.log('/' + req.method);
  next();
});

// Sets static asset paths for loading
<<<<<<< HEAD
app.use(express.static(path.join(__dirname, 'public')));
app.use('/spec', express.static(__dirname + '/spec'));

=======
app.use(express.static(__dirname + '/public'));
app.use('/scripts', express.static(__dirname + '/node_modules'));
app.use('/spec', express.static(__dirname + '/spec'));

app.get('/', function(req, res) {
  res.sendFile(publicPath + 'index.html')
});

>>>>>>> f567652e2492d3c19d64ce2fcd343f0481379036
app.listen(port, function() {
  console.log('Listening on port ' + port + '!');
});
