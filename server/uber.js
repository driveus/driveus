let childProcess = require('child_process');
let Bluebird = require('bluebird');
let subprocess = Bluebird.promisify(childProcess.exec, {context: childProcess});

function uberRides(coords) {
  console.log('Hit Uber Rides: ', coords);
  //TODO: use https library instead of curl. (I had trouble with autorization headers  -john)
  const uberReq = `curl -H 'Authorization: Token ${process.env.UBER_TOKEN}' 'https://api.uber.com/v1/estimates/price?start_latitude=${coords.start.lat}&start_longitude=${coords.start.lng}&end_latitude=${coords.end.lat}&end_longitude=${coords.end.lng}'`;
  return subprocess(uberReq);
}

function uberEtas(coords) {
  console.log('Hit Uber Etas: ', coords);
  //TODO: use https library instead of curl. (I had trouble with autorization headers  -john)
  const uberReq = `curl -H 'Authorization: Token ${process.env.UBER_TOKEN}' 'https://api.uber.com/v1/estimates/time?start_latitude=${coords.start.lat}&start_longitude=${coords.start.lng}'`;
  return subprocess(uberReq);
}

function parseUber(apiResponses) {
  console.log('ParseUber hit');
  var rides = JSON.parse(apiResponses[0])['prices'];
  var etas = JSON.parse(apiResponses[1])['times'];

  rides = rides.map(function(obj) {
    out = {};
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
  rides = rides.filter((ride) => !ride.product_id);
  console.log('Hit ParseUber: ', rides);
  return rides;
}

function uberRequest(coords) {
  console.log('uberRequest details triggered: ', coords);
  const rides = uberRides(coords);
  const etas = uberEtas(coords);

  return Promise.all([rides, etas]);
}




module.exports.parseUber = parseUber;
module.exports.uberRequest = uberRequest;
