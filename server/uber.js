'use strict';
const db = require('./db.js');
const rp = require('request-promise');

//Input start & end coordinates, output a promise that will return Uber ride info
function uberRides(coords) {
  const options = {
    uri: `https://api.uber.com/v1/estimates/price?start_latitude=${coords.start.lat}&start_longitude=${coords.start.lng}&end_latitude=${coords.end.lat}&end_longitude=${coords.end.lng}`,
    headers: {
      'Authorization': `Token ${process.env.UBER_TOKEN}`
    },
    json: true
  };
  return rp(options);
}

//Input start & end coordinates, output a promise that will return Uber car ETAs
function uberEtas(coords) {
  const options = {
    uri: `https://api.uber.com/v1/estimates/time?start_latitude=${coords.start.lat}&start_longitude=${coords.start.lng}`,
    headers: {
      'Authorization': `Token ${process.env.UBER_TOKEN}`
    },
    json: true
  };
  return rp(options);
}

//Input Uber's responses from the rides & etas API calls, output an array
// of ride options with all relevant properties combined from the two calls.

function parseUber(apiResponses, isExpandedSearch) {
  isExpandedSearch = isExpandedSearch === undefined ? true : false;
  let rides = apiResponses[0].prices;
  let surgeCount = 0;
  let surge = false;
  const etas = apiResponses[1].times;
  const coords = apiResponses[2];

  rides = rides.map((obj) => {
    const ride = {};
    ride.product_id = obj.product_id;
    ride.display_name = obj.display_name.replace(/^(uber)?/i, 'Uber');
    ride.duration = obj.duration;
    ride.distance = obj.distance;
    ride.high_estimate = obj.high_estimate * 100;
    ride.low_estimate = obj.low_estimate * 100;
    ride.avg_estimate = ((obj.high_estimate + obj.low_estimate) * 100 / 2);
    ride.price_multiplier = obj.surge_multiplier;
    if (ride.display_name === 'POOL') { ride.display_name = 'UberPOOL'; }
    if (ride.display_name === 'UberPOOL' || ride.display_name === 'UberX') {
      if (ride.price_multiplier > 1) { surgeCount++; }
    }
    return ride;
  });
  if (surgeCount > 1) {
    surge = true;
  }
  //add the ETA to the corresponding object
  for (let eta of etas) {
    for (let ride of rides) {
      if (eta.product_id === ride.product_id) {
        ride.eta = eta.estimate;
      }
    }
  }
  //Filter out rides that we weren't able to match up ETAs on (ie. UberWAV)
  rides = rides.filter((ride) => !ride.display_name.match(/(ASSIST|UberWAV)/i));
 
  //*********TESTING AND PRESENTATION ONLY***********
  //Make "Ferry Building Marketplace" always have a surge multiplier
  if (coords.start.lat === 37.7955805 && coords.start.lng === -122.39341109999998) {
    for (let ride of rides) {
      ride.price_multiplier = 1.8;
      ride.high_estimate *= 1.8;
    }

  }
  //*********END OF HARDCODED SURGE MULTIPLIER ******

  const results = {rides: rides, coords: coords, surge: surge};
  db.saveUber(results, isExpandedSearch);
  return results;
}

function uberRequest(coords) {
  const rides = uberRides(coords);
  const etas = uberEtas(coords);

  return Promise.all([rides, etas, coords]);
}

module.exports.parseUber = parseUber;
module.exports.uberRequest = uberRequest;
