import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// Stylesheets
import css from '../sass/style.scss';

// Components
const Controls = require('./components/controls.jsx');

class App extends Component {
  render() {
    return (
      <div>
        <div>Jor / Luber / ABRoute</div>
        <Controls />
      </div>
    );
  }
};

module.exports = App;

ReactDOM.render(<App />, document.getElementById('container'));
