import {
  requestRoutes,
  receiveRoutesLyft,
  receiveRoutesUber,
  setMarkers,
  invalidRoutes
} from './index';

import axios from 'axios';

export function getCoords(location) {
  return function(dispatch) {
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: location.start }, (results, status) => {
      if (status == 'OK') {
        var startCoords = {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng()
        }
        geocoder.geocode({ address: location.end }, (results, status) => {
          if (status == 'OK') {
            var endCoords = {
              lat: results[0].geometry.location.lat(),
              lng: results[0].geometry.location.lng()
            }
            var route = {
              start: startCoords,
              end: endCoords
            }
            dispatch(fetchRoutes(route));
            dispatch(setMarkers(route));
          }
        });
      }
    });
  }
}
// Insert some middleware that calculates the coords from the location??
export function fetchRoutes(coords) {
  return function(dispatch) {
    // Send initial action type flag that routes have been requested
    dispatch(requestRoutes(coords))
    Promise.all([
      axiosRequest('uber', coords),
      axiosRequest('lyft', coords)
    ])
    .then(function (response) {
      // Will likely have to structure this in a better way
      dispatch(receiveRoutesUber(coords, response[0].data))
      dispatch(receiveRoutesLyft(coords, response[1].data))
    })
    .catch(function(err) {
      console.log(err);
      dispatch(invalidRoutes());
    })
  }
}

function axiosRequest(target, coords) {
  return axios.post('/api/' + target, {
    data: coords
  });
}
