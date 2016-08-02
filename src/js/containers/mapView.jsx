import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [{
        position: {
          lat: 37.7749,
          lng: -122.4194
        },
        key: `USA`,
        defaultAnimation: 2,
      }],
      mapOptions: {
        scrollwheel: false,
        lat: 37.7749,
        lng: -122.4194
      }
    }
  }
  componentDidMount() {
    var map = new google.maps.Map(document.querySelector('.map-container'), {
      center: { lat: 37.7749, lng: -122.4194 },
      scrollwheel: false,
      zoom: 14
    });
    this.setState({
      map: map
    });
  }
  componentWillUpdate() {
    var startMarker = new google.maps.Marker({
      position: this.props.currentLocation.start,
      map: this.state.map,
      animation: 2
    });
    var endMarker = new google.maps.Marker({
      position: this.props.currentLocation.end,
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
