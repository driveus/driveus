import React, { Component } from 'react';

class ExpandSearch extends Component {
  render() {
    if (this.props.message) {
      return (
        <div className='active-expand'>
          {this.props.message}
        </div>
      );
    }
    if (this.props.classStyle === 'inactive-expand') {
      return (<div></div>);
    }
    return (
      <div className={this.props.classStyle} >
        <span>Surge detected! Search nearby for better deals?</span>
        <div>
          <button
            className="expand-btn"
            onClick={() => this.props.disableSurge()}>
            No</button>
          <button
            className="expand-btn"
            onClick={() => this.props.expandSearch(this.props.currentLocation)}>
            Yes
          </button>
        </div>
      </div>
    );
  }
}
export default ExpandSearch;
