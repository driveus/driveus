export function selectRoute(route) {
  // selectRoute is an ActionCreator
  // it needs to return an action and object with type prop
  console.log('A route has been selected:', route);
  return {
    type: 'ROUTE_SELECTED',
    payload: route
  };
}
