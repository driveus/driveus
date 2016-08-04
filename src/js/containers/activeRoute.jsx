import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deselectRoute } from '../actions/index.js';
import { bindActionCreators } from 'redux';

class ActiveRoute extends Component {
  render() {
    if (!this.props.route) { return <div></div>; }
    let eta = Math.round(this.props.route.eta/60),
        totalTime = Math.round((this.props.route.duration + this.props.route.eta)/60),
        etaMinutes = eta <= 1 ? 'minute' : 'minutes',
        totalMinutes = totalTime <= 1 ? 'minute' : 'minutes',
        backgroundColor = this.props.style === 0 ? 'uber' : 'lyft',
        classes = 'selected-route-container ' + backgroundColor;
    return (
      <div>
        <div onClick={this.props.deselectRoute} className="lightbox-background"></div>
        <div className={classes}>
          <h1>{this.props.route.display_name}</h1>
          <h1>${this.props.route.high_estimate/100}</h1>
          <p>Pickup: {eta} {etaMinutes}</p>
          <p>Total: {totalTime} {totalMinutes}</p>
          <button id="order-btn">Order Ride</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    route: state.activeRoute.route,
    style: state.activeRoute.style
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deselectRoute }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ActiveRoute);
