import { ROUTE_SELECTED } from './types';
import { ROUTE_DESELECTED } from './types';
import { FETCH_ROUTES } from './types';

export function selectRoute(route) {
  // selectRoute is an ActionCreator
  // it needs to return an action and object with type prop
  console.log('A route has been selected:', route);
  return {
    type: ROUTE_SELECTED,
    payload: route
  };
}
export function deselectRoute() {
  console.log('A route has been deselected');
  return {
    type: ROUTE_DESELECTED,
    payload: null
  };
}
// React promise looks cool
export function fetchRoutes(location) {
  // post location to server
  console.log(location);
  axios.post('/api/uber', {
    data: 123
  })
  .then(function (response) {
    console.log(response);
  });
  axios.post('/api/lyft', {
    data: 123
  })
  .then(function (response) {
    console.log(response);
  });

  return {
    type: FETCH_ROUTES,
    payload: location
  };
}
