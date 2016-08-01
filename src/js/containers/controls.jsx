import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRoutes } from '../actions/axios';

// Components
import FindRoute from '../components/findRoute.jsx';
import ExpandSearch from '../components/expandSearch.jsx';

class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startLocation: '',
      endLocation: ''
    }
    this.setLocation = this.setLocation.bind(this);
    this.submitLocation = this.submitLocation.bind(this);
  }
  setLocation(e) {
    switch (e.target.name) {
      case 'startLocation':
        this.setState({ startLocation: e.target.value });
        break;
      case 'endLocation':
        this.setState({ endLocation: e.target.value });
        break;
      default:
        return;
    }
  }
  submitLocation(e) {
    e.preventDefault();
    if (this.state.startLocation && this.state.endLocation) {
      let coords = {
        start: this.state.startLocation,
        end: this.state.endLocation
      }
      this.props.fetchRoutes(coords);
      this.setState({
        startLocation: '',
        endLocation: ''
      });
    }
  }
  render() {
    let expandSearch;
    if (!this.props.currentLocation) { expandSearch = null; }
    else {
      expandSearch =
      <ExpandSearch
        currentLocation={this.props.currentLocation}
        expandSearch={this.props.fetchRoutes} />
    }
    return (
      <div className="search-box">
        <div className="expand-search">
          {expandSearch}
        </div>
        <FindRoute
          setLocation={this.setLocation}
          submitLocation={this.submitLocation}
          startLocation={this.state.startLocation}
          endLocation={this.state.endLocation}
          />
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    currentLocation: state.currentLocation
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRoutes }, dispatch);
}
// no mapStateToProps, must use null to skip to mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(Controls);
