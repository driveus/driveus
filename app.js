// Module dependencies
const express = require('express');
const path = require('path');
if(process.env.NODE_ENV !== 'production') {
  const dotenv = require('dotenv').config();
}
const bodyParser = require('body-parser');
// Local dependencies
const app = express();
if(process.env.NODE_ENV === 'production') {
  app.use(forceSsl);
}
const port = process.env.PORT || 3000;
const config = require('./webpack.config.js');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');


function forceSsl(req, res, next) {
   if (req.headers['x-forwarded-proto'] !== 'https') {
       return res.redirect(['https://', req.get('Host'), req.url].join(''));
   }
   return next();
};

// Webpack in dev mode - Hot reloading
const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler,
  {
    noInfo: true,
    lazy: false,
    watchOptions: {
      aggregateTimeout: 300,
      poll: true
    }
  }
));
app.use(webpackHotMiddleware(compiler));


//Request parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const routes = require('./server/routes.js')(app);

// Logs request method on every incoming request
app.use(function(req,res,next) {
  console.log('/' + req.method);
  next();
});

// Sets static asset paths for loading
app.use(express.static(path.join(__dirname, 'public')));
app.use('/charts', express.static(__dirname + '/charts'));

app.listen(port, function() {
  console.log('Listening on port ' + port + '!');
});
