import { combineReducers } from 'redux';
import RoutesReducer from './reducer_routes';
import ActiveRouteReducer from './reducer_active_route';
import CurrentLocationReducer from './reducer_current_location';
import RouteMarkersReducer from './reducer_route_marker';

const rootReducer = combineReducers({
  routes: RoutesReducer,
  activeRoute: ActiveRouteReducer,
  currentLocation: CurrentLocationReducer,
  routeMarkers: RouteMarkersReducer
});

export default rootReducer;
