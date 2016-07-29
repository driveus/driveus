import React, { Component } from 'react';

// Components
import FindRoute from './findRoute.jsx';

class Controls extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="search-box">
        <FindRoute getLocation={this.props.getLocation} />
      </div>
    );
  }
};

export default Controls;
