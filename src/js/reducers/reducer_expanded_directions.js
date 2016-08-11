import {
  SET_EXPANDED_DIRECTIONS_TIME,
  SET_EXPANDED_DIRECTIONS_PRICE,
  RECEIVE_ROUTES_UBER,
  RECEIVE_ROUTES_LYFT
} from '../actions/types';

export default function (state={price:null,time:null}, action) {
  switch (action.type) {
    case SET_EXPANDED_DIRECTIONS_TIME:
      return Object.assign({}, state, {
        time: action.payload
      });
    case SET_EXPANDED_DIRECTIONS_PRICE:
      return Object.assign({}, state, {
        price: action.payload
      });
    case RECEIVE_ROUTES_UBER:
    case RECEIVE_ROUTES_LYFT:
      return {price:null,time:null}
  }
  return state;
}
