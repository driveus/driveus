import React, { Component } from 'react';

class Route extends Component {
  constructor(props) {
    super(props);
    this.setActiveRoute = this.setActiveRoute.bind(this);
  }
  setActiveRoute() {
    return this.props.selectRoute({
      route: this.props.route,
      style: this.props.classStyle
    });
  }
  render() {
    let eta = Math.round(this.props.route.eta/60),
        totalTime = Math.round((this.props.route.duration + this.props.route.eta)/60),
        etaMinutes = eta <= 1 ? 'minute' : 'minutes',
        totalMinutes = totalTime <= 1 ? 'minute' : 'minutes',
        disclaimer = this.props.carpool ? '*' : '';
    return (
      <li className="list-item"
        onClick={this.setActiveRoute}>
        <div className="route-cost">${Math.round(this.props.route.high_estimate/100)}</div>
        <div className="route-name">{this.props.route.display_name}</div>
        <div className="driver-eta">Pickup: {eta} {etaMinutes}</div>
        <div className="route-duration">Total: {totalTime} {totalMinutes}{disclaimer}</div>
      </li>
    );
  }
}

export default Route;
