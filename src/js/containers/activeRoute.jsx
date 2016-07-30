import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deselectRoute } from '../actions/index.js';
import { bindActionCreators } from 'redux';

class ActiveRoute extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (!this.props.route) { return <div></div>; }
    return (
      <div>
        <div onClick={this.props.deselectRoute} className="lightbox-background"></div>
        <div className="selected-route-container">
          <div>{this.props.route.display_name}</div>
          <div>Cost: {this.props.route.high_estimate}$ {this.props.route.currency}</div>
          <div>Duration: {this.props.route.duration}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    route: state.activeRoute
  };
}
// Maybe mapDispatchToProps for ride booking?
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deselectRoute }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ActiveRoute);
