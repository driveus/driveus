let childProcess = require('child_process');
let Bluebird = require('bluebird');
let subprocess = Bluebird.promisify(childProcess.exec, {context: childProcess});

function uberRides(coords) {
  //TODO: use https library instead of curl. (I had trouble with autorization headers  -john)
  const uberReq = `curl -H 'Authorization: Token ${process.env.UBER_TOKEN}' 'https://api.uber.com/v1/estimates/price?start_latitude=${coords.start.lat}&start_longitude=${coords.start.lng}&end_latitude=${coords.end.lat}&end_longitude=${coords.end.lng}'`;
  return subprocess(uberReq);
}

function uberEtas(coords) {
  //TODO: use https library instead of curl. (I had trouble with autorization headers  -john)
  const uberReq = `curl -H 'Authorization: Token ${process.env.UBER_TOKEN}' 'https://api.uber.com/v1/estimates/time?start_latitude=${coords.start.lat}&start_longitude=${coords.start.lng}'`;
  return subprocess(uberReq);
}

function parseUber(rides, etas) {
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

function uberRequest(coords = { start: { lat: 37.7873057, lng: -122.39937120000002 },
  end: { lat: 37.79030300000001, lng: -122.42877299999998 } }, res) {
  const rides = uberRides(coords);
  const etas = uberEtas(coords);
  let etasResponse;
  let ridesResponse;

  //wait for both promises. When second one returns, send data to parseLyft function
  rides.then(function(apiResp) {
    apiResp = JSON.parse(apiResp)['prices'];
    if (etasResponse) {
      res.json(parseUber(apiResp, etasResponse));
    }
    else {
      ridesResponse = apiResp;
    }
  });

  etas.then(function(apiResp) {
    apiResp = JSON.parse(apiResp)['times'];
    if (ridesResponse) {
      res.json(parseUber(ridesResponse, apiResp));
    }
    else {
      etasResponse = apiResp;
    }
  })
}





module.exports.uberRequest = uberRequest;