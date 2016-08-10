import React, { Component } from 'react';

class ExpandSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderValue: 300
    }
    this.search = this.search.bind(this);
    this.handleSliderChange = this.handleSliderChange.bind(this);
  }
  search() {
    if (this.props.expandSearch) {
      return this.props.expandSearch(this.props.currentLocation, this.state.sliderValue);
    }
    return null;
  }

  handleSliderChange(e) {
    e.preventDefault();
    this.setState({sliderValue: e.target.value})
  }

  render() {
    return (
      <div className="expand-search-box">
        <p>Walking Radius: {this.state.sliderValue}</p>
        
          <input type="range" min="100" max="1000" value={this.state.sliderValue} step="100" onChange={this.handleSliderChange}></input>
      
          <button
            type="button"
            className={`form-btn ${this.props.classStyle}`}
            onClick={this.search}>
            Better Deals
          </button>
      </div>
    );
  }
}

export default ExpandSearch;
