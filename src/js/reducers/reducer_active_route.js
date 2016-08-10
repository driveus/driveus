import {
  ROUTE_SELECTED,
  ROUTE_DESELECTED
} from '../actions/types';

export default function(state={route:null,class:null}, action) {
  switch(action.type) {
    case ROUTE_SELECTED:
      console.log('A route has been selected');
      return action.payload;

    case ROUTE_DESELECTED:
      console.log('A route has been deselected');
      return {route:null,class:null};
  }
  return state;
}
