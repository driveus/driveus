import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class MapView extends Component {

  componentDidMount() {
    // Allows directions to be rendered on the map
    let directionsDisplay = new google.maps.DirectionsRenderer({
      suppressMarkers: true
    });
    // Creates persistent map for session
    let map = new google.maps.Map(document.querySelector('.map-container'), {
      center: this.props.currentCoords.start || { lat: 37.773972, lng: -122.431297 },
      scrollwheel: false,
      zoom: 10,
      disableDefaultUI: true,
      scaleControl: true,
      zoomControl: true
    });
    let center = map.getCenter();
    // Sets the directionsDisplay to the current map
    directionsDisplay.setMap(map);
    this.setState({
      center: center,
      map: map,
      directionsDisplay: directionsDisplay,
      markers: []
    });
  }
  componentWillReceiveProps() {
    // If new coords, remove old position markers
    if (this.props.currentCoords.start || this.props.currentCoords.end) {
      for (let marker in this.props.routeMarkers) {
        this.props.routeMarkers[marker].setMap(null);
      }
      // Removes expanded markers as well
      for (let marker in this.props.expandedMarkers) {
        if (this.props.expandedMarkers[marker]) {
          this.props.expandedMarkers[marker].setMap(null);
          this.props.expandedMarkers[marker]=null;
        }
      }
    }
  }
  componentDidUpdate() {
    // Creates direction path on map
    if (this.props.directions) {
      this.state.directionsDisplay.setDirections(this.props.directions);
    }
    // Drop route markers on map
    if (this.props.routeMarkers.start) {
      let markers = this.props.routeMarkers,
      bounds = new google.maps.LatLngBounds();
      for (let data in markers) {
        if (markers[data].position) {
          markers[data].setMap(this.state.map);
          bounds.extend(markers[data].getPosition());
        }
      }
      this.state.map.fitBounds(bounds);
    }
    // Set expanded markers and remove current directions (for closer bounding box)
    if (this.props.expandedMarkers.price || this.props.expandedMarkers.time) {
      this.state.directionsDisplay.set('directions', null);
      let markers = this.props.expandedMarkers,
          bounds = new google.maps.LatLngBounds();
      for (let data in markers) {
        if (markers[data].position) {
          markers[data].setMap(this.state.map);
          bounds.extend(markers[data].getPosition());
        }
      }
      // Extends bounds to include expanded markers and start location
      bounds.extend(this.props.routeMarkers['start'].getPosition());
      this.state.map.fitBounds(bounds);
    }
  }
  render() {
    let walkingDistance;
    // Displays walking time if less than 45 minutes
    if (this.props.directions && this.props.directions.routes[0].legs[0].duration.value <= 2700) {
      let time = this.props.directions.routes[0].legs[0].duration.text,
      message = `Walking: ${time}`;
      walkingDistance = <div className="walking-distance">{message}</div>;
      }
      return (
        <div id="map-display">
          {walkingDistance}
          <div className="map-container">
          </div>
        </div>
      );
    }
  }

function mapStateToProps(state) {
  return {
    currentCoords: state.currentCoords,
    routeMarkers: state.routeMarkers,
    expandedMarkers: state.expandedMarkers,
    directions: state.directions,
  }
}
export default connect(mapStateToProps)(MapView);
