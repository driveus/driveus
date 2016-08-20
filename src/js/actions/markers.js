import {
  SET_MARKERS,
  SET_EXPANDED_MARKERS,
  SET_EXPANDED_CIRCLE
} from './types';

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

export function setExpandedMarkers(coords) {
  let newMarkers = {};
  for (let i in coords) {
    if (coords[i]) {
      let pStart = coords[i].minPrice_coords.start;
      let path = require('../../assets/price.svg')

      let marker = new google.maps.Marker({
        position: coords[i].minPrice_coords.start,
        animation: 2,
        icon: path
      });
      newMarkers[i] = marker
    }
  }
  return {
    type: SET_EXPANDED_MARKERS,
    payload: newMarkers
  }
}
export function setExpandedCircle(currentLocation) {
  let circles = {
        close: 250,
        medium: 500,
        far: 750
      }
  for (let i in circles) {
    let circleColor;
    switch(i) {
      case 'close':
        circleColor = '#29322f';
        break;
      case 'medium':
        circleColor = '#545c5a';
        break;
      case 'far':
        circleColor = '#686d6b';
        break;
      }
    let expandedCircle = new google.maps.Circle({
      center: currentLocation.start,
      radius: circles[i]/1,
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
