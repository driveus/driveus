import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import { Router, browserHistory } from 'react-router';
// import routes from './routes';

import App from './components/app.jsx';
import reducers from './reducers';
import promise from 'redux-promise';
import css from '../sass/style.scss';

const middleWareStore = applyMiddleware(promise)(createStore);

// Provider store must be set up in order for redux data to work correctly
ReactDOM.render(
  <Provider store={middleWareStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('container')
);

/* replace <App /> with
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
