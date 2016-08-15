import {
  SET_DIRECTIONS,
  SET_WALKING_TIME,
  SET_EXPANDED_DIRECTIONS_PRICE,
  SET_EXPANDED_DIRECTIONS_TIME,
  SET_ADDRESS,
  SET_SURGE,
  DISABLE_SURGE,
  ROUTE_SELECTED,
  ROUTE_DESELECTED,
  REQUEST_ROUTES,
  RECEIVE_ROUTES_UBER,
  RECEIVE_ROUTES_LYFT,
  RECEIVE_EXPANDED_ROUTES,
  NO_EXPANDED_ROUTES,
  INVALID_ROUTES
} from './types';

// setDirections -> reducer_directions
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
// setExpandedDirectionsPrice -> reducer_expanded_directions
export function setExpandedDirectionsPrice(directions) {
  return {
    type: SET_EXPANDED_DIRECTIONS_PRICE,
    payload: directions.routes[0].legs[0]
  }
}
// setExpandedDirectionsTime -> reducer_expanded_directions
export function setExpandedDirectionsTime(directions) {
  return {
    type: SET_EXPANDED_DIRECTIONS_TIME,
    payload: directions.routes[0].legs[0]
  }
}
// setAddress -> reducer_current_address
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
// selectRoute -> reducer_active_route
export function selectRoute(route) {
  return {
    type: ROUTE_SELECTED,
    payload: route
  };
}
// deselectRoute -> reducer_active_route
export function deselectRoute() {
  return {
    type: ROUTE_DESELECTED,
  };
}
// requestRoutes -> reducer_routes,
                 // reducer_request_routes,
                 // reducer_expanded_routes
export function requestRoutes(coords) {
  return {
    type: REQUEST_ROUTES
  }
}
// receiveRoutesUber && receiveRoutesLyft ->
      // reducer_routes,
      // reducer_request_routes,
      // reducer_expanded_routes
      // reducer_expanded_marker,
      // reducer_expanded_directions,
      // reducer_current_coords
export function receiveRoutesUber(coords, data) {
  return {
    type: RECEIVE_ROUTES_UBER,
    coords: coords,
    routes: data
  }
}
export function receiveRoutesLyft(coords, data) {
  return {
    type: RECEIVE_ROUTES_LYFT,
    coords: coords,
    routes: data
  }
}
// receiveRoutesExpanded -> reducer_expanded_routes
export function receiveRoutesExpanded(routes) {
  return {
    type: RECEIVE_EXPANDED_ROUTES,
    routes: routes
  }
}
// noExpandedRoutes -> reducer_expanded_routes
export function noExpandedRoutes() {
  return {
    type: NO_EXPANDED_ROUTES
  }
}
// invalidRoutes -> reducer_routes
export function invalidRoutes() {
  return {
    type: INVALID_ROUTES
  }
}