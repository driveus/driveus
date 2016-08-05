import React, { Component } from 'react';

class ExpandSearch extends Component {
  render() {
    return (
      <button
        className="form-btn"
        onClick={() => this.props.expandSearch(this.props.currentLocation)}>
        Better Deals
      </button>
    );
  }
}

export default ExpandSearch;
