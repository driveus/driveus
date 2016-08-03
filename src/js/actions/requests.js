import {
  requestRoutes,
  receiveRoutesLyft,
  receiveRoutesUber,
  noExpandedRoutes,
  invalidRoutes
} from './index';
import {
  setMarkers,
  setExpandedMarkers
} from './markers';

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
            dispatch(requestRoutes(route));
            dispatch(fetchUber(route));
            dispatch(fetchLyft(route));
            dispatch(setMarkers(route));
          }
        });
      }
    });
  }
}

export function fetchUber(coords) {
  return function(dispatch) {
    axiosRequest('uber', coords)
    .then(function (response) {
      dispatch(receiveRoutesUber(coords, response.data))
    })
    .catch(function(err) {
      console.log(err);
      dispatch(invalidRoutes());
    })
  }
}

export function fetchLyft(coords) {
  return function(dispatch) {
    axiosRequest('lyft', coords)
    .then(function (response) {
      dispatch(receiveRoutesLyft(coords, response.data))
    })
    .catch(function(err) {
      console.log(err);
      dispatch(invalidRoutes());
    })
  }
}

export function fetchExpanded(coords) {
  // rebuild for real data
  return function(dispatch) {
    dispatch(noExpandedRoutes());
  }
}

function axiosRequest(target, coords) {
  return axios.post('/api/' + target, {
    data: coords
  });
}
