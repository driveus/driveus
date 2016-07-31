import React, { Component } from 'react';

class Route extends Component {
  render() {
    return (
      // restyle/restructure probably needed
      <li className="list-item"
        onClick={() => this.props.selectRoute(this.props.route)}>
        <div>{this.props.route.display_name}</div>
        <div>Cost: {this.props.route.high_estimate}$ {this.props.route.currency}</div>
        <div>Duration: {this.props.route.duration}</div>
      </li>
    );
  }
}

export default Route;
