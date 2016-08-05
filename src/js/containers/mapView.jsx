import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class MapView extends Component {

  componentDidMount() {
    let map = new google.maps.Map(document.querySelector('.map-container'), {
      center: this.props.currentCoords.start || { lat: 37.773972, lng: -122.431297 },
      scrollwheel: false,
      zoom: 10
    });
    this.setState({
      map: map,
      markers: []
    });
  }
  componentWillReceiveProps() {
    if (this.props.currentCoords.start && this.props.currentCoords.end) {
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
    currentCoords: state.currentCoords,
    routeMarkers: state.routeMarkers,
    expandedMarkers: state.expandedMarkers
  }
}
export default connect(mapStateToProps)(MapView);
