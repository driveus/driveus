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
    let eta = Math.round(this.props.route.eta/60);
    let totalTime = Math.round((this.props.route.duration + this.props.route.eta)/60)
    let minutes = eta <= 1 ? 'minute' : 'minutes';
    let disclaimer = this.props.carpool ? '*' : '';
    return (
      <li className="list-item"
        onClick={this.setActiveRoute}>
        <div className="route-name">{this.props.route.display_name}</div>
        <div className="route-cost">Cost: ${this.props.route.high_estimate/100}</div>
        <div className="driver-eta">Pickup: {eta} {minutes}</div>
        <div className="route-duration">Total: {totalTime} {minutes}{disclaimer}</div>
      </li>
    );
  }
}

export default Route;
