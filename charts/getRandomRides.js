require('dotenv').config();
const cities = require('./cities.js');
const uber = require('../server/uber.js');
const lyft = require('../server/lyft.js');

function getRandomCoords(city) {
  return {start: {lat: randomLat(city.latRange), lng: randomLng(city.lngRange)},
          end: {lat: randomLat(city.latRange), lng: randomLng(city.lngRange)}
         }
}

function randomLat(latRange) {
  return Math.random() * (Math.max(...latRange) - Math.min(...latRange)) + Math.min(...latRange)
}

function randomLng(lngRange) {
  return Math.random() * (Math.max(...lngRange) - Math.min(...lngRange)) + Math.min(...lngRange)
}

function getCityRides(cityName) {
  console.log('requesting', cityName)
  coords = getRandomCoords(cities.cities[cityName]);
  uber.uberRequest(coords).then( (data) => {
    console.log('UBER:', cityName)// data.prices.filter((x)=>x.duration));
    uber.parseUber(data, false, cityName);
  });
  lyft.lyftRequest(coords).then( (data) => {
    console.log('LYFT:', cityName)// JSON.stringify(data));
    lyft.parseLyft(data, false, cityName);
  });
  //Data is now saved to the database.
}

for (let city in cities.cities) {
  getCityRides(city);
}
