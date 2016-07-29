import { combineReducers } from 'redux';
import RoutesReducer from './reducer_routes.js';
import ActiveRoute from './reducer_active_route';

const rootReducer = combineReducers({
  routes: RoutesReducer,
  activeRoute: ActiveRoute
});

export default rootReducer;
