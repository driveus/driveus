import React, { Component } from 'react';
import ExpandedRouteList from './expandedRouteList.jsx';

class ExpandSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderValue: 300,
      expandedView: false,
      searchRadius: null,
      previousSearchRadius: null,
      routes: false
    }
    // this.search = this.search.bind(this);
    // this.handleSliderChange = this.handleSliderChange.bind(this);
    this.handleSearchRadiusClick = this.handleSearchRadiusClick.bind(this);
    // this.toggleExpandedView = this.toggleExpandedView.bind(this);
  }
  componentWillReceiveProps() {
    if (this.props.classStyle) {
      this.setState({
        searchRadius: null,
        previousSearchRadius: null
      });
    }
    if (this.props.routes) {
      this.setState({ routes: true });
    }
  }
  componentDidUpdate() {
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
    if (this.state.routes) {
      return <ExpandedRouteList
        routes={this.props.routes}
        selectRoute={this.props.selectRoute}
        />
    }
    return (
      <div className={this.props.classStyle} >
        {this.props.expandSearch}
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
