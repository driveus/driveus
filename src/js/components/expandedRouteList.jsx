import React, { Component } from 'react';

import ExpandedRoute from './expandedRoute.jsx';

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
      message = <p className="expanded-message">Found better deals nearby!</p>
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
