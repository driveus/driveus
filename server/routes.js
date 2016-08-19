'use strict';
const analytics = require('./analytics_api.js')
const lyft = require('./lyft.js');
const uber = require('./uber.js');
const genRadius = require('./generate_radius.js');
const expandSearch = require('./expand_search.js');
const express = require('express');
const router = express.Router();
const twilio_SID = "ACe98e01d0fea8ebb54402edd1abc0e724";  //No longer active,
const twilio_token = "fae8053ee7a58761e3fdfa2ce8331aec";  // was for testing only
const client = require('twilio')(twilio_SID,twilio_token);

module.exports = function(app) {
  //Responds with array of Uber ride info
  app.all('/api/uber', (req, res) => {
    let coords;
    if (req.body) {
      coords = req.body.data;
    }
    //This function sends the response
    uber.uberRequest(coords)
    .then(function(data) {
      res.json(uber.parseUber(data));
    })
    .catch((err) => {
      console.error(err);
    });
  });

  //Responds with array of Lyft ride info
  app.all('/api/lyft', (req, res) => {
    let coords;
    if (req.body) {
      coords = req.body.data;
    }
    //This function sends the response
    lyft.lyftRequest(coords)
    .then((data) => {
      res.json(lyft.parseLyft(data));
    })
    .catch((err) => {
      console.error(err);
    });
  });

// Will respond with cheapest and fastest ride options based on various bearings/radius around start point
  app.all('/api/expandSearch', (req, res) => {
    let coords;
    let resultObj = {};
    let unresolvedPromises = [];
    let radii = [
      ['center', 0],
      ['close', 250],
      ['medium', 500],
      ['far', 750]
    ];
    if (req.body) {
      coords = req.body.data;
    }
    radii.forEach((radius) => {
      unresolvedPromises.push(expandSearch.expandSearch(coords, radius[1]))
    })
    Promise.all(unresolvedPromises)
      .then((promises) => {
        for (let i = 1; i < promises.length; i++) {
          if (Object.keys(resultObj).length === 0) {
            if (promises[0].minPrice.price_multiplier > promises[i].minPrice.price_multiplier ||
                promises[0].minPrice.avg_estimate - promises[i].minPrice.avg_estimate >= 100) {
                  resultObj[radii[i][0]] = promises[i];
            }
          } else {
            let shouldAdd = true;
            for (let result in resultObj) {
              if (resultObj[result].minPrice.price_multiplier <= promises[i].minPrice.price_multiplier &&
                  resultObj[result].minPrice.avg_estimate - promises[i].minPrice.avg_estimate < 100) {
                    shouldAdd = false;
              }
            }
            if (shouldAdd) {
              resultObj[radii[i][0]] = promises[i];
            };
          }
        }
        res.json(resultObj);
      })
      .catch((err) => {
        console.error('Some Uber or Lyft call failed:', err);
      })
  });

  app.all('/sms', (req, res) => {
    const rideData = req.body;
    client.messages.create({
        to: "+13347440981",
        from: "+14082146873",
        body: req.body.data
      }, function(err, message) {
        if (err) { console.error(err); }
    })
  });

  app.all('/charts/column', (req, res) => {
    analytics.columnChart((data) => {
      res.json(data)
      .catch((err) => {
        console.error(err);
      });
    });
  });

  app.all('/charts/geo', (req, res) => {
    analytics.geoChart((data) => {
      res.json(data)
      .catch((err) => {
        console.error(err);
      });
    });
  });

  app.all('/charts/scatter', (req, res) => {
    analytics.scatterChart((data) => {
      res.json(data)
      .catch((err) => {
        console.error(err);
      });
    });
  });
}


const dummyCoords = {
  start: {
    lat: 37.795,
    lng: -122.395
  },        
  end: {
    lat: 37.74773,
    lng: -122.374935
  }
}
