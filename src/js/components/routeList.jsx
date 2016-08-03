import React, { Component } from 'react';

// Components
import Route from './route.jsx';

class RouteList extends Component {
  renderRoutes() {
    return this.props.routes.map((route) => {
      if (route.high_estimate) {
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
    let style = this.props.classStyle === 0 ? 'uber-list-container' : 'lyft-list-container';
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
