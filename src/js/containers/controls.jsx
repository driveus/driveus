import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRoutes } from '../actions/index';

// Components
import FindRoute from '../components/findRoute.jsx';

class Controls extends Component {
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
      this.props.fetchRoutes('placeholder');
      this.setState({
        startLocation: '',
        endLocation: ''
      });
    }
  }

  render() {
    return (
      <div className="search-box">
        <FindRoute
          setLocation={this.setLocation}
          submitLocation={this.submitLocation}
          startLocation={this.state.startLocation}
          endLocation={this.state.endLocation}
          />
      </div>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRoutes }, dispatch);
}
// no mapStateToProps, must use null to skip to mapDispatchToProps
export default connect(null, mapDispatchToProps)(Controls);
