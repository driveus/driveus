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
            dispatch(fetchUber(route));
            dispatch(fetchLyft(route));
            dispatch(setMarkers(route));
          }
        });
      }
    });
  }
}
// Insert some middleware that calculates the coords from the location??
export function fetchUber(coords) {
  return function(dispatch) {
    // Send initial action type flag that routes have been requested
    axiosRequest('uber', coords)
      .then(function (response) {
        // Will likely have to structure this in a better way
        dispatch(receiveRoutesUber(coords, response.data[0]))
      })
      .catch(function(err) {
        console.log(err);
        dispatch(invalidRoutes());
      })
  }
}

export function fetchLyft(coords) {
  return function(dispatch) {
    // Send initial action type flag that routes have been requested
    axiosRequest('lyft', coords)
      .then(function (response) {
        // Will likely have to structure this in a better way
        dispatch(receiveRoutesLyft(coords, response.data[0]))
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
