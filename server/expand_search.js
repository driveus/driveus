var lyft = require('./lyft.js');
var uber = require('./uber.js');
var genRadius = require('./generate_radius.js')

function checkIfOptimalPrice(rideOptions, optimalPrice) {
  if (!optimalPrice.ride) {
    // console.log('Assigned default', optimalPrice);
    optimalPrice.ride = rideOptions.rides[0]
    optimalPrice.coords = rideOptions.coords
  }
  rideOptions.rides.forEach(function(option) {
    // console.log('Option: ', option);
    // console.log('Current Min Price: ', optimalPrice);
    if (option.avg_estimate < optimalPrice.ride.avg_estimate && option.display_name !== 'UberTAXI') {
      optimalPrice.ride = option;
      optimalPrice.coords = rideOptions.coords
    }
  })
  console.log('CURRENT BEST OPTIMAL: ', optimalPrice);
  return optimalPrice
}

function checkIfOptimalTime(rideOptions, optimalTime) {
  if (!optimalTime.ride) {
    optimalTime.ride = rideOptions.rides[0]
    optimalTime.coords = rideOptions.coords
  }
  rideOptions.rides.forEach(function(option) {
    if ((option.duration + option.eta) < (optimalTime.ride.duration + optimalTime.ride.eta)  && option.display_name !== 'uberTAXI') {
      optimalTime.ride = option;
      optimalTime.coords = rideOptions.coords;
    }
  })
  return optimalTime
}

function expandSearch(startCoords) {
  console.log('FOUND EXPAND SEARCH!')
  var currentMinPrice;
  var currentMinTime;
  var uberPromiseList = [];
  var lyftPromiseList = [];

  return genRadius.createGeoRadius(startCoords)
    .then(function(data) {
      console.log('Initial Results: ', data);

      data.forEach(function(coordPair) {
        console.log('Testing: ', coordPair);
        var newStartEnd = {
          start: coordPair,
          end: startCoords.end
        }
        uberPromiseList.push(uber.uberRequest(newStartEnd))
        lyftPromiseList.push(lyft.lyftRequest(newStartEnd))
      })

      return Promise.all([Promise.all(uberPromiseList), Promise.all(lyftPromiseList)]);
    })
    .catch(function(err) {
      console.log('Testing CoordPair error', err)
    })
}


module.exports.expandSearch = expandSearch;
module.exports.checkIfOptimalPrice = checkIfOptimalPrice;
module.exports.checkIfOptimalTime = checkIfOptimalTime;
