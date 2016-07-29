import React, { Component } from 'react';

// Components
import FindRoute from './findRoute.jsx';

class Controls extends Component {
  render() {
    return (
      <div className="search-box">
        <FindRoute getLocation={this.props.getLocation} />
      </div>
    );
  }
};

export default Controls;
