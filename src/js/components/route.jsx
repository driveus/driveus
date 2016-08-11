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
    // Formatting for display...could be done better?
    let eta = Math.round(this.props.route.eta/60),
        totalTime = Math.round((this.props.route.duration + this.props.route.eta)/60),
        etaMinutes = eta <= 1 ? 'minute' : 'minutes',
        totalMinutes = totalTime <= 1 ? 'minute' : 'minutes',
        cost = this.props.route.high_estimate ? '$' + (Math.round(this.props.route.high_estimate/100)) : 'Metered',
        disclaimer = this.props.carpool ? '\nMay make additional stops' : '',
        image = this.props.marker ? <img src={this.props.marker} className="marker-tag"/> : null;
    return (
      <li className={`list-item ${this.props.classStyle}`}
        onClick={this.setActiveRoute}>
        <div className="route-cost">{cost}</div>
        <div className="route-name">{this.props.route.display_name}</div>
        {image}
        <div>
        <div className="driver-eta">Pickup: {eta} {etaMinutes}</div>
        <div className="route-duration">Total: {totalTime} {totalMinutes}</div>
        </div>
        <span className="disclaimer">{disclaimer}</span>
      </li>
    );
  }
}

export default Route;
