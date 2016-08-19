import React, { Component } from 'react'

export default class LocationSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: 'LocationSearch'.concat(this.props.tripNode),
    }
  }

  componentDidMount() {
    let autocomplete = new google.maps.places.Autocomplete(
      document.getElementById(this.state.id)
    );
    autocomplete.addListener('place_changed', () => {
      let place = autocomplete.getPlace()
      if (place.formatted_address) {
        this.props.onAutoComplete(place.formatted_address, this.props.tripNode)
      }
    });
  }
  render() {
    return (
      <input
        type="search"
        placeholder={this.props.placeholder}
        id={this.state.id}
        value={this.props.value}
        onChange={this.props.onLocationChange}
        name={this.props.name}
        />
    );
  }
}
