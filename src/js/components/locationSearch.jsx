import React, { Component } from 'react'
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'

export default class LocationSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: 'LocationSearch'.concat(this.props.tripNode),
    }
  }

  componentDidMount() {
    let autocomplete = new google.maps.places.Autocomplete(
      document.getElementById(this.state.id),
      {types: ['geocode', 'establishment']}
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
      <div>
        <img className="headerImage" src="http://static1.squarespace.com/static/5567846ee4b07c004ad4db4e/t/557b6f81e4b0db2f0d087a44/1432847002645/uberpool_v2.jpg" />
        <input
          placeholder={this.props.placeholder}
          id={this.state.id}
          value={this.props.value}
          onChange={this.props.onLocationChange}
          name={this.props.name}
        />
      </div>
    );
  }
}
