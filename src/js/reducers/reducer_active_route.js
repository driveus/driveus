import { ROUTE_SELECTED } from '../actions/types';
import { ROUTE_DESELECTED } from '../actions/types';

// state is not application state, only responsible for reducer state
export default function(state=null, action) {
  switch(action.type) {
    case ROUTE_SELECTED:
      return action.payload;
    case ROUTE_DESELECTED:
      return action.payload;
  }
  return state;
}
