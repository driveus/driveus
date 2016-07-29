import React, { Component } from 'react';

class Route extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li className="list-item">{this.props.route}</li>
    );
  }
}

export default Route;
