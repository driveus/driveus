import React, { Component } from 'react';

class Route extends Component {
  render() {
    return (
      // Add more when there is real data
      <li className="list-item">{this.props.route}</li>
    );
  }
}

export default Route;
