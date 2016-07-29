import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/app.jsx';
import reducers from './reducers';
import css from '../sass/style.scss';

const store = createStore(reducers);

// Provider store must be set up in order for redux data to work correctly
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container')
);
