// Module dependencies
const express = require('express');
const path = require('path');
// Local dependencies
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./server/routes.js')(app);

// Logs request method on every incoming request
app.use(function(req,res,next) {
  console.log('/' + req.method);
  next();
});

// Sets static asset paths for loading
app.use(express.static(path.join(__dirname, 'public')));
app.use('/spec', express.static(__dirname + '/spec'));

app.listen(port, function() {
  console.log('Listening on port ' + port + '!');
});
