import {
  SET_MARKERS,
  SET_EXPANDED_MARKERS
} from './types';

export function setMarkers(coords) {
  let markers = [];
  markers.push(new google.maps.Marker({
    position: coords.start,
    animation: 2
  }));
  markers.push(new google.maps.Marker({
    position: coords.end,
    animation: 2
  }));
  return {
    type: SET_MARKERS,
    payload: markers
  }
}
export function setExpandedMarkers(coords) {
  let markers = [];
  // style the markers or something?
  markers.push(new google.maps.Marker({
    position: coords.start,
    animation: 2
  }));
  markers.push(new google.maps.Marker({
    position: coords.end,
    animation: 2
  }));
  return {
    type: SET_EXPANDED_MARKERS,
    payload: markers
  }
}
