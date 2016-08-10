import React, { Component } from 'react';

// Components
import Route from './route.jsx';

class RouteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uber: 'uber-list-container',
      lyft: 'lyft-list-container',
    };
  }
  renderRoutes() {
    // Div formatting including carpool disclaimer for certain services
    return this.props.routes.map((route) => {
      if (route.high_estimate) {
        let carpool = false;
        if (route.display_name === 'UberPOOL' || route.display_name === 'Lyft Line') { carpool = true; }
        return <Route
          key={route.display_name}
          route={route}
          selectRoute={this.props.selectRoute}
          classStyle={this.props.classStyle}
          carpool={carpool}
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
