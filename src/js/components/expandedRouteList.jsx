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
      let eprice = this.props.routes;
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
      let style = {padding: '5px'};
      message = <span style={style}>No better deals found</span>
    }
    return (
      <div className="expanded-routes">
          {message}
          {this.renderRoutes()}
      </div>
    );
  }
}

export default ExpandedRouteList
