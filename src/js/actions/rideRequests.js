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
  getWalkingTime,
  getExpandedWalkingTime
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
      if (!Object.keys(response.data).length) {
        dispatch(noExpandedRoutes());
      }
      else {
        dispatch(setExpandedCircle(coords));
        dispatch(setExpandedMarkers(response.data));
        dispatch(getExpandedWalkingTime(response.data, coords));
      }
    })
    .catch(function(err) {
      console.log(err);
    })
  }
}
