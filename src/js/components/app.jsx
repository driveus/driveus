import React, { Component } from 'react';

// Components
import Header from './header.jsx';
import Controls from '../containers/controls.jsx';
import RouteLists from '../containers/routeLists.jsx';
import ActiveRoute from '../containers/activeRoute.jsx';
import MapView from '../containers/mapView.jsx';
import Footer from '../containers/footer.jsx';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Header />
        <div id="container">
          <h1 id="site-title">DriveUs</h1>
          <Controls />
          <MapView />
          <ActiveRoute />
          <RouteLists />
        </div>
        <Footer />
      </div>
    );
  }
};

export default App;
