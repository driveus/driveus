import React, { Component } from 'react';

import Controls from '../containers/controls.jsx';
import RouteLists from '../containers/routeLists.jsx';
import ActiveRoute from '../containers/activeRoute.jsx';
import MapView from '../containers/mapView.jsx';

class App extends Component {

  render() {
    return (
      <div id="wrapper">
        <div id="container">
          <Controls />
          <ActiveRoute />
          <div className="information-view">
            <RouteLists />
            <MapView />
          </div>
        </div>
      </div>
    );
  }
};

export default App;
