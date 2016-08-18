import {
  SET_MARKERS,
  SET_EXPANDED_MARKERS,
  SET_EXPANDED_CIRCLE
} from './types';

// setMarkers -> reducer_route_marker
export function setMarkers(coords) {
  let newMarkers = {};
  newMarkers.start = new google.maps.Marker({
    position: coords.start,
    label: 'A'
  });
  newMarkers.end = new google.maps.Marker({
    position: coords.end,
    label: 'B'
  });
  return {
    type: SET_MARKERS,
    payload: newMarkers
  }
}
// setExpandedMarkers -> reducer_expanded_marker
export function setExpandedMarkers(coords) {
  let newMarkers = {};
  for (let i in coords) {
    let pStart = coords[i].minPrice_coords.start;
    let path = require('../../assets/price-far.svg')
    let marker = new google.maps.Marker({
      position: coords[i].minPrice_coords.start,
      animation: 2,
      icon: path
    });
    newMarkers[i] = marker
  }
  return {
    type: SET_EXPANDED_MARKERS,
    payload: newMarkers
  }
}
export function setExpandedCircle(coords, start) {
  let circles = {};
  for (let i in coords) {
    let circleColor;
    switch(i) {
      case 'close':
        circleColor = '#2b4cf8';
        break;
      case 'medium':
        circleColor = '#2196f3';
        break;
      case 'far':
        circleColor = '#03a9f4';
        break;
      }
    let expandedCircle = new google.maps.Circle({
      center: start.start,
      radius: coords[i].radius/1,
      fillColor: circleColor,
      fillOpacity: 0.3,
      strokeWeight: 0
    });
    circles[i] = expandedCircle;
  }
  return {
    type: SET_EXPANDED_CIRCLE,
    payload: circles
  }
}
