import React, { Component } from 'react';

// Components
import Route from './route.jsx';

class RouteList extends Component {
  renderRoutes() {
    return this.props.routes.map(function(route) {
      return <Route key={route} route={route} />
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
