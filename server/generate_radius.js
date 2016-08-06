var rp = require("request-promise");

Number.prototype.toRad = function() {
  return this * Math.PI / 180;
}

Number.prototype.toDeg = function() {
  return this * 180 / Math.PI;
}

function createPointOnRadius(startPoint, bearing, dist) {
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
  const newLat = lat2.toDeg()
  const newLng = lng2.toDeg()
  return {lat: newLat, lng: newLng};
}

function reverseGeoCode(geoPoint) {
  const baseUrl = 'https://maps.googleapis.com/maps/api/geocode/json';
  const googlekey = process.env.GOOGLE_KEY;
  const lat = geoPoint.lat;
  const lng = geoPoint.lng;

  var options = {
    uri: `${baseUrl}?latlng=${lat},${lng}&key=${googlekey}`,
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true
  }
  return rp(options).then(function(resp){
    return resp.results[0].geometry.location
  })
}

function createGeoRadius(coords) {
  const startPoint = coords.start
  const radius = .25;  // 1km

  const promiseList = [];
  const bearings = [0, 45, 90, 135, 180, 225, 270, 315];
  bearings.forEach(function(bearing) {
    var newPoint = createPointOnRadius(startPoint, bearing, radius)
    promiseList.push(reverseGeoCode(newPoint))
  });
  return Promise.all(promiseList)

}

module.exports.createGeoRadius = createGeoRadius;





/*
var map = new google.maps.Map(document.getElementById("map"), mapOpt);

var mapOpt = {
   // mapTypeId: google.maps.MapTypeId.TERRAIN,
   center: pointA,
   zoom: 13
};

// Draw the circle
new google.maps.Circle({
   center: pointA,
   radius: radius * 1000,       // Convert to meters
   fillColor: '#FF0000',
   fillOpacity: 0.2,
   map: map
});

// Show marker at circle center
new google.maps.Marker({
   position: pointA,
   map: map
});

locations.forEach(function(location) {
   new google.maps.Marker({
      position: location,
      map: map
   });

})

*/
