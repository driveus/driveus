import {
  SET_DIRECTIONS,
} from '../actions/types';

export default function (state=null, action) {
  switch (action.type) {
    case SET_DIRECTIONS:
    console.log('Got new directions', action.payload);
      return action.payload;
  }
  return state;
}
