import React, { Component } from 'react';

class ExpandSearch extends Component {
  render() {
    console.log(this.props.expandSearch)
    return (
      <button
        onClick={() => this.props.expandSearch(this.props.currentLocation)}>
        Expand Search
      </button>
    );
  }
}

export default ExpandSearch;
