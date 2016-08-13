import {
  SET_ADDRESS
} from '../actions/types';

export default function (state={start:null,end:null}, action) {
  switch (action.type) {
    case SET_ADDRESS:
      return action.payload;
  }
  return state;
}
