'use strict';

var lyft = require('./lyft.js');
var uber = require('./uber.js');
// var genRadius = require('./generate_radius.js');
// var expandSearch = require('./expand_search.js');

module.exports = function(app) {
    //TODO:get coors from req
  app.all('/api/uber', function(req, res) {
    console.log('uber hit: ', req.body.data)
    let coords;
    if (req.body) {
      coords = req.body.data;
    }
    //This function sends the response
    uber.uberRequest(coords)
    .then(function(data) {
      res.json(uber.parseUber(data))
    })
    .catch(function(err) {
      console.log(err);
    })
  })

  app.all('/api/lyft', function(req, res) {
    //TODO:get coords from req
    console.log('lyft hit: ', req.body.data)
    let coords;
    if (req.body) {
      coords = req.body.data;
    }
    //This function sends the response
    lyft.lyftRequest(coords)
    .then(function(data) {
      res.json(lyft.parseLyft(data))
    })
    .catch(function(err) {
      console.log(err);
    })

  })

  app.all('/api/expandSearch', function(req, res) {
    console.log('Expanded Search activated', dummyCoords) // , req.body.data)
    // res.json('test');
    let coords;
    if (req.body) {
      coords = req.body.data;
    }
    //This function grabs points around a center
    expandSearch.expandSearch(dummyCoords);
      // .then(function(data) {
      //   res.json(data);
      // })
      // .catch(function(err) {
      //   console.log('At least 1 geoRadius point failed to return');
      // })
  })

  // app.all('/api/genRadius', function(req, res) {
  //   console.log('Generating Radius Of Coordinates', dummyCoords) // , req.body.data)
  //   // res.json('test');
  //   let coords;
  //   if (req.body) {
  //     coords = req.body.data;
  //   }
  //   //This function grabs points around a center
  //   genRadius.createGeoRadius(dummyCoords)
  //     .then(function(data) {
  //       res.json(data);
  //     })
  //     .catch(function(err) {
  //       console.log('At least 1 geoRadius point failed to return');
  //     })
  // })

};

const dummyCoords = {
  start: {
    lat: 37.7905123,
    lng: -122.3891332
  },
  end: {
    lat: 37.7749,
    lng: -122.4194
  }
}
