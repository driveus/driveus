import {
  setDirections,
  setWalkingTime,
  setAddress,
  requestRoutes,
  receiveRoutesExpanded,
} from './index';

import {
  fetchUber,
  fetchLyft
} from './rideRequests';

import { setMarkers } from './markers';

// Gets coordinate information from string addressess
export function getCoords(location) {
  return function(dispatch) {
    dispatch(getDirections(location.start, location.end));
    dispatch(getWalkingTime(location.start, location.end));
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

// Universal directions request - could be split up for better control
export function getDirections(start, end) {
  return function (dispatch) {
    let directionsService = new google.maps.DirectionsService;
    directionsService.route({
      origin: start,
      destination: end,
      travelMode: 'DRIVING'
    }, function(response, status) {
      if (status === 'OK') {
        dispatch(setDirections(response));
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
}

export function getWalkingTime(start, end) {
  return function (dispatch) {
    let directionsService = new google.maps.DirectionsService;
    directionsService.route({
      origin: start,
      destination: end,
      travelMode: 'WALKING'
    }, function(response, status) {
      if (status === 'OK') {
        dispatch(setWalkingTime(response));
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
}

export function getExpandedWalkingTime(routes, startLocation) {
  return function (dispatch) {
    for (let i in routes) {
      console.log(routes, routes[i], startLocation)
    let directionsService = new google.maps.DirectionsService;
    directionsService.route({
      origin: startLocation.start,
      destination: routes[i].minPrice_coords.start,
      travelMode: 'WALKING'
    }, function(response, status) {
      if (status === 'OK') {
        routes[i].walkTime = response.routes[0].legs[0].duration;
        dispatch(receiveRoutesExpanded(routes[i], i));
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
    }
  }
}

export function coordsToAddress(cb) {
  let geocoder = new google.maps.Geocoder,
  currentLocation;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      geocoder.geocode({
        'location': {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      }, (results, status) => {
        if (status === 'OK') {
          cb(results[0].formatted_address);
        } else {
          window.alert('No results found');
        }
      });
    });
  }
  else {
    alert('Current Location not supported for this browser.');
  }
}
