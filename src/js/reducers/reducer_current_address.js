import {
  SET_ADDRESS
} from '../actions/types';

export default function (state={start:null,end:null}, action) {
  switch (action.type) {
    case SET_ADDRESS:
    console.log('Saving current address as', action.payload);
      return action.payload;
  }
  return state;
}
