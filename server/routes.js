'use strict';

var lyft = require('./lyft.js');
var uber = require('./uber.js');
const db = require('./db.js');
var genRadius = require('./generate_radius.js');
var expandSearch = require('./expand_search.js');

module.exports = function(app) {
  app.all('/api/uber', function(req, res) {
    console.log('uber hit: ', req.body.data)
    let coords;
    if (req.body) {
      coords = req.body.data;
    }
    uber.uberRequest(coords)
<<<<<<< 8f818bf7fd9c701fbf1c1ed8013ce82de28936e2
    .then(function(data) {
      const parsedData = uber.parseUber(data);
      db.saveUber(parsedData);
      res.json(parsedData);
=======
    .then((data) => {
      res.json(uber.parseUber(data))
>>>>>>> [fixes] Commented code, removeds some console.logs, migrated towards es6,
    })
    .catch((err) => {
      console.log(err);
    })
  })

  app.all('/api/lyft', (req, res) => {
    console.log('lyft hit: ', req.body.data)
    let coords;
    if (req.body) {
      coords = req.body.data;
    }
    lyft.lyftRequest(coords)
<<<<<<< 8f818bf7fd9c701fbf1c1ed8013ce82de28936e2
    .then(function(data) {
      const parsedData = lyft.parseLyft(data);
      db.saveLyft(parsedData);
      res.json(parsedData);
=======
    .then((data) => {
      res.json(lyft.parseLyft(data))
>>>>>>> [fixes] Commented code, removeds some console.logs, migrated towards es6,
    })
    .catch((err) => {
      console.log(err);
    })
  })

  // Will respond with cheapest and fastest ride options based on various bearings/radius around start point
  app.all('/api/expandSearch', (req, res) => {
    let coords;
    if (req.body) {
      coords = req.body.data;
    }
    expandSearch.expandSearch(coords)
      .then((data) => {
        let optimalPrice = {};
        let optimalTime = {};
        for (let i = 0; i < data[0].length; i++) { 
          let result = uber.parseUber(data[0][i]);
          console.log('Parsed Uber Result: ', result);
          optimalPrice = expandSearch.checkIfOptimalPrice(result, optimalPrice);
          optimalTime = expandSearch.checkIfOptimalTime(result, optimalTime);
        }
        for (let j = 0; j < data[1].length; j++) {
          let result = lyft.parseLyft(data[1][j]);
          console.log('Parsed Lyft Result: ', result);
          optimalPrice = expandSearch.checkIfOptimalPrice(result, optimalPrice);
          optimalTime = expandSearch.checkIfOptimalTime(result, optimalTime);
        }
        res.json({
          minPrice: optimalPrice.ride || null,
          minPrice_coords: optimalPrice.coords || null,
          minTime: optimalTime.ride || null,
          minTime_coords: optimalTime.coords || null
        })
      })
      .catch((err) => {
        console.log('Some Uber call failed', err);
      })
  })

  app.all('/api/genRadius', function(req, res) {
    let coords;
    if (req.body) {
      coords = req.body.data;
    }
    genRadius.createGeoRadius(coords)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log('At least 1 geoRadius point failed to return');
      })
  })

};

// const dummyCoords = {
//   start: {
//     lat: 37.7905123,
//     lng: -122.3891332
//   },
//   end: {
//     lat: 37.7749,
//     lng: -122.4194
//   }
// }
