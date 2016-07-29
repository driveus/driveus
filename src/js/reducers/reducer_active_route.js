// state is not application state, only responsible for reducer state
export default function(state=null, action) {
  switch(action.type) {
    case 'ROUTE_SELECTED':
      return action.payload;
  }
  return state;
}
