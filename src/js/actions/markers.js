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
  let newMarkers = {};

  for (let data in coords) {
    let pStart = coords.price.start;
    let tStart = coords.time.start;
    let path = (pStart.lat === tStart.lat &&
                pStart.lng === tStart.lng &&
                coords.cTime === coords.cPrice) ?
                require('../../assets/price-time.svg') :
               (data === 'price') ?
                require('../../assets/price.svg') :
                require('../../assets/time.svg');

    let marker = new google.maps.Marker({
      position: coords[data].start,
      animation: 2,
      icon: path
    });
    newMarkers[data] = marker
  }
  return {
    type: SET_EXPANDED_MARKERS,
    payload: newMarkers
  }
}
