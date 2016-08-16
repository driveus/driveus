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

  for (let data in coords) {
    let pStart = coords.price.start;
    // let tStart = coords.time.start;
    // let path = (pStart.lat === tStart.lat &&
    //             pStart.lng === tStart.lng &&
    //             coords.cTime === coords.cPrice) ?
    //             require('../../assets/price-time.svg') :
    //            (data === 'price') ?
    //             require('../../assets/price.svg') :
    //             require('../../assets/time.svg');

    let path = require('../../assets/price.svg');
    var goldStar = {
          path: 'M278.767,145.419c-3.126-4.003-7.276-6.006-12.451-6.006c-4.591,0-7.716,0.879-9.375,2.637c-1.662,1.758-5.226,6.445-10.693,14.063c-5.47,7.617-11.744,14.502-18.823,20.654c-7.082,6.152-16.53,12.012-28.345,17.578c-7.91,3.712-13.429,6.738-16.553,9.082c-3.126,2.344-4.688,6.006-4.688,10.986c0,4.298,1.586,8.082,4.761,11.353c3.172,3.273,6.812,4.907,10.913,4.907c8.592,0,25.292-9.521,50.098-28.564V335.41c0,7.814,1.806,13.722,5.42,17.725c3.612,4.003,8.397,6.006,14.355,6.006c13.378,0,20.068-9.814,20.068-29.443V161.972C283.455,154.941,281.892,149.425,278.767,145.419z',
          fillColor: 'yellow',
          fillOpacity: 0.8,
          scale: 1,
          strokeColor: 'gold',
          strokeWeight: 14
        };

    let marker = new google.maps.Marker({
      position: coords[data].start,
      animation: 2,
      icon: goldStar
    });
    newMarkers[data] = marker
  }
  return {
    type: SET_EXPANDED_MARKERS,
    payload: newMarkers
  }
}
export function setExpandedCircle(coord, radius) {
  let expandedCircle = new google.maps.Circle({
    center: coord,
    radius: radius/1,
    fillColor: '#FF0000',
    fillOpacity: 0.2,
  });
  return {
    type: SET_EXPANDED_CIRCLE,
    payload: expandedCircle
  }
}