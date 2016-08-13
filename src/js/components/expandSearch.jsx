import React, { Component } from 'react';

class ExpandSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderValue: 300,
      expandedView: false,
      searchRadius: null,
      previousSearchRadius: null
    }
    // this.search = this.search.bind(this);
    // this.handleSliderChange = this.handleSliderChange.bind(this);
    this.handleSearchRadiusClick = this.handleSearchRadiusClick.bind(this);
    // this.toggleExpandedView = this.toggleExpandedView.bind(this);
  }
  componentDidUpdate() {
    console.log('ExpandSearch updated!', this.state.searchRadius, this.state.previousSearchRadius);
    if (this.state.searchRadius !== this.state.previousSearchRadius) {
      console.log('Search Radius and previous search radius not equal');
      this.setState({previousSearchRadius: this.state.searchRadius});
      return this.props.expandSearch(this.props.currentLocation, this.state.searchRadius);
    }
    return null;
  }

  // handleSliderChange(e) {
  //   e.preventDefault();
  //   this.setState({sliderValue: e.target.value});
  // }

  handleSearchRadiusClick(e) {
    e.preventDefault();
    this.setState({searchRadius: e.target.value})
  }

  // toggleExpandedView() {
  //   // (this.state.expandedView) ? this.setState({expandedView: false}) : this.setState({expandedView: true});
  //   (this.state.sliderState === 'slider-hide') ? this.setState({sliderState: 'slider-show'}) : this.setState({sliderState: 'slider-hide'})
  // }

  render() {

    if (this.props.classStyle === 'inactive-expand') {
      return (<div></div>);
    } 

    return (
      <div className={this.props.classStyle} >
        <div onClick={this.toggleExpandedView}>
          Surge Pricing Detected! {this.state.searchRadius}
        </div>
        <div className="expand-btn-bar">
            <button value="100" onClick={this.handleSearchRadiusClick} className="expand-btn">100m</button>
            <button value="250" onClick={this.handleSearchRadiusClick} className="expand-btn">250m</button>
            <button value="500" onClick={this.handleSearchRadiusClick} className="expand-btn">500m</button>
            <button value="1000" onClick={this.handleSearchRadiusClick} className="expand-btn">1000m</button>
        </div>
      </div>
    );
  }
}
/*
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

        <div className={this.state.sliderState}>
            <input className="expand-slider" type="range" min="100" max="1000" value={this.state.sliderValue} step="100" onChange={this.handleSliderChange}></input>
            <span>{this.state.sliderValue} meters</span>
        </div>

          <button
            type="button"
            className={`form-btn ${this.props.classStyle}`}
            onClick={this.search}>
            Better Deals
          </button>
*/

export default ExpandSearch;
