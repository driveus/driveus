import React, { Component } from 'react';

class FindRoute extends Component {
  render() {
    const getLocation = this.props.getLocation;
    return (
      <form className="location-form" onSubmit={getLocation}>
        <input placeholder="Enter your location" name="startLocation" />
        <input placeholder="Enter your desination" name="endLocation" />
        <button className="submit-btn">Submit</button>
      </form>
    );
  }
}

export default FindRoute;
