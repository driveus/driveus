import React, { Component } from 'react';

class FindRoute extends Component {
  render() {
    return (
      <form
        className="location-form"
        onChange={this.props.setLocation}
        onSubmit={this.props.submitLocation}>
        <input
          placeholder="Enter your location"
          name="startLocation"
          value={this.props.startLocation} />
        <input
          placeholder="Enter your desination"
          name="endLocation"
          value={this.props.endLocation} />
        <button className="submit-btn">Submit</button>
      </form>
    );
  }
}

export default FindRoute;
