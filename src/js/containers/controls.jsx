import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchExpanded } from '../actions/rideRequests';
import { getCoords, coordsToAddress } from '../actions/googleRequests';
import { disableSurge } from '../actions/index';
import handleKeyDown from '../helpers/disableEnter';
import locationIcon from '../../assets/compass.svg';
// Components
import LocationSearch from '../components/locationSearch.jsx';
import ExpandSearch from '../components/expandSearch.jsx';

class Controls extends Component {

  constructor(props) {
    super(props);
    this.state = {
      startLocation: '',
      endLocation: '',
      startPlaceholder: 'Pickup',
      endPlaceholder: 'Dropoff',
      currentLocation: null,
      currentEndpoint: null,
      canSubmit: true
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleLocationAutoComplete = this.handleLocationAutoComplete.bind(this);
    this.setCurrent = this.setCurrent.bind(this);
    this.updateStartCoords = this.updateStartCoords.bind(this);
  }
  componentDidMount() {
    document.querySelector('.location-form').addEventListener('keydown', handleKeyDown);
  }
  // Wipes input field after form submission (at the end of redux cycle)
  componentWillReceiveProps() {
    this.setState({
      startLocation: '',
      endLocation: ''
    });
  }
  updateStartCoords(address) {
    this.setState({
      startLocation: address,
      currentLocation: address,
      canSubmit: true
    });
  }

  setCurrent() {
    this.setState({
      startLocation: "Retrieving your current location...",
      canSubmit: false
    });
    coordsToAddress(this.updateStartCoords)
  }
  // Assigns input placeholders and fires of redux chain API calls
  onFormSubmit(e) {
    e.preventDefault();
    if (this.props.canRequestRoutes && this.state.canSubmit) {
      let startLocation = e.target.startLocation.value || this.state.currentLocation,
          endLocation = e.target.endLocation.value || this.state.currentEndpoint;
      if (startLocation && endLocation) {
        let location = {
          start: startLocation,
          end: endLocation
        }
        this.setState({
          startPlaceholder: startLocation,
          endPlaceholder: endLocation,
          currentLocation: startLocation,
          currentEndpoint: endLocation
        })
        this.props.getCoords(location)
      }
    }
  }
  // Tracks user input to local state values
  handleLocationChange(e) {
    this.props.disableSurge();
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
  // Assigns Google autocomplete values to local state
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
    let isActive = 'inactive-expand',
        canExpand = null;
    if (this.props.surge && !this.state.startLocation && !this.state.endLocation) {
      isActive = 'active-expand';
      canExpand = this.props.fetchExpanded;
    }
    return (
      <div className="search-box">
        <form onSubmit={this.onFormSubmit} className="location-form">
          <div className="location-search-inputs">
            <div className="current-location-start">
              <LocationSearch
                tripNode="startLocation"
                className="location-start"
                onLocationChange={this.handleLocationChange}
                onAutoComplete={this.handleLocationAutoComplete}
                value={this.state.startLocation}
                name="startLocation"
                placeholder={this.state.startPlaceholder}
              />
            <div className="current-location"  onClick={this.setCurrent} >
                <img src={locationIcon} className="compass"/>
              </div>
            </div>
            <LocationSearch
              tripNode="endLocation"
              onLocationChange={this.handleLocationChange}
              onAutoComplete={this.handleLocationAutoComplete}
              value={this.state.endLocation}
              name="endLocation"
              placeholder={this.state.endPlaceholder}
            />
          </div>
          <button className="form-btn"></button>

        </form>
        <ExpandSearch
          classStyle={isActive}
          currentLocation={this.props.currentCoords}
          expandSearch={this.props.fetchExpanded}
          disableSurge={this.props.disableSurge}
          message={this.props.expandedRoutes.message}
          routes={this.props.expandedRoutes.routes}
        />
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    surge: state.surge,
    expandedRoutes: state.expandedRoutes,
    canRequestRoutes: state.requestRoute,
    currentCoords: state.currentCoords,
    currentAddress: state.currentAddress
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCoords: getCoords,
    fetchExpanded: fetchExpanded,
    disableSurge: disableSurge
  }, dispatch);
}
// no mapStateToProps, must use null to skip to mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(Controls);
