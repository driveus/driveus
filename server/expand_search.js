'use strict';
const lyft = require('./lyft.js');
const uber = require('./uber.js');
const genRadius = require('./generate_radius.js');
const Promise = require("bluebird");

function checkIfOptimalPrice(rideOptions, optimalPrice) {
  if (!optimalPrice.ride) {
    optimalPrice.ride = rideOptions.rides[0];
    optimalPrice.coords = rideOptions.coords;
  }
  rideOptions.rides.forEach((option) => {
    if (option.price_multiplier === optimalPrice.ride.price_multiplier &&
        option.avg_estimate === optimalPrice.ride.avg_estimate &&
        option.display_name !== 'UberTAXI') {
      if ((option.eta + option.duration < optimalPrice.ride.eta + optimalPrice.ride.duration ) || (option.distance < optimalPrice.ride.distance)) {
        optimalPrice.ride = option;
        optimalPrice.coords = rideOptions.coords;
      }
    }
    if (option.price_multiplier <= optimalPrice.ride.price_multiplier &&
        option.avg_estimate < optimalPrice.ride.avg_estimate &&
        option.display_name !== 'UberTAXI') {
          optimalPrice.ride = option;
          optimalPrice.coords = rideOptions.coords;
    }
  });
  return optimalPrice;
}


// Receives the user's selected starting location
function expandSearch(startCoords, radius) {
  const promiseList = [];

  return genRadius.createGeoRadius(startCoords, radius) // generates a radius of GPS points around a starting point
    .timeout(7000)
    .then((data) => {
      data.forEach((coordPair) => { // For all coordinates around starting point, generates Start and End pairs based on destination
        if (coordPair) {
          const newStartEnd = {
            start: coordPair,
            end: startCoords.end
          };
          promiseList.push(lyft.lyftRequest(newStartEnd).then(lyft.parseLyft));
          promiseList.push(uber.uberRequest(newStartEnd).then(uber.parseUber));
        }
      });
      return Promise.all(promiseList);
    })
    .catch(Promise.TimeoutError, function(err) {
      console.error("Encountered Timeout Error", err);
      return err;
    })
    .timeout(7000)
    .then((data) => {
      let optimalPrice = {};
      data.forEach((option) => optimalPrice = checkIfOptimalPrice(option, optimalPrice));
      return {
        minPrice: optimalPrice.ride || null,
        minPrice_coords: optimalPrice.coords || null,
        radius: radius
      };
    })
    .catch(Promise.TimeoutError, function(err) {
      console.error("Encountered Timeout Error", err);
      return err;
    })
    .catch((err) => {
        console.error('Some Uber or Lyft call failed', err);
    })
}

module.exports.expandSearch = expandSearch;
module.exports.checkIfOptimalPrice = checkIfOptimalPrice;
