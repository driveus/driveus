import React, { Component } from 'react';

// Components
import ExpandedRoute from './expandedRoute.jsx';

// Fast and Cheap images
// let time = require('../../assets/time-w-baloon.svg');
// let price = require('../../assets/price-w-baloon.svg');
// let priceTime = require('../../assets/price-time-w-baloon.svg');

class ExpandedRouteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      0: 'expanded-price',
      1: 'expanded-time'
    };
  }
  renderRoutes() {
    let routes = [];
    let key = 0;
    for (let route in this.props.routes) {
      if (this.props.routes[route] !== null) {
        routes.push(<ExpandedRoute
          key={key++}
          route={this.props.routes[route]}
          selectRoute={this.props.selectRoute}
          classStyle='expanded'
          />
        );
      }
    }
    return routes;
  }
  render() {
    let message;
    if (!this.props.message) {
      message = <p className="expanded-message">No better deals found.</p>
    }
    if (this.props.routes.close || this.props.routes.medium || this.props.routes.far) {
      message = <p className="expanded-message">Here are some potential rides near you.</p>
    }
    return (
      <div className="expanded-list">
        {message}
        <div className="expanded-routes">
          {this.renderRoutes()}
        </div>
      </div>
    );
  }
}

export default ExpandedRouteList
