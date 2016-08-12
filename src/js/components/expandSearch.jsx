import React, { Component } from 'react';

class ExpandSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderValue: 300,
      expandedView: false,
      sliderState: 'slider-hide'
    }
    this.search = this.search.bind(this);
    this.handleSliderChange = this.handleSliderChange.bind(this);
    this.toggleExpandedView = this.toggleExpandedView.bind(this);
  }
  search() {
    if (this.props.expandSearch) {
      return this.props.expandSearch(this.props.currentLocation, this.state.sliderValue);
    }
    return null;
  }

  handleSliderChange(e) {
    e.preventDefault();
    this.setState({sliderValue: e.target.value});
  }

  toggleExpandedView() {
    // (this.state.expandedView) ? this.setState({expandedView: false}) : this.setState({expandedView: true});
    (this.state.sliderState === 'slider-hide') ? this.setState({sliderState: 'slider-show'}) : this.setState({sliderState: 'slider-hide'})
  }

  // renderSlider() {

  //   if (this.state.expandedView) {
  //     return  (
  //       <div className="active-expand">
  //         <div>
  //           <input className="expand-slider" type="range" min="100" max="1000" value={this.state.sliderValue} step="100" onChange={this.handleSliderChange}></input>
  //           <span>{this.state.sliderValue} meters</span>
  //         </div>
  //       </div>
  //     )
  //   }
  // }
        // <div>
        //   {this.renderSlider()}
        // </div>

  render() {

    return (
      <div className="expand-search" >
        <div onClick={this.toggleExpandedView}>
          > Expand Pickup Radius
        </div>
        
        <div className={this.state.sliderState}>
          <div>
            <input className="expand-slider" type="range" min="100" max="1000" value={this.state.sliderValue} step="100" onChange={this.handleSliderChange}></input>
            <span>{this.state.sliderValue} meters</span>
          </div>
        </div>

      </div>
    );
  }
}

// <button
//   type="button"
//   className={`form-btn ${this.props.classStyle}`}
//   onClick={this.search}>
//   Better Deals
// </button>

export default ExpandSearch;
