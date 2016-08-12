import React, { Component } from 'react';

// Components
import Controls from '../containers/controls.jsx';
import RouteLists from '../containers/routeLists.jsx';
import ActiveRoute from '../containers/activeRoute.jsx';
import MapView from '../containers/mapView.jsx';

class App extends Component {
  
  render() {
    return (
      <div id="wrapper">
        <div id="container">
          <h1 id="site-title">Hi Amol</h1>
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
