import {
  setDirections,
  setAddress,
  requestRoutes,
  receiveRoutesLyft,
  receiveRoutesUber,
  receiveRoutesExpanded,
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
    dispatch(getDirections(location));
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
      dispatch(receiveRoutesUber(coords, response.data.rides));
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
      dispatch(receiveRoutesLyft(coords, response.data.rides));
    })
    .catch(function(err) {
      console.log(err);
      dispatch(invalidRoutes());
    })
  }
}

export function fetchExpanded(coords) {
  return function(dispatch) {
    axiosRequest('expandSearch', coords)
    .then(function (response) {
      let expandedCoords = {
        price: response.data.minPrice_coords,
        time: response.data.minTime_coords, 
        ctime: response.data.minTime.display_name,
        cprice: response.data.minPrice.display_name
      }
      // dispatch(getExpandedDirections(expandedCoords.price));
      // dispatch(getExpandedDirections(expandedCoords.time));
      dispatch(setExpandedMarkers(expandedCoords));
      let expandedRoutes = {
        price: response.data.minPrice,
        time: response.data.minTime
      }
      dispatch(receiveRoutesExpanded(expandedRoutes));
    })
    .catch(function(err) {
      console.log(err);
      dispatch(noExpandedRoutes());
    })
  }
}

export function getDirections(location) {
  return function (dispatch) {
    let directionsService = new google.maps.DirectionsService;
    directionsService.route({
      origin: location.start,
      destination: location.end,
      travelMode: 'WALKING'
    }, function(response, status) {
      if (status === 'OK') {
        dispatch(setDirections(response));
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
}

function axiosRequest(target, coords) {
  return axios.post('/api/' + target, {
    data: coords
  });
}
