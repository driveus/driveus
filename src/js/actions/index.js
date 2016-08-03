import {
  ROUTE_SELECTED,
  ROUTE_DESELECTED,
  REQUEST_ROUTES,
  RECEIVE_ROUTES_UBER,
  RECEIVE_ROUTES_LYFT,
  RECEIVE_EXPANDED_ROUTES,
  NO_EXPANDED_ROUTES,
  INVALID_ROUTES
} from './types';

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
export function receiveRoutesExpanded(coords, data) {
  return {
    type: RECEIVE_EXPANDED_ROUTES,
    coords: coords,
    routes: data
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
