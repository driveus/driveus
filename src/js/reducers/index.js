import { combineReducers } from 'redux';
import RoutesReducer from './reducer_routes';
import ExpandedRoutesReducer from './reducer_expanded_routes';
import ActiveRouteReducer from './reducer_active_route';
import CurrentLocationReducer from './reducer_current_location';
import RouteMarkersReducer from './reducer_route_marker';
import RouteExpandedMarkersReducer from './reducer_route_marker';
import RequestRouteReducer from './reducer_request_routes';
import CurrentAddressReducer from './reducer_curr_address';

const rootReducer = combineReducers({
  routes: RoutesReducer,
  expandedRoutes: ExpandedRoutesReducer,
  activeRoute: ActiveRouteReducer,
  currentLocation: CurrentLocationReducer,
  routeMarkers: RouteMarkersReducer,
  expandedMarkers: RouteExpandedMarkersReducer,
  requestRoute: RequestRouteReducer,
  currentAddress: CurrentAddressReducer
});

export default rootReducer;
