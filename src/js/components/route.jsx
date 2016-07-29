import React, { Component } from 'react';

class Route extends Component {
  render() {
    return (
      <li className="list-item">{this.props.route}</li>
    );
  }
}

export default Route;
