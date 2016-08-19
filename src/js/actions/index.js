import {
  SET_DIRECTIONS,
  SET_WALKING_TIME,
  SET_ADDRESS,
  SET_SURGE,
  DISABLE_SURGE,
  ROUTE_SELECTED,
  ROUTE_DESELECTED,
  REQUEST_ROUTES,
  REQUEST_EXPANDED_ROUTES,
  RECEIVE_ROUTES_UBER,
  RECEIVE_ROUTES_LYFT,
  RECEIVE_EXPANDED_ROUTES,
  NO_EXPANDED_ROUTES,
  INVALID_ROUTES
} from './types';

export function setDirections(directions) {
  return {
    type: SET_DIRECTIONS,
    payload: directions
  }
}
export function setWalkingTime(directions) {
  return {
    type: SET_WALKING_TIME,
    payload: directions
  }
}

export function setAddress(address) {
  return {
    type: SET_ADDRESS,
    payload: address
  };
}
export function setSurgeMultipler(surge) {
  return {
    type: SET_SURGE,
    payload: surge
  }
}
export function disableSurge() {
  return {
    type: DISABLE_SURGE
  }
}

export function selectRoute(route) {
  return {
    type: ROUTE_SELECTED,
    payload: route
  };
}

export function deselectRoute() {
  return {
    type: ROUTE_DESELECTED,
  };
}

export function requestRoutes(coords) {
  return {
    type: REQUEST_ROUTES
  }
}
export function requestExpandedRoutes(coords) {
  return {
    type: REQUEST_EXPANDED_ROUTES
  }
}

export function receiveRoutesUber(coords, data) {
  let routes = data.sort(function(a,b) {
    return a.avg_estimate - b.avg_estimate;
  });
  return {
    type: RECEIVE_ROUTES_UBER,
    coords: coords,
    routes: routes
  }
}
export function receiveRoutesLyft(coords, data) {
  let routes = data.sort(function(a,b) {
    return a.avg_estimate - b.avg_estimate;
  });
  return {
    type: RECEIVE_ROUTES_LYFT,
    coords: coords,
    routes: routes
  }
}

export function receiveRoutesExpanded(routes, name) {
  return {
    type: RECEIVE_EXPANDED_ROUTES,
    routes: routes,
    name: name
  }
}

export function noExpandedRoutes() {
  return {
    type: NO_EXPANDED_ROUTES
  }
}

export function invalidRoutes() {
  return {
    type: INVALID_ROUTES
  }
}
