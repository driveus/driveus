'use strict';

var lyft = require('./lyft.js');
var uber = require('./uber.js');
// var genRadius = require('./generate_radius.js');
// var expandSearch = require('./expand_search.js');

module.exports = function(app) {
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
    let coords;
    if (req.body) {
      coords = req.body.data;
    }
    expandSearch.expandSearch(dummyCoords)
      .then(function(data) {
        // console.log('Expanded Search response data: ', data);
        var optimalPrice = {};
        var optimalTime = {};
        // console.log('Uber Promise List', data);
        for (var i = 0; i < data[0].length; i++) {
          var result = uber.parseUber(data[0][i]);
          console.log('Parsed Uber Result: ', result);
          optimalPrice = expandSearch.checkIfOptimalPrice(result, optimalPrice);
          optimalTime = expandSearch.checkIfOptimalTime(result, optimalTime);
        }
        for (var j = 0; j < data[1].length; j++) {
          var result = lyft.parseLyft(data[1][j]);
          console.log('Parsed Lyft Result: ', result);
          optimalPrice = expandSearch.checkIfOptimalPrice(result, optimalPrice);
          optimalTime = expandSearch.checkIfOptimalTime(result, optimalTime);
        }
        res.json({
          minPrice: optimalPrice.ride,
          minPrice_coords: optimalPrice.coords || null,
          minTime: optimalTime.ride,
          minTime_coords: optimalTime.coords || null
        })
      })
      .catch(function(err) {
        console.log('Some Uber call failed', err);
      })
  

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
