import {
  setSurgeMultipler,
  disableSurge,
  requestRoutes,
  requestExpandedRoutes,
  receiveRoutesLyft,
  receiveRoutesUber,
  receiveRoutesExpanded,
  noExpandedRoutes,
  invalidRoutes
} from './index';
import {
  setMarkers,
  setExpandedMarkers,
  setExpandedCircle
} from './markers';

import {
  getCoords,
  getDirections,
  getWalkingTime
} from './googleRequests';

import axiosRequest from '../helpers/axios';

// Flags before the | indicate file location
export function fetchUber(coords) {
  return function(dispatch) {
    axiosRequest('uber', coords)
    .then(function (response) {
      // index |
      dispatch(setSurgeMultipler(response.data.surge))
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
      dispatch(setSurgeMultipler(response.data.surge))
      dispatch(receiveRoutesLyft(coords, response.data.rides));
    })
    .catch(function(err) {
      console.log(err);
      // index |
      dispatch(invalidRoutes());
    })
  }
}

export function fetchExpanded(coords) {
  return function(dispatch) {
    dispatch(disableSurge());
    dispatch(requestExpandedRoutes());
    axiosRequest('expandSearch', coords)
    .then(function (response) {
      let expandedCoords = {};
      for (let i in response.data) {
        expandedCoords[i] = {
          price: response.data[i].minPrice_coords,
          cprice: response.data[i].minPrice.display_name
        }
      }
      dispatch(setExpandedCircle(dummyResp, coords));
      // markers | Sets route markers based off expanded route information
      dispatch(setExpandedMarkers(dummyResp));
      // requests | Gets walking time from Google for each returned value
      // dispatch(getDirections(coords.start, expandedCoords.price.start));
      // index | Attaches expanded route info to the store
      let expandedRoutes = {};
      for (let i in dummyResp) {
        expandedRoutes[i] = dummyResp[i].minPrice
      }
      dispatch(receiveRoutesExpanded(expandedRoutes));
    })
    .catch(function(err) {
      console.log(err);
      // index |
      dispatch(noExpandedRoutes());
    })
  }
}


const dummyResp = {
  close: {
    radius: 250,
    minPrice: {
      product_id: "26546650-e557-4a7b-86e7-6a3942445247",
      display_name: "UberPOOL",
      duration: 780,
      distance: 3.96,
      high_estimate: 800,
      low_estimate: 700,
      avg_estimate: 750,
      price_multiplier: 1,
      eta: 120
    },
    minPrice_coords: {
      start: {
        lat: 37.7850675,
        lng: -122.3998681
      },
      end: {
        lat: 37.74773,
        lng: -122.374935
      }
    }
  },
  medium: {
    radius: 500,
    minPrice: {
      product_id: "26546650-e557-4a7b-86e7-6a3942445247",
      display_name: "UberPOOL",
      duration: 780,
      distance: 3.96,
      high_estimate: 800,
      low_estimate: 700,
      avg_estimate: 750,
      price_multiplier: 1,
      eta: 180
    },
    minPrice_coords: {
      start: {
        lat: 37.7843067,
        lng: -122.3960557
      },
      end: {
        lat: 37.74773,
        lng: -122.374935
      }
    }
  },
  far: {
    radius: 750,
    minPrice: {
      product_id: "26546650-e557-4a7b-86e7-6a3942445247",
      display_name: "UberPOOL",
      duration: 720,
      distance: 3.77,
      high_estimate: 700,
      low_estimate: 600,
      avg_estimate: 650,
      price_multiplier: 1,
      eta: 120
    },
    minPrice_coords: {
      start: {
        lat: 37.7828281,
        lng: -122.393819
      },
      end: {
        lat: 37.74773,
        lng: -122.374935
      }
    }
  }
}
