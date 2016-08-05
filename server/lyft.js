'use strict';

const db = require('./db.js');
let rp = require('request-promise');
let lyftToken;

function generateToken() {
  let authorziation = new Buffer(process.env.LYFT_ID + ':' + process.env.LYFT_SECRET).toString('base64');
  let options = {
    method: 'POST',
    uri: 'https://api.lyft.com/oauth/token',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${authorziation}`
    },
    body: {
      grant_type: "client_credentials",
      scope: "public",
    },
    json: true
  }
  return rp(options)
  .then(function(resp) {
    lyftToken = resp['access_token'];
  })
  .catch(function(err) {
    console.log(err);
  })
}

generateToken();
//Token expires every hour
setInterval(generateToken, 3000000);

function lyftRides(coords) {
  let options = {
    uri: `https://api.lyft.com/v1/cost?start_lat=${coords.start.lat}&start_lng=${coords.start.lng}&end_lat=${coords.end.lat}&end_lng=${coords.end.lng}`,
    headers: {
      'Authorization': `Bearer ${lyftToken}`
    },
    json: true
  }
  return rp(options);
}

function lyftEtas(coords) {
  let options = {
    uri: `https://api.lyft.com/v1/eta?lat=${coords.start.lat}&lng=${coords.start.lng}`,
    headers: {
      'Authorization': `Bearer ${lyftToken}`
    },
    json: true
  }
  return rp(options);

}

function parseLyft(apiResponses) {
  var rides = JSON.parse(apiResponses[0])['cost_estimates'];
  var etas = JSON.parse(apiResponses[1])['eta_estimates'];
  var coords = apiResponses[2];

  rides = rides.map(function(obj) {
    const out = {};
    out.display_name = obj.display_name;
    out.duration = obj['estimated_duration_seconds'];
    out.distance = obj['estimated_distance_miles'];
    out.high_estimate = obj['estimated_cost_cents_max'];
    out.low_estimate = obj['estimated_cost_cents_min'];
    out.avg_estimate = ((obj['estimated_cost_cents_max'] + obj['estimated_cost_cents_min']) / 2);
    out.price_multiplier = 1 + (parseFloat(obj.primetime_percentage) / 100);
    return out;
  });
  //add the ETA to the corresponding object
  for (let eta of etas) {
    for (let ride of rides) {
      if (eta.display_name === ride.display_name) {
        ride.eta = eta.eta_seconds;
      }
    }
  }
  // console.log('Lyft Rides: ', rides);
  return {
    rides: rides,
    coords: coords
  };
}

function lyftRequest(coords) {
  const rides = lyftRides(coords);
  const etas = lyftEtas(coords);

  return Promise.all([rides, etas, coords]);
}



module.exports.parseLyft = parseLyft;
module.exports.lyftRequest = lyftRequest;
