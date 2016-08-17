'use strict';
const db = require('./db.js');

function geoChart(callback) {
  db.db.run("SELECT city, COUNT(*), MAX(price_multiplier) FROM rideshist WHERE price_multiplier > 1 GROUP BY city;", (err,res) => {
    if (err) {
      console.log(err);
    }
    callback(res);
  });
}

function citiesBarChart(callback) {
  let uberData = undefined;
  let lyftData = undefined;
  let responded = false;
  db.db.run("SELECT city, AVG((high_est / distance_miles)) AS cost FROM rideshist WHERE ride_type = 'UberX' GROUP BY city ORDER BY cost;", (err, res) => {
    if (err) {
      console.log(err);
    }
    uberData = res;
    if (lyftData) {
      if (!responded) {
        responded = true;
        callback({Uber: uberData, Lyft: lyftData});
      }
    }
  });

  db.db.run("SELECT city, AVG((high_est / distance_miles)) AS cost FROM rideshist WHERE ride_type = 'Lyft' GROUP BY city ORDER BY cost;", (err, res) => {
    if (err) {
      console.log(err);
    }
    lyftData = res;
    if (uberData) {
      if (!responded) {
        responded = true;
        callback({Uber: uberData, Lyft: lyftData});
      }
    }
  });
}

module.exports.citiesBarChart = citiesBarChart;
module.exports.geoChart = geoChart;
