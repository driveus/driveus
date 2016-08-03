import { combineReducers } from 'redux';
import RoutesReducer from './reducer_routes';
import ActiveRouteReducer from './reducer_active_route';
import CurrentLocationReducer from './reducer_current_location';
import RouteMarkersReducer from './reducer_route_marker';
import RequestRouteReducer from './reducer_request_routes';

const rootReducer = combineReducers({
  routes: RoutesReducer,
  activeRoute: ActiveRouteReducer,
  currentLocation: CurrentLocationReducer,
  routeMarkers: RouteMarkersReducer,
  requestRoute: RequestRouteReducer
});

export default rootReducer;
