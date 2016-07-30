import React, { Component } from 'react';

// Components
import Route from './route.jsx';

class RouteList extends Component {
  renderRoutes() {
    return this.props.routes.map((route) => {
      if (route.currency) {
        return <Route
          key={route.display_name}
          route={route}
          selectRoute={this.props.selectRoute}
          />
      }
    });
  }
  render() {
    const style = this.props.classStyle === 0 ? 'uber-list-container' : 'lyft-list-container';
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
