import React, { Component } from 'react';

class FindRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startLocation: '',
      endLocation: ''
    }
    this.setLocation = this.setLocation.bind(this);
    this.submitLocation = this.submitLocation.bind(this);
  }
  setLocation(e) {
    switch (e.target.name) {
      case 'startLocation':
      this.setState({
        startLocation: e.target.value
      });
      break;
      case 'endLocation':
      this.setState({
        endLocation: e.target.value
      });
      break;
      default:
      return;
    }
  }
  submitLocation(e) {
    e.preventDefault();
    if (this.state.startLocation && this.state.endLocation) {
      console.log(this.state);
    }
  }

  render() {
    const getLocation = this.props.getLocation;
    return (
      <form
        className="location-form"
        onChange={this.setLocation}
        onSubmit={this.submitLocation}>
        <input
          placeholder="Enter your location"
          name="startLocation"
          value={this.state.start} />
        <input
          placeholder="Enter your desination"
          name="endLocation"
          value={this.state.end} />
        <button className="submit-btn">Submit</button>
      </form>
    );
  }
}

export default FindRoute;
