import React, { Component } from 'react';

class ExpandSearch extends Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
  }
  search() {
    if (this.props.expandSearch) {
      return this.props.expandSearch(this.props.currentLocation);
    }
    return null;
  }
  render() {
    return (
      <button
        className={`form-btn ${this.props.classStyle}`}
        onClick={this.search}>
        Better Deals
      </button>
    );
  }
}

export default ExpandSearch;
