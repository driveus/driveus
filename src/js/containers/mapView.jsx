import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class MapView extends Component {

  componentDidMount() {
    let map = new google.maps.Map(document.querySelector('.map-container'), {
      center: this.props.currentCoords.start || { lat: 37.773972, lng: -122.431297 },
      scrollwheel: false,
      zoom: 10,
      disableDefaultUI: true,
    });
    console.log(google)
    this.setState({
      map: map,
      markers: []
    });
  }
  componentWillReceiveProps() {
    if (this.props.currentCoords.start || this.props.currentCoords.end) {
      for (let marker of this.props.routeMarkers) {
        marker.setMap(null);
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
    if (this.props.routeMarkers.length) {
      let markers = this.props.routeMarkers,
      bounds = new google.maps.LatLngBounds();
      console.log(bounds)
      for (let i = 0; i < markers.length; i++) {
        if (markers[i].position) {
          markers[i].setMap(this.state.map);
          bounds.extend(markers[i].getPosition());
        }
      }
      this.state.map.fitBounds(bounds);
      this.state.map.setZoom(this.state.map.getZoom() - 1);
    }
    if (this.props.expandedMarkers.price || this.props.expandedMarkers.time) {
      let markers = this.props.expandedMarkers;
      for (let data in markers) {
        if (markers[data].position) {
          markers[data].setMap(this.state.map);
        }
      }
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
