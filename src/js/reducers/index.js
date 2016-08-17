import { combineReducers } from 'redux';
import RoutesReducer from './reducer_routes';
import ExpandedRoutesReducer from './reducer_expanded_routes';
import ActiveRouteReducer from './reducer_active_route';
import CurrentCoordsReducer from './reducer_current_coords';
import CurrentAddressReducer from './reducer_current_address';
import RouteMarkersReducer from './reducer_route_marker';
import RouteExpandedMarkersReducer from './reducer_expanded_marker';
import RouteExpandedCircleReducer from './reducer_expanded_circle';
import RequestRouteReducer from './reducer_request_routes';
import DirectionsReducer from './reducer_directions';
import WalkingTimeReducer from './reducer_walking_time';
import ExpandedDirectionsReducer from './reducer_expanded_directions';
import SurgeReducer from './reducer_surge';

const rootReducer = combineReducers({
  routes: RoutesReducer,
  expandedRoutes: ExpandedRoutesReducer,
  activeRoute: ActiveRouteReducer,
  currentCoords: CurrentCoordsReducer,
  currentAddress: CurrentAddressReducer,
  routeMarkers: RouteMarkersReducer,
  expandedMarkers: RouteExpandedMarkersReducer,
  expandedCircle: RouteExpandedCircleReducer,
  requestRoute: RequestRouteReducer,
  directions: DirectionsReducer,
  walkingTime: WalkingTimeReducer,
  expandedDirections: ExpandedDirectionsReducer,
  surge: SurgeReducer,
});

export default rootReducer;
