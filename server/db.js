'use strict';

const massive = require('massive');
const db = massive.connectSync({connectionString: process.env.DB_CONNSTRING});

function saveUber(parsedData, isExpandedSearch) {
  for (let ride of parsedData.rides) {
    const queryObj = {ride_type: ride.display_name,
                      duration: '00:' + Math.floor(ride.duration/60) + ':' + (ride.duration%60),
                      low_est: ride.low_estimate/100,
                      high_est: ride.high_estimate/100,
                      eta: '00:' + Math.floor(ride.eta/60) + ':' + (ride.duration%60),
                      price_multiplier: ride.price_multiplier,
                      start_lat: parsedData.coords.start.lat,
                      start_lng: parsedData.coords.start.lng,
                      end_lat: parsedData.coords.end.lat,
                      end_lng: parsedData.coords.end.lng,
                      distance_miles: ride.distance,
                      expanded_search: isExpandedSearch
                     };
    if (queryObj.eta === '00:NaN:0' || queryObj.duration === '00:NaN:0') {
      console.log('Failed to save:', queryObj);
      break;
    }
    db.uberhist.save(queryObj, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
}

function saveLyft(parsedData, isExpandedSearch) {
  for (let ride of parsedData.rides) {
    const queryObj = {ride_type: ride.display_name,
                      duration: '00:' + Math.floor(ride.duration/60) + ':' + (ride.duration%60),
                      low_est: ride.low_estimate/100,
                      high_est: ride.high_estimate/100,
                      eta: '00:' + Math.floor(ride.eta/60) + ':' + (ride.duration%60),
                      price_multiplier: ride.price_multiplier,
                      start_lat: parsedData.coords.start.lat,
                      start_lng: parsedData.coords.start.lng,
                      end_lat: parsedData.coords.end.lat,
                      end_lng: parsedData.coords.end.lng,
                      distance_miles: ride.distance,
                      expanded_search: isExpandedSearch
                     };

    db.lyfthist.save(queryObj, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
}
module.exports.db = db;
module.exports.saveUber = saveUber;
module.exports.saveLyft = saveLyft;
