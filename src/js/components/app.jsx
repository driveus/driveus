import React, { Component } from 'react';

// Components
import Controls from './controls.jsx';
import RouteLists from '../containers/routeLists.jsx';
import ActiveRoute from '../containers/activeRoute.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <div>Jor / Luber / ABRoute</div>
        <Controls getLocation={this.submitLocation} />
        <div className="map-display">Omg its a map</div>
        <ActiveRoute />
        <RouteLists />
      </div>
    );
  }
};

export default App;
