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
      scrollwheel: false
    }
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
              ref={(map) => {(this._googleMapComponent = map); console.log(map)}}
              defaultZoom={14}
              defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
              >
              {this.state.markers.map((marker) => {
                return (
                  <Marker
                    {...marker}
                    />
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
