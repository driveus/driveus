import { combineReducers } from 'redux';
import RoutesReducer from './reducer_routes';
import ExpandedRoutesReducer from './reducer_expanded_routes';
import ActiveRouteReducer from './reducer_active_route';
import CurrentCoordsReducer from './reducer_current_coords';
import CurrentAddressReducer from './reducer_current_address';
import RouteMarkersReducer from './reducer_route_marker';
import RouteExpandedMarkersReducer from './reducer_expanded_marker';
import RequestRouteReducer from './reducer_request_routes';
// <<<<<<< HEAD
// import SetAddress from './reducer_current_address';
// =======
import DirectionsReducer from './reducer_directions';
import ExpandedDirectionsReducer from './reducer_expanded_directions';

const rootReducer = combineReducers({
  routes: RoutesReducer,
  expandedRoutes: ExpandedRoutesReducer,
  activeRoute: ActiveRouteReducer,
  currentCoords: CurrentCoordsReducer,
  currentAddress: CurrentAddressReducer,
  routeMarkers: RouteMarkersReducer,
  expandedMarkers: RouteExpandedMarkersReducer,
  requestRoute: RequestRouteReducer,
  directions: DirectionsReducer,
  expandedDirections: ExpandedDirectionsReducer
});

export default rootReducer;
