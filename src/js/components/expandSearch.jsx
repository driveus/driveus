import React, { Component } from 'react';

class ExpandSearch extends Component {
  render() {
    return (
      <button
        className="form-btn"
        onClick={() => this.props.expandSearch(this.props.currentLocation)}>
        Expand Search
      </button>
    );
  }
}

export default ExpandSearch;
