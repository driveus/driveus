import {
  setDirections,
  setExpandedDirectionsPrice,
  setExpandedDirectionsTime,
  setAddress,
  requestRoutes,
  receiveRoutesLyft,
  receiveRoutesUber,
  receiveRoutesExpanded,
  noExpandedRoutes,
  invalidRoutes,
} from './index';
import {
  setMarkers,
  setExpandedMarkers
} from './markers';

import axios from 'axios';
// Flags before the | indicate file location

// Gets coordinate information from string addressess
export function getCoords(location) {
  return function(dispatch) {
    // requests | Fetches google direction data for desired route
    dispatch(getDirections(location.start, location.end));
    // index | Sets current address to string value
    dispatch(setAddress(location));
    
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: location.start }, (results, status) => {
      if (status == 'OK') {
        var startCoords = {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng()
        }
        geocoder.geocode({ address: location.end }, (results, status) => {
          if (status == 'OK') {
            var endCoords = {
              lat: results[0].geometry.location.lat(),
              lng: results[0].geometry.location.lng()
            }
            var route = {
              start: startCoords,
              end: endCoords
            }
            // index | Flags program that a request is under way (no additional requests can be made)
            dispatch(requestRoutes(route));
            // requests | Fetches route information from Uber and Lyft APIs
            dispatch(fetchUber(route));
            dispatch(fetchLyft(route));
            // markers | Sets route makers based off returned route informtion
            dispatch(setMarkers(route));
          }
        });
      }
    });
  }
}

export function fetchUber(coords) {
  return function(dispatch) {
    axiosRequest('uber', coords)
    .then(function (response) {
      // index |
      dispatch(receiveRoutesUber(coords, response.data.rides));
    })
    .catch(function(err) {
      console.log(err);
      // index |
      dispatch(invalidRoutes());
    })
  }
}

export function fetchLyft(coords) {
  return function(dispatch) {
    axiosRequest('lyft', coords)
    .then(function (response) {
      // index |
      dispatch(receiveRoutesLyft(coords, response.data.rides));
    })
    .catch(function(err) {
      console.log(err);
      // index |
      dispatch(invalidRoutes());
    })
  }
}

// Fetches expanded search routes and coords
export function fetchExpanded(coords) {
  return function(dispatch) {
    axiosRequest('expandSearch', coords)
    .then(function (response) {
      let expandedCoords = {
        price: response.data.minPrice_coords,
        time: response.data.minTime_coords, 
        ctime: response.data.minTime.display_name,
        cprice: response.data.minPrice.display_name
      }
      // markers | Sets route markers based off expanded route information
      dispatch(setExpandedMarkers(expandedCoords));
      // requests | Gets walking time from Google for each returned value
      dispatch(getDirections(coords.start, expandedCoords.price.start, 'Price'));
      dispatch(getDirections(coords.start, expandedCoords.time.start, 'Time'));
      let expandedRoutes = {
        price: response.data.minPrice,
        time: response.data.minTime
      }
      // index | Attaches expanded route info to the store
      dispatch(receiveRoutesExpanded(expandedRoutes));
    })
    .catch(function(err) {
      console.log(err);
      // index |
      dispatch(noExpandedRoutes());
    })
  }
}

// Universal directions request - could be split up for better control
export function getDirections(start, end, flag=null) {
  return function (dispatch) {
    let directionsService = new google.maps.DirectionsService;
    directionsService.route({
      origin: start,
      destination: end,
      travelMode: 'WALKING'
    }, function(response, status) {
      if (status === 'OK') {
        // index | Captures expanded route walking distance data
        if (flag === 'Price') { dispatch(setExpandedDirectionsPrice(response)); }
        else if (flag === 'Time') { dispatch(setExpandedDirectionsTime(response)); }
        // index | Assigns base route directions
        else { dispatch(setDirections(response)); }
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
}

function axiosRequest(target, coords) {
  return axios.post('/api/' + target, {
    data: coords
  });
}
