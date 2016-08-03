import {
  ROUTE_SELECTED,
  ROUTE_DESELECTED
} from '../actions/types';

// state is not application state, only responsible for reducer state
export default function(state={route:null,class:null}, action) {
  switch(action.type) {
    case ROUTE_SELECTED:
      console.log('A route has been selected:', action.payload);
      return action.payload;

    case ROUTE_DESELECTED:
      console.log('A route has been deselected');
      return {route:null,class:null};
  }
  return state;
}
