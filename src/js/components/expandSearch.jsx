import React, { Component } from 'react';

class ExpandSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // sliderValue: 300,
      // expandedView: false,
      // searchRadius: null,
      // previousSearchRadius: null,
      // routes: false
    }
    // this.search = this.search.bind(this);
    // this.handleSliderChange = this.handleSliderChange.bind(this);
    // this.handleSearchRadiusClick = this.handleSearchRadiusClick.bind(this);
    // this.toggleExpandedView = this.toggleExpandedView.bind(this);
  }
  componentWillReceiveProps() {
    // if (this.props.classStyle) {
    //   this.setState({
    //     searchRadius: null,
    //     previousSearchRadius: null
    //   });
    // }
    // if (this.props.routes) {
    //   this.setState({ routes: true });
    // }
  }
  // handleSearchRadiusClick(e) {
  //   e.preventDefault();
  //   this.setState({searchRadius: e.target.value})
  // }
  //
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
        Surge detected! Search nearby for better deals?
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
