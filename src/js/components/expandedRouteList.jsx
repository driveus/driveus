import React, { Component } from 'react';

// Components
import Route from './route.jsx';

// Fast and Cheap images
let time = require('../../assets/time-w-baloon.svg');
let price = require('../../assets/price-w-baloon.svg');
let priceTime = require('../../assets/price-time-w-baloon.svg');

class ExpandedRouteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      0: 'expanded-price',
      1: 'expanded-money'
    };
  }
  renderRoutes() {
    let routes = [];
    let key = 0;
    for (let route in this.props.routes) {
      let marker = route === 'time' ? time : price;
      let eprice = this.props.routes.price;
      let etime = this.props.routes.time;
      if (eprice.avg_estimate === etime.avg_estimate &&
          eprice.display_name === etime.display_name &&
          eprice.duration     === etime.duration) {
        marker = priceTime;
        routes.push(
          <Route
          key={key++}
          route={this.props.routes.price}
          selectRoute={this.props.selectRoute}
          classStyle={route}
          marker={marker}
          />
          );
        return routes;
      }
      if (this.props.routes[route] !== null) {
        routes.push(<Route
          key={key++}
          route={this.props.routes[route]}
          selectRoute={this.props.selectRoute}
          classStyle={route}
          marker={marker}
          />
        );
      }
    }
    return routes;
  }
  render() {
    return (
      <div className="expanded-routes">
        <ul>
          {this.renderRoutes()}
        </ul>
      </div>
    );
  }
}

export default ExpandedRouteList
