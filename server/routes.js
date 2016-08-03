var lyft = require('./lyft.js');
var uber = require('./uber.js');


module.exports = function(app) {
    //TODO:get coors from req
  app.all('/api/uber', function(req, res) {
    console.log('uber hit: ', req.body.data)
    let coords;
    if (req.body) {
      coords = req.body.data;
    }
    //This function sends the response
    uber.uberRequest(coords, res);
  })

  app.all('/api/lyft', function(req, res) {
    //TODO:get coords from req
    console.log('lyft hit: ', req.body.data)
    let coords;
    if (req.body) {
      coords = req.body.data;
    }
    //This function sends the response
    lyft.lyftRequest(coords, res);
  })
};