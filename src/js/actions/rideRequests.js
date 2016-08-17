import {
  setSurgeMultipler,
  disableSurge,
  requestRoutes,
  requestExpandedRoutes,
  receiveRoutesLyft,
  receiveRoutesUber,
  receiveRoutesExpanded,
  noExpandedRoutes,
  invalidRoutes
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
} from './googleRequests';

import axiosRequest from '../helpers/axios';

export function fetchUber(coords) {
  return function(dispatch) {
    axiosRequest('uber', coords)
    .then(function (response) {
      dispatch(setSurgeMultipler(response.data.surge))
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
      dispatch(setSurgeMultipler(response.data.surge))
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
    dispatch(disableSurge());
    dispatch(requestExpandedRoutes());
    axiosRequest('expandSearch', coords)
    .then(function (response) {
      dispatch(setExpandedCircle(response.data, coords));
      dispatch(setExpandedMarkers(response.data));
      let expandedRoutes = {};
      for (let i in response.data) {
        expandedRoutes[i] = response.data[i].minPrice;
        expandedRoutes[i].radius = response.data[i].radius;
      }
      dispatch(receiveRoutesExpanded(expandedRoutes));
    })
    .catch(function(err) {
      console.log(err);
      dispatch(noExpandedRoutes());
    })
  }
}
