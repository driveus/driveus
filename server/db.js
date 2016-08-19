'use strict';

const massive = require('massive');
const db = massive.connectSync({connectionString: process.env.DB_CONNSTRING});

//Save the parsed array of ride objects to the 'uberhist' database
function saveUber(parsedData, isExpandedSearch, city) {
  for (let ride of parsedData.rides) {
    //throw out invalid rides
    if (!ride.duration || !ride.eta) {
      continue;
    }
    const queryObj = {ride_type: ride.display_name,
                      duration: secondsToHMS(ride.duration),
                      low_est: ride.low_estimate/100,
                      high_est: ride.high_estimate/100,
                      eta: secondsToHMS(ride.eta),
                      price_multiplier: ride.price_multiplier,
                      start_lat: parsedData.coords.start.lat,
                      start_lng: parsedData.coords.start.lng,
                      end_lat: parsedData.coords.end.lat,
                      end_lng: parsedData.coords.end.lng,
                      distance_miles: ride.distance,
                      expanded_search: isExpandedSearch,
                      city: city
                     };

    db.uberhist.save(queryObj, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
}

//save the parsed array of rides to the 'lyfthist' database
function saveLyft(parsedData, isExpandedSearch, city) {
  for (let ride of parsedData.rides) {
    const queryObj = {ride_type: ride.display_name,
                      duration: secondsToHMS(ride.duration),
                      low_est: ride.low_estimate/100,
                      high_est: ride.high_estimate/100,
                      eta: secondsToHMS(ride.eta),
                      price_multiplier: ride.price_multiplier,
                      start_lat: parsedData.coords.start.lat,
                      start_lng: parsedData.coords.start.lng,
                      end_lat: parsedData.coords.end.lat,
                      end_lng: parsedData.coords.end.lng,
                      distance_miles: ride.distance,
                      expanded_search: isExpandedSearch,
                      city: city
                     };

    db.lyfthist.save(queryObj, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
}

//Convert a number of seconds to hh:mm:ss format
function secondsToHMS(seconds) {
  const hours = Math.floor(seconds/3600);
  const minutes = Math.floor((seconds - hours * 3600) / 60);
  const second = seconds % 60;
  const hourStr = parseInt(hours).length === 1 ? "0" + parseInt(hours) : parseInt(hours);
  const minuteStr = parseInt(minutes).length === 1 ? "0" + parseInt(minutes) : parseInt(minutes);
  const secondStr = parseInt(second).length === 1 ? "0" + parseInt(second) : parseInt(second);
  return `${hourStr}:${minuteStr}:${secondStr}`;
}

module.exports.db = db;
module.exports.saveUber = saveUber;
module.exports.saveLyft = saveLyft;
