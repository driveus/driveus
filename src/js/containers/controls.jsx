import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCoords, fetchExpanded } from '../actions/requests';
// Components
import LocationSearch from '../components/locationSearch.jsx';
import ExpandSearch from '../components/expandSearch.jsx';

class Controls extends Component {

  constructor(props) {
    super(props);
    this.state = {
      startLocation: '',
      endLocation: ''
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleLocationAutoComplete = this.handleLocationAutoComplete.bind(this)
  }
  componentWillReceiveProps() {
    this.setState({
      startLocation: '',
      endLocation: ''
    });
  }
  onFormSubmit(e) {
    e.preventDefault();
    if (this.props.canRequestRoutes) {
      let startLocation = e.target.startLocation.value,
          endLocation = e.target.endLocation.value;
      if (startLocation && endLocation) {
        let location = {
          start: startLocation,
          end: endLocation
        }
        this.setState({
          startPlaceholder: startLocation,
          endPlaceholder: endLocation
        })
        this.props.getCoords(location)
      }
    }
  }
  handleLocationChange(e) {
    switch (e.target.name) {
      case 'startLocation':
        this.setState({ startLocation: e.target.value });
        break;
      case 'endLocation':
        this.setState({ endLocation: e.target.value });
        break;
      default:
        return;
    }
  }
  handleLocationAutoComplete(address, tripNode) {
    switch (tripNode) {
      case 'startLocation':
        this.setState({ startLocation: address });
        break;
      case 'endLocation':
        this.setState({ endLocation: address });
        break;
      default:
        return;
    }
  }
  render() {
    let expandSearch;
    if (!this.props.currentAddress.start) { expandSearch = null; }
    else {
      expandSearch =
      <ExpandSearch
        currentLocation={this.props.currentCoords}
        expandSearch={this.props.fetchExpanded}
      />
    }
    return (
      <div className="search-box">
        <form onSubmit={this.onFormSubmit} className="location-form">
          <LocationSearch
            tripNode="startLocation"
            onLocationChange={this.handleLocationChange}
            onAutoComplete={this.handleLocationAutoComplete}
            value={this.state.startLocation}
            name="startLocation"
            placeholder={this.state.startPlaceholder || "Pickup"}
            />
          <LocationSearch
            tripNode="endLocation"
            onLocationChange={this.handleLocationChange}
            onAutoComplete={this.handleLocationAutoComplete}
            value={this.state.endLocation}
            name="endLocation"
            placeholder={this.state.endPlaceholder || "Dropoff"}
            />
          <div className="form-submit">
            <button className="form-btn">Submit</button>
            {expandSearch}
          </div>
        </form>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    canRequestRoutes: state.requestRoute,
    currentCoords: state.currentCoords,
    currentAddress: state.currentAddress
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCoords: getCoords, fetchExpanded: fetchExpanded}, dispatch);
}
// no mapStateToProps, must use null to skip to mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(Controls);
