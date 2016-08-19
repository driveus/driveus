'use strict';
const db = require('./db.js');

function geoChart(callback) {
  db.db.run("SELECT city, COUNT(*), MAX(price_multiplier) FROM rideshist WHERE price_multiplier > 1 GROUP BY city;", (err,res) => {
    if (err) {
      console.error(err);
    }
    callback(res);
  });
}

function scatterChart(callback) {
  db.db.run("SELECT start_lat, start_lng, (EXTRACT (HOUR FROM time)), high_est::numeric, price_multiplier FROM rideshist WHERE price_multiplier > 1;", (err,res) => {
    if (err) {
      console.error(err);
    }
    callback(res);
  });
}

function columnChart(callback) {
  let uberData = undefined;
  let lyftData = undefined;
  let responded = false;
  db.db.run("SELECT city, AVG((high_est::numeric / distance_miles)) AS cost FROM rideshist WHERE ride_type = 'UberX' GROUP BY city ORDER BY cost;", (err, res) => {
    if (err) {
      console.error(err);
    }
    uberData = res;
    if (lyftData) {
      if (!responded) {
        responded = true;
        callback({Uber: uberData, Lyft: lyftData});
      }
    }
  });

  db.db.run("SELECT city, AVG((high_est::numeric / distance_miles)) AS cost FROM rideshist WHERE ride_type = 'Lyft' GROUP BY city ORDER BY cost;", (err, res) => {
    if (err) {
      console.error(err);
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

module.exports.columnChart = columnChart;
module.exports.geoChart = geoChart;
module.exports.scatterChart = scatterChart;
