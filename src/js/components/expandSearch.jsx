import React, { Component } from 'react';

class ExpandSearch extends Component {
  render() {
    if (!this.props.currentLocation) {
      return <div className="expand-search"></div>;
      }
      return (
        <div className="expand-search">
          <button
            onClick={() => this.props.expandSearch(this.props.currentLocation)}>
            Expand Search
          </button>
        </div>
      );
    }
  }

  export default ExpandSearch;
