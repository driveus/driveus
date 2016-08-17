const db = require('./db.js');

function citiesBarChart(response) {
  var uberData;
  var lyftData;
  db.db.run("SELECT city, AVG((high_est / distance_miles)) AS cost FROM rideshist WHERE ride_type = 'UberX' GROUP BY city ORDER BY cost;", (err, res) => {
    if (err) {
      console.log(err);
    }
    uberData = res;
    if (lyftData) {
      response.json({Uber: uberData, Lyft: lyftData})
    }
  });

  db.db.run("SELECT city, AVG((high_est / distance_miles)) AS cost FROM rideshist WHERE ride_type = 'Lyft' GROUP BY city ORDER BY cost;", (err, res) => {
    if (err) {
      console.log(err);
    }
    lyftData = res;
    if (lyftData) {
      response.json({Uber: uberData, Lyft: lyftData})
    }
  });
}

module.exports.citiesBarChart = citiesBarChart;
