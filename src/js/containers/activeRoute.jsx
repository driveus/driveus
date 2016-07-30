import React, { Component } from 'react';
import { connect } from 'react-redux';

// Not sure what the functionality of this is going to be
class ActiveRoute extends Component {
  render() {
    let route;
    if (!this.props.route) { route = 'Nothing selected'; }
    else { route = 'Selected route: ' + this.props.route.display_name; }
    return (
      <div>{route}</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    route: state.activeRoute
  };
}
// Maybe mapDispatchToProps for ride booking?
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ bookRide: bookRide }, dispatch)
// }
export default connect(mapStateToProps)(ActiveRoute);
