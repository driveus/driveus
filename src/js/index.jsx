import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
// import { Router, browserHistory } from 'react-router';
// import routes from './routes';

import App from './components/app.jsx';
import reducers from './reducers';
import thunk from 'redux-thunk';
import css from '../sass/style.scss';

// Required for using react-thunk middleware that allows for multiple dispatches in one action
// const middleWareStore = applyMiddleware(thunk, promise)(createStore);
const finalStore = createStore(reducers, {}, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));
// Provider store must be set up in order for redux data to work correctly
ReactDOM.render(
  <Provider store={finalStore}>
    <App />
  </Provider>,
  document.getElementById('app')
);

/* ROUTING STUFF - probably unnecessary
  replace <App /> with
  <Router history={browserHistory} routes={routes} />
 make new file -> routes.js

 import React from 'react';
 import { Route, IndexRoute } from 'react-router'

 import App from './components/app'

** Routing components are nestable - neat **
 export default (
 <Route path="/" component={App}>
  <Route path="/home" component={...} />
 </Route>
);
include {this.props.children} ????

cache-control via express ??
*/
