import React, { Component } from 'react';

// Components
import Controls from '../containers/controls.jsx';
import RouteLists from '../containers/routeLists.jsx';
import ActiveRoute from '../containers/activeRoute.jsx';
import MapView from '../containers/mapView.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <h1>DrivUs</h1>
        <Controls />
        <MapView />
        <ActiveRoute />
        <RouteLists />
      </div>
    );
  }
};

export default App;
