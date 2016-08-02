let childProcess = require('child_process');
let Bluebird = require('bluebird')
let subprocess = Bluebird.promisify(childProcess.exec, {context: childProcess});
let lyftToken;


function generateToken() {
  //TODO: use https library instead of curl. (I had trouble with autorization headers  -john)
  const lyftReq = `curl -X POST -H "Content-Type: application/json" --user "${process.env.LYFT_ID}:${process.env.LYFT_SECRET}" -d '{"grant_type": "client_credentials", "scope": "public"}' 'https://api.lyft.com/oauth/token'`;
  subprocess(lyftReq).then(function(resp) {
    lyftToken = JSON.parse(resp)['access_token'];
  })
  .catch(function(e) {
    console.log(e);
  })
}

generateToken();
//Token expires every hour
setInterval(generateToken, 3000000);

function lyftRides(coords) {
  //TODO: use https library instead of curl. (I had trouble with autorization headers  -john)
  const lyftReq = `curl -X GET -H 'Authorization: Bearer ${lyftToken}' 'https://api.lyft.com/v1/cost?start_lat=${coords[0]}&start_lng=${coords[1]}&end_lat=${coords[2]}&end_lng=${coords[3]}'`;
  return subprocess(lyftReq);
}

function lyftEtas(coords) {
  //TODO: use https library instead of curl. (I had trouble with autorization headers  -john)
  const lyftReq = `curl -X GET -H 'Authorization: Bearer ${lyftToken}' 'https://api.lyft.com/v1/eta?lat=${coords[0]}&lng=${coords[1]}'`
  return subprocess(lyftReq);
}

function parseLyft(rides, etas) {
  // console.log(rides);
  // console.log(etas);
  rides = rides.map(function(obj) {
    out = {};
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
  // console.log("PARSED:", rides);
  return rides;
}

function lyftRequest(coords = [37.7874963, -122.4020974, 37.787933, -122.4096868], res) {
  const rides = lyftRides(coords);
  const etas = lyftEtas(coords);
  let etasResponse;
  let ridesResponse;

  //wait for both promises. When second one returns, send data to parseLyft function
  rides.then(function(apiResp) {
    apiResp = JSON.parse(apiResp)['cost_estimates'];
    if (etasResponse) {
      res.json(parseLyft(apiResp, etasResponse));
    }
    else {
      ridesResponse = apiResp;
    }
  });

  etas.then(function(apiResp) {
    apiResp = JSON.parse(apiResp)['eta_estimates'];
    if (ridesResponse) {
      res.json(parseLyft(ridesResponse, apiResp));
    }
    else {
      etasResponse = apiResp;
    }
  })
}





module.exports.lyftRequest = lyftRequest;