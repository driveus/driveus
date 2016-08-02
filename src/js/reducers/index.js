import { combineReducers } from 'redux';
import RoutesReducer from './reducer_routes';
import ActiveRouteReducer from './reducer_active_route';
import CurrentLocationReducer from './reducer_current_location';

const rootReducer = combineReducers({
  routes: RoutesReducer,
  activeRoute: ActiveRouteReducer,
  currentLocation: CurrentLocationReducer
});

export default rootReducer;
