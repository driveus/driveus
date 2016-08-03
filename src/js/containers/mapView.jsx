import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class MapView extends Component {

  componentDidMount() {
    let map = new google.maps.Map(document.querySelector('.map-container'), {
      center: this.props.currentLocation.start || { lat: 37.773972, lng: -122.431297 },
      scrollwheel: false,
      zoom: 10
    });
    this.setState({
      map: map,
      markers: []
    });
  }
  componentWillReceiveProps() {
    if (this.props.currentLocation.start && this.props.currentLocation.end) {
      for (let marker of this.props.routeMarkers) {
        marker.setMap(null);
      }
    }
  }
  componentDidUpdate() {
    if (this.props.routeMarkers.length) {
      let markers = this.props.routeMarkers,
      bounds = new google.maps.LatLngBounds();
      for (let i = 0; i < markers.length; i++) {
        if (markers[i].position) {
          markers[i].setMap(this.state.map);
          bounds.extend(markers[i].getPosition());
        }
      }
      this.state.map.fitBounds(bounds);
    }
  }
  render() {
    return (
      <div id="map-display">
        <div className="map-container">
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentLocation: state.currentLocation,
    routeMarkers: state.routeMarkers
  }
}
export default connect(mapStateToProps)(MapView);
