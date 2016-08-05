import {
  setAddress,
  requestRoutes,
  receiveRoutesLyft,
  receiveRoutesUber,
  receiveRoutesExpanded,
  noExpandedRoutes,
  invalidRoutes,
  getCurrAddress
} from './index';
import {
  setMarkers,
  setExpandedMarkers
} from './markers';

import axios from 'axios';

export function getCoords(location) {
  return function(dispatch) {
    console.log('This is the format of the location', location)
    dispatch(getCurrAddress(location));
    dispatch(setAddress(location));
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
      dispatch(receiveRoutesUber(coords, response.data));
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
      dispatch(receiveRoutesLyft(coords, response.data));
    })
    .catch(function(err) {
      console.log(err);
      dispatch(invalidRoutes());
    })
  }
}

export function fetchExpanded(coords) {
  // ==TEMP==============
  dispatch(noExpandedRoutes());
  return;
  // ====================
  return function(dispatch) {
    axiosRequest('expand', coords)
    .then(function (response) {
      console.log(response);
      dispatch(receiveRoutesExpanded(coords, response.data));
    })
    .catch(function(err) {
      console.log(err);
      dispatch(noExpandedRoutes());
    })
  }
}

function axiosRequest(target, coords) {
  return axios.post('/api/' + target, {
    data: coords
  });
}
