'use strict';

const rp = require("request-promise");

Number.prototype.toRad = function() {
  return this * Math.PI / 180;
};

Number.prototype.toDeg = function() {
  return this * 180 / Math.PI;
};

// Returns a new lat/lng pair at a specific bearing and distance (radius) from a starting point
function createPointOnRadius(startPoint, bearing, dist) {
  if (!startPoint || typeof bearing !== 'number' || typeof dist !== 'number') {
    return 'Invalid Input(s)';
  }
  dist = dist / 6371;
  bearing = bearing.toRad();
  const lat1 = startPoint.lat.toRad();
  const lng1 = startPoint.lng.toRad();
  const lat2 = Math.asin(Math.sin(lat1) * Math.cos(dist) + Math.cos(lat1) * Math.sin(dist) * Math.cos(bearing));
  const lng2 = lng1 + Math.atan2(
                      Math.sin(bearing) * Math.sin(dist) * Math.cos(lat1),
                      Math.cos(dist) - Math.sin(lat1) * Math.sin(lat2)
                    );

  if (isNaN(lat2) || isNaN(lng2)) return null;
  const newLat = lat2.toDeg();
  const newLng = lng2.toDeg();
  return {lat: newLat, lng: newLng};
}

// Accepts a lat/lng pair and checks for closest valid point on land
function reverseGeoCode(geoPoint) {
  if (!geoPoint) {
    return 'Undefined or Null input';
  }
  const baseUrl = 'https://maps.googleapis.com/maps/api/geocode/json';
  const googlekey = process.env.GOOGLE_KEY;
  const lat = geoPoint.lat;
  const lng = geoPoint.lng;
  const options = {
    uri: `${baseUrl}?latlng=${lat},${lng}&key=${googlekey}`,
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true
  };
  return rp(options)
          .then((resp) => {
            return resp.results[0].geometry.location;
          })
          .catch((err) => {
            console.log(err);
            return 'Reversing Geocode Failed';
          });
}

// Accepts a starting lat/lng and generates valid lat/lng coordinates at each bearing
function createGeoRadius(coords, searchRadius) {
  const startPoint = coords.start;
  const radius = searchRadius/1000;  // Converts meters to km
  // const promiseList = [];
  // Creates promiseList array and instantiates with the validated start point
  let promiseList = [reverseGeoCode(createPointOnRadius(startPoint, 0, 0))];
  // const bearings = [0, 45, 90, 135, 180, 225, 270, 315];
  const bearings = [0, 90, 180, 270];
  bearings.forEach((bearing) => {
    let newPoint = createPointOnRadius(startPoint, bearing, radius);
    promiseList.push(reverseGeoCode(newPoint));
  });
  return Promise.all(promiseList);

}

module.exports.createGeoRadius = createGeoRadius;
module.exports.createPointOnRadius = createPointOnRadius;
module.exports.reverseGeoCode = reverseGeoCode;
