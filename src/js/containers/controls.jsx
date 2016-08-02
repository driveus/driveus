import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCoords } from '../actions/requests';

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
  componentWillMount() {
    let geocoder = new google.maps.Geocoder();
    this.setState({ geocoder: geocoder });
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
    let startLocation = e.target.startLocation.value,
        endLocation = e.target.endLocation.value;
    if (startLocation && endLocation) {
      let location = {
        start: startLocation,
        end: endLocation
      }
      this.props.getCoords(location)
      this.setState({
        startLocation: '',
        endLocation: ''
      });
    }
  }
  render() {
    let expandSearch;
    if (!this.props.currentLocation.start) { expandSearch = null; }
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
  return bindActionCreators({ getCoords }, dispatch);
}
// no mapStateToProps, must use null to skip to mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(Controls);
