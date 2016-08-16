'use strict';
const lyft = require('./lyft.js');
const uber = require('./uber.js');
const genRadius = require('./generate_radius.js');

function checkIfOptimalPrice(rideOptions, optimalPrice) {
  if (!optimalPrice.ride) {
    optimalPrice.ride = rideOptions.rides[0];
    optimalPrice.coords = rideOptions.coords;
  }
  // console.log('Completed Ride Options obj: ', rideOptions);
  rideOptions.rides.forEach((option) => {
    // console.log('Entered forEach block', option);
    // console.log('OPTION: ', option.display_name, ' Surge:', option.price_multiplier, ' Est:', option.avg_estimate, ' Time:',  option.eta + option.duration,  ' Coords:',  rideOptions.coords.start)
    if (option.price_multiplier === optimalPrice.ride.price_multiplier &&
        option.avg_estimate === optimalPrice.ride.avg_estimate && 
        option.display_name !== 'UberTAXI') {
      // console.log('Same multiplier and price')
      if (option.distance < optimalPrice.ride.distance) { // (option.eta + option.duration < optimalPrice.ride.eta + optimalPrice.ride.duration ) ||
        // console.log('Better distance (could add time back in)');
        optimalPrice.ride = option;
        optimalPrice.coords = rideOptions.coords;
      }
    }
    if (option.price_multiplier <= optimalPrice.ride.price_multiplier &&
        option.avg_estimate < optimalPrice.ride.avg_estimate && 
        option.display_name !== 'UberTAXI') {
          // console.log('Better/same multiplier and better price')
          optimalPrice.ride = option;
          optimalPrice.coords = rideOptions.coords;
    }
  });
  // console.log('BEST: ', 'Product:', optimalPrice.ride.display_name, ' Surge:', optimalPrice.ride.price_multiplier, ' Est:',  optimalPrice.ride.avg_estimate,  ' Time:',  optimalPrice.ride.eta + optimalPrice.ride.duration,  ' Coords:',  optimalPrice.coords.start);
  return optimalPrice;
}


// Receives the user's selected starting location
function expandSearch(startCoords, radius) {
  const promiseList = [];

  return genRadius.createGeoRadius(startCoords, radius) // generates a radius of GPS points around a starting point
    .then((data) => {
      console.log('Radius:', radius, 'data: ', data);
      data.forEach((coordPair) => { // For all coordinates around starting point, generates Start and End pairs based on destination
        const newStartEnd = {
          start: coordPair,
          end: startCoords.end
        };
        promiseList.push(lyft.lyftRequest(newStartEnd).then(lyft.parseLyft));
        promiseList.push(uber.uberRequest(newStartEnd).then(uber.parseUber));
      });
      return Promise.all(promiseList)
    })
    .then((data) => {
      let optimalPrice = {};
      data.forEach((option) => optimalPrice = checkIfOptimalPrice(option, optimalPrice));
      return {
        minPrice: optimalPrice.ride || null,
        minPrice_coords: optimalPrice.coords || null,
      };
    })
    .catch((err) => {
        console.log('Some Uber or Lyft call failed', err);
    })
}

module.exports.expandSearch = expandSearch;
module.exports.checkIfOptimalPrice = checkIfOptimalPrice;