import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class MapView extends Component {

  componentDidMount() {
    let map = new google.maps.Map(document.querySelector('.map-container'), {
      center: this.props.currentCoords.start || { lat: 37.773972, lng: -122.431297 },
      scrollwheel: false,
      zoom: 10,
      // disableDefaultUI: true,
    });
    this.setState({
      map: map,
      markers: []
    });
  }
  componentWillReceiveProps() {
    if (this.props.currentCoords.start || this.props.currentCoords.end) {
      for (let marker in this.props.routeMarkers) {
        this.props.routeMarkers[marker].setMap(null);
      }
      for (let marker in this.props.expandedMarkers) {
        if (this.props.expandedMarkers[marker]) {
          this.props.expandedMarkers[marker].setMap(null);
          this.props.expandedMarkers[marker]=null;
        }
      }
    }
  }
  componentDidUpdate() {
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
      // this.state.map.setZoom(this.state.map.getZoom() - 1);
    }
    if (this.props.expandedMarkers.price || this.props.expandedMarkers.time) {
      let markers = this.props.expandedMarkers,
          bounds = new google.maps.LatLngBounds();
      for (let data in markers) {
        if (markers[data].position) {
          markers[data].setMap(this.state.map);
          bounds.extend(markers[data].getPosition());
        }
      }
      bounds.extend(this.props.routeMarkers['start'].getPosition());
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
