import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from "react-google-maps";

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
  initMap() {
    var map = new google.maps.Map(document.getElementById('map-display'), {
      center: {lat: -34.397, lng: 150.644},
      scrollwheel: false,
      zoom: 8
    });
  }
  render() {
    return (
      <div id="map-display">
        <GoogleMapLoader
          containerElement={
            <div className="map-container"
              {...this.props}
              style={{
                height: `100%`,
              }}
              ></div>
          }
          googleMapElement={
            <GoogleMap
              ref={(map) => (this._googleMapComponent = map)}
              options={this.state.mapOptions}
              defaultZoom={14}
              defaultCenter={{
                lat: this.state.mapOptions.lat,
                lng: this.state.mapOptions.lng
              }}>
              {this.state.markers.map((marker) => {
                return (
                  <Marker {...marker} />
                );
              })}
            </GoogleMap>
          }
          />
      </div>
    );
  }
}

export default MapView
