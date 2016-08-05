'use strict';

let childProcess = require('child_process');
let Bluebird = require('bluebird');
let subprocess = Bluebird.promisify(childProcess.exec, {context: childProcess});

function uberRides(coords) {
  // console.log('Hit Uber Rides: ', coords);
  //TODO: use https library instead of curl. (I had trouble with autorization headers  -john)
  const uberReq = `curl -H 'Authorization: Token ${process.env.UBER_TOKEN}' 'https://api.uber.com/v1/estimates/price?start_latitude=${coords.start.lat}&start_longitude=${coords.start.lng}&end_latitude=${coords.end.lat}&end_longitude=${coords.end.lng}'`;
  return subprocess(uberReq);
}

function uberEtas(coords) {
  // console.log('Hit Uber Etas: ', coords);
  //TODO: use https library instead of curl. (I had trouble with autorization headers  -john)
  const uberReq = `curl -H 'Authorization: Token ${process.env.UBER_TOKEN}' 'https://api.uber.com/v1/estimates/time?start_latitude=${coords.start.lat}&start_longitude=${coords.start.lng}'`;
  return subprocess(uberReq);
}

function parseUber(apiResponses) {
  var rides = JSON.parse(apiResponses[0])['prices'];
  var etas = JSON.parse(apiResponses[1])['times'];
  // console.log('ParseUber hit. Coords: ', apiResponses[2]);
  var coords = apiResponses[2];

  rides = rides.map(function(obj) {
    const out = {};
    out.product_id = obj.product_id;
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
        delete ride.product_id;
      }
    }
  }
  //Filter out rides that we weren't able to match up ETAs on (ie. UberWAV)
  rides = rides.filter((ride) => !ride.product_id);
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
