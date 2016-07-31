import { combineReducers } from 'redux';
import RoutesReducer from './reducer_routes';
import ActiveRoute from './reducer_active_route';
import CurrentLocation from './reducer_current_location';

const rootReducer = combineReducers({
  routes: RoutesReducer,
  activeRoute: ActiveRoute,
  currentLocation: CurrentLocation
});

export default rootReducer;
