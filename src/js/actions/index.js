export const ROUTE_SELECTED = 'ROUTE_SELECTED';
export function selectRoute(route) {
  // selectRoute is an ActionCreator
  // it needs to return an action and object with type prop
  console.log('A route has been selected:', route);
  return {
    type: ROUTE_SELECTED,
    payload: route
  };
}
// React promise looks cool
export const FETCH_ROUTES = 'FETCH_ROUTES';
export function fetchRoutes(location) {
  // post location to server
  console.log(location);
  // axios.post('/location', {
  //   data: location
  // })
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });

  return {
    type: FETCH_ROUTES,
    payload: location
  }
}
