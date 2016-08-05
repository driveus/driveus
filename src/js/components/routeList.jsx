import React, { Component } from 'react';

// Components
import Route from './route.jsx';

class RouteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      0: 'uber-list-container',
      1: 'lyft-list-container',
    };
  }
  renderRoutes() {
    return this.props.routes.map((route) => {
      if (route.high_estimate) {
        let carpool = false;
        // if (route.display_name === 'uberPOOL' || route.display_name === 'Lyft Line') { carpool = true; }
        return <Route
          key={route.display_name}
          route={route}
          selectRoute={this.props.selectRoute}
          classStyle={this.props.classStyle}
          />
      }
    });
  }
  render() {
    let style = this.state[this.props.classStyle];
    return (
      <div className={style}>
        <ul>
          {this.renderRoutes()}
        </ul>
      </div>
    );
  }
}

export default RouteList
