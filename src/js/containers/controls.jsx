import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCoords, fetchExpanded } from '../actions/requests';
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
      currentLocation: null
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleLocationAutoComplete = this.handleLocationAutoComplete.bind(this);
    this.setCurrent = this.setCurrent.bind(this);
    this.updateStartCoords = this.updateStartCoords.bind(this);
  }
  // Gets user location with HTML5 geolocation
  // Retrieves the current coordinates and converts it to actual address, 
  // it depends on a callback to complete it's run.
  coordsToAddress(cb) {
      let geocoder = new google.maps.Geocoder,
          currentLocation;
      // Gets user location with HTML5 geolocation
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          currentLocation: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        });
        geocoder.geocode({
          'location': { 
            lat: this.state.currentLocation.lat, 
            lng: this.state.currentLocation.lng
          }
        }, (results, status) => {
          if (status === 'OK') {
            cb(results[0].formatted_address);
          } else {
            window.alert('No results found');
          }
        });
      });
      document.querySelector('.location-form').addEventListener('keydown', this.handleKeyDown);
    }

  updateStartCoords(address) {
    this.setState({
      startLocation: address
    })
  }

  setCurrent() {
    this.setState({
      startLocation: "Retrieving your current location..." 
    });
    this.coordsToAddress(this.updateStartCoords)
  }

  setImage() {
    let icon = require('../../assets/compass.svg');
    return icon;
  }

  // Wipes input field after form submission (at the end of redux cycle)
  componentWillReceiveProps() {
    this.setState({
      startLocation: '',
      endLocation: ''
    });
  }
  componentDidUpdate() {
    if (this.props.surge) {
      console.log('detected change!')
    }
  }
  // Assigns input placeholders and fires of redux chain API calls
  onFormSubmit(e) {
    e.preventDefault();
    if (this.props.canRequestRoutes) {
      let startLocation = e.target.startLocation.value || this.state.currentLocation,
          endLocation = e.target.endLocation.value;
      if (startLocation && endLocation) {
        let location = {
          start: startLocation,
          end: endLocation
        }
        this.setState({
          startPlaceholder: startLocation,
          endPlaceholder: endLocation
        })
        this.props.getCoords(location)
      }
    }
  }
  // Tracks user input to local state values
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
  handleKeyDown(e) {
    var ENTER = 13;
    if( e.keyCode === ENTER ) {
      e.preventDefault();
    }
  }
  render() {
    let isActive = 'inactive-expand',
        canExpand = null;
    if (this.props.currentAddress.start) {
      isActive = 'active-expand';
      canExpand = this.props.fetchExpanded
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
              <button className="current-location"  onClick={this.setCurrent} >
                <img src={this.setImage()} /> 
              </button>
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
          expandSearch={canExpand}
        />
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    surge: state.surge,
    canRequestRoutes: state.requestRoute,
    currentCoords: state.currentCoords,
    currentAddress: state.currentAddress
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCoords: getCoords, fetchExpanded: fetchExpanded}, dispatch);
}
// no mapStateToProps, must use null to skip to mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(Controls);



    // <div className="form-submit">
    //       </div>
