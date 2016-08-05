'use strict';

let rp = require('request-promise');

function uberRides(coords) {
  console.log('Hit Uber Rides: ', coords);
  let options = {
    uri: `https://api.uber.com/v1/estimates/price?start_latitude=${coords.start.lat}&start_longitude=${coords.start.lng}&end_latitude=${coords.end.lat}&end_longitude=${coords.end.lng}`,
    headers: {
      'Authorization': `Token ${process.env.UBER_TOKEN}`
    },
    json: true
  }
  return rp(options)
}

function uberEtas(coords) {
  console.log('Hit Uber Etas: ', coords);
  let options = {
    uri: `https://api.uber.com/v1/estimates/time?start_latitude=${coords.start.lat}&start_longitude=${coords.start.lng}`,
    headers: {
      'Authorization': `Token ${process.env.UBER_TOKEN}`
    },
    json: true
  }
  return rp(options)
}

function parseUber(apiResponses) {
  console.log('apiResponse', apiResponses);
  var rides = apiResponses[0]['prices'];
  var etas = apiResponses[1]['times'];
  // console.log('ParseUber hit. Coords: ', apiResponses[2]);
  var coords = apiResponses[2];

  rides = rides.map(function(obj) {
    const out = {};
    out.product_id = obj["product_id"];
    out.display_name = obj['display_name'];// === 'POOL' : 'uberPOOL';
    out.duration = obj['duration'];
    out.distance = obj['distance'];
    out.high_estimate = obj['high_estimate'] * 100;
    out.low_estimate = obj['low_estimate'] * 100;
    out.avg_estimate = ((obj['high_estimate'] + obj['low_estimate']) * 100 / 2);
    out.price_multiplier = obj['surge_multiplier'];
    return out;
  });
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
  console.log('Hit ParseUber: ', rides);
  return {
    rides: rides,
    coords: coords
  };
}

function uberRequest(coords) {
  // console.log('uberRequest details triggered: ', coords);
  const rides = uberRides(coords);
  const etas = uberEtas(coords);

  return Promise.all([rides, etas, coords]);
}




module.exports.parseUber = parseUber;
module.exports.uberRequest = uberRequest;
