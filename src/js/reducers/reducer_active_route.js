import {
  ROUTE_SELECTED,
  ROUTE_DESELECTED
} from '../actions/types';

export default function(state={route:null,class:null}, action) {
  switch(action.type) {
    case ROUTE_SELECTED:
      return action.payload;

    case ROUTE_DESELECTED:
      return {route:null,class:null};
  }
  return state;
}
