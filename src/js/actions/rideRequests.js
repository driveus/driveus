import {
  setSurgeMultipler,
  requestRoutes,
  receiveRoutesLyft,
  receiveRoutesUber,
  receiveRoutesExpanded,
  noExpandedRoutes,
  invalidRoutes,
} from './index';
import {
  setMarkers,
  setExpandedMarkers,
  setExpandedCircle
} from './markers';

import {
  getCoords,
  getDirections,
  getWalkingTime
} from './googleRequests'

import axiosRequest from '../helpers/axios';
// Flags before the | indicate file location

export function fetchUber(coords) {
  return function(dispatch) {
    axiosRequest('uber', coords)
    .then(function (response) {
      // index |
      dispatch(setSurgeMultipler(response.data.surge))
      dispatch(receiveRoutesUber(coords, response.data.rides));
    })
    .catch(function(err) {
      console.log(err);
      // index |
      dispatch(invalidRoutes());
    })
  }
}

export function fetchLyft(coords) {
  return function(dispatch) {
    axiosRequest('lyft', coords)
    .then(function (response) {
      // index |
      dispatch(setSurgeMultipler(response.data.surge))
      dispatch(receiveRoutesLyft(coords, response.data.rides));
    })
    .catch(function(err) {
      console.log(err);
      // index |
      dispatch(invalidRoutes());
    })
  }
}

export function fetchExpanded(coords, radius) {
  var payload = {
    coords: coords,
    radius: radius
  }
  return function(dispatch) {
    axiosRequest('expandSearch', payload)
    .then(function (response) {
      let expandedCoords = {
        price: response.data.minPrice_coords,
        cprice: response.data.minPrice.display_name
        // time: response.data.minTime_coords,
        // ctime: response.data.minTime.display_name,
      }
      // markers | Sets route markers based off expanded route information
      dispatch(setExpandedMarkers(expandedCoords));
      // requests | Gets walking time from Google for each returned value
      dispatch(getDirections(coords.start, expandedCoords.price.start, 'Price'));
      // dispatch(getDirections(coords.start, expandedCoords.time.start, 'Time'));
      let expandedRoutes = {
        price: response.data.minPrice,
        // time: response.data.minTime
      }
      // index | Attaches expanded route info to the store
      dispatch(receiveRoutesExpanded(expandedRoutes));
    })
    .catch(function(err) {
      console.log(err);
      // index |
      dispatch(noExpandedRoutes());
    })
  }
}
