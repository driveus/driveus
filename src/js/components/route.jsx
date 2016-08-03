import React, { Component } from 'react';

class Route extends Component {
  render() {
    let eta = Math.round(this.props.route.eta/60);
    let minutes = eta <= 1 ? 'minute' : 'minutes';
    return (
      // restyle/restructure probably needed
      <li className="list-item"
        onClick={() => this.props.selectRoute(this.props.route)}>
        <div className="route-name">{this.props.route.display_name}</div>
        <div className="route-cost">Cost: ${this.props.route.high_estimate/100}</div>
        <div className="route-eta">ETA: {eta} {minutes}</div>
      </li>
    );
  }
}

export default Route;
