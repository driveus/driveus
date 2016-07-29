const ROUTE_SELECTED = 'ROUTE_SELECTED';
export function selectRoute(route) {
  // selectRoute is an ActionCreator
  // it needs to return an action and object with type prop
  console.log('A route has been selected:', route);
  return {
    type: ROUTE_SELECTED,
    payload: route
  };
}
// use Axios ?!?? npm install --save axios
// React promise looks cool
export const FETCH_ROUTES = 'FETCH_ROUTES';
export function fetchRoutes(location) {

  // post location to server
  return {
    type: FETCH_ROUTES,
    payload: request
  }
}
