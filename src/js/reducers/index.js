import { combineReducers } from 'redux';
import RoutesReducer from './reducer_routes.js';

const rootReducer = combineReducers({
  routes: RoutesReducer
});

export default rootReducer;
