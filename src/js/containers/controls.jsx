import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCoords } from '../actions/requests';

// Components
import LocationSearch from '../containers/location_search.jsx';
import ExpandSearch from '../components/expandSearch.jsx';

class Controls extends Component {

  constructor(props) {
    super(props);
    this.state = {
      startLocation: '',
      endLocation: ''
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleLocationAutoComplete = this.handleLocationAutoComplete.bind(this)
  }
  // componentWillMount() {
  //   let geocoder = new google.maps.Geocoder();
  //   this.setState({ geocoder: geocoder });
  // }
  // submitLocation(e) {
  onFormSubmit(e) {
    e.preventDefault();
    if (this.props.canRequestRoutes) {
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
  }
  handleLocationChange(e) {
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
  handleLocationAutoComplete(address, tripNode) {
    switch (tripNode) {
      case 'startLocation':
        this.setState({ startLocation: address });
        break;
      case 'endLocation':
        this.setState({ endLocation: address });
        break;
      default:
        return;
    }
  }
  render() {
    let expandSearch;
    if (!this.props.currentLocation.start) { expandSearch = null; }
    else {
      expandSearch =
      <ExpandSearch
        currentLocation={this.props.currentLocation}
        expandSearch={this.props.fetchRoutes} 
      />
    }
    return (
      <div className="search-box">
        <div className="expand-search">
          {expandSearch}
        </div>
        <form onSubmit={this.onFormSubmit} className="location-form">
          <LocationSearch
            tripNode="startLocation"
            onLocationChange={this.handleLocationChange}
            onAutoComplete={this.handleLocationAutoComplete}
            value={this.state.startLocation}
            name="startLocation"
            placeholder="Pickup"
          />
          <LocationSearch
            tripNode="endLocation"
            onLocationChange={this.handleLocationChange}
            onAutoComplete={this.handleLocationAutoComplete}
            value={this.state.endLocation}
            name="endLocation"
            placeholder="Dropoff"
          />
          <button className="submit-btn">Submit</button>
        </form>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    canRequestRoutes: state.requestRoute,
    currentLocation: state.currentLocation
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCoords }, dispatch);
}
// no mapStateToProps, must use null to skip to mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(Controls);
