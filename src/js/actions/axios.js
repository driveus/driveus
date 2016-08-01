import {
  requestRoutes,
  receiveRoutesLyft,
  receiveRoutesUber,
  invalidRoutes
} from './index';

import axios from 'axios';

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
      // Error message needs work, probably doesn't work
      if (!response) { dispatch(invalidRoutes()); }
      // Will likely have to structure this in a better way
      dispatch(receiveRoutesUber(coords, response[0].data))
      dispatch(receiveRoutesLyft(coords, response[1].data))
    });
  }
}

function axiosRequest(target, coords) {
  return axios.post('/api/' + target, {
    data: coords
  });
}
