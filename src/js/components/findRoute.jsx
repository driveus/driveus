import React, { Component } from 'react';

class FindRoute extends Component {
  componentDidMount() {
    // let defaultBounds = new google.maps.LatLngBounds(
    //   new google.maps.LatLng(37.7749, -123.4194),
    //   new google.maps.LatLng(38.7749, -122.4194));
    //
      let inputs = document.getElementsByClassName('search-input');
      // let options = {
      //   bounds: defaultBounds,
      // };
      for (let input of inputs) {
        new google.maps.places.Autocomplete(input);
      }
    }
    render() {
      return (
        <form
          className="location-form"
          onChange={this.props.setLocation}
          onSubmit={this.props.submitLocation}>
          <input
            className="search-input"
            placeholder="Enter your location"
            name="startLocation"
            />
          <input
            className="search-input"
            placeholder="Enter your desination"
            name="endLocation"
            />
          <button className="submit-btn">Submit</button>
        </form>

      );
    }
  }

  export default FindRoute;
