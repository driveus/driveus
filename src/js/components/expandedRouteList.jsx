import React, { Component } from 'react';

// Components
import Route from './route.jsx';

class ExpandedRouteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      0: 'expanded-price',
      1: 'expanded-money',
    };
  }
  renderRoutes() {
    let routes = [];
    let key = 0;
    for (let route in this.props.routes) {
      if (this.props.routes[route] !== null) {
      routes.push(<Route
        key={key++}
        route={this.props.routes[route]}
        selectRoute={this.props.selectRoute}
        classStyle={route}
        />);
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
