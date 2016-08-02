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
      map: map
    });
  }
  componentDidUpdate() {
    let startMarker = new google.maps.Marker({
      position: this.props.currentLocation.start || null,
      map: this.state.map,
      animation: 2
    });
    let endMarker = new google.maps.Marker({
      position: this.props.currentLocation.end || null,
      map: this.state.map,
      animation: 2
    });
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
    currentLocation: state.currentLocation
  }
}
export default connect(mapStateToProps)(MapView);
