import {
  SET_MARKERS,
  SET_EXPANDED_MARKERS
} from './types';

export function setMarkers(coords) {
  let newMarkers = {};
  newMarkers.start = new google.maps.Marker({
    position: coords.start,
    animation: 2
  });
  newMarkers.end = new google.maps.Marker({
    position: coords.end,
    animation: 2
  });
  return {
    type: SET_MARKERS,
    payload: newMarkers
  }
}
export function setExpandedMarkers(coords) {
  let newMarkers = {},
      priceMarker,
      timeMarker;
  if (coords.price) {
    priceMarker = new google.maps.Marker({
      position: coords['price'].start,
      animation: 2,
      icon: 'http://www.googlemapsmarkers.com/v1/426d7d/'
    });
  }
  if (coords.time) {
    timeMarker = new google.maps.Marker({
      position: coords['time'].start,
      animation: 2,
      icon: 'http://www.googlemapsmarkers.com/v1/279a80/'
    });
  }
      newMarkers.price = priceMarker;
      newMarkers.time = timeMarker;
  return {
    type: SET_EXPANDED_MARKERS,
    payload: newMarkers
  }
}
