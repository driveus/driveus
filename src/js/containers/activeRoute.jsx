import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deselectRoute } from '../actions/index.js';
import { bindActionCreators } from 'redux';

class ActiveRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        0: 'uber',
        1: 'lyft',
        price: 'price',
        time: 'time'
      },
      orderCab: null
    }
    this.orderRide = this.orderRide.bind(this);
  }
  orderRide() {
    let startAdd = this.props.currentAddress.start,
        endAdd = this.props.currentAddress.end,
        startLat = this.props.currentCoords.start.lat,
        startLng = this.props.currentCoords.start.lng,
        endLat = this.props.currentCoords.end.lat,
        endLng = this.props.currentCoords.end.lng;
    if(this.props.route.display_name.match(/uber/i)) {
      let uberUrl = "uber://?client_id=37yHG1-x8iwme2fjogxoa3wU_4n2vWd5exCpEB8u&action=setPickup";
      let uberCoords = `&pickup[latitude]=${startLat}&pickup[longitude]=${startLng}&pickup[formatted_address]=${encodeURIComponent(startAdd)}&dropoff[latitude]=${endLat}&dropoff[longitude]=${endLng}&dropoff[formatted_address]=${encodeURIComponent(endAdd)}&product_id=a1111c8c-c720-46c3-8534-2fcdd730040d`
      let orderUber = uberUrl + uberCoords;
      this.setState({orderCab: orderUber})

    } else if (this.props.route.display_name.match(/lyft/i)) {
        let lyftUrl = `lyft://ridetype?id=${this.props.route.display_name.replace(' ', '_').toLowerCase()}&partner=_2bLC2X8YfE8bVC1qcLa0vOQut5r1lB_`;
        let lyftCoods = `&pickup[latitude]=${startLat}&pickup[longitude]=${startLng}&destination[latitude]=${endLat}&destination[longitude]=${endLng}`
        let orderLyft = lyftUrl + lyftCoods;

        this.setState({orderCab: orderLyft})
    }
  }

  render() {
    if (!this.props.route) { return <div></div>; }
    let eta = Math.round(this.props.route.eta/60),
        totalTime = Math.round((this.props.route.duration + this.props.route.eta)/60),
        etaMinutes = eta <= 1 ? 'minute' : 'minutes',
        cost = this.props.route.high_estimate ? '$' + (Math.round(this.props.route.high_estimate/100)) : 'Metered',
        totalMinutes = totalTime <= 1 ? 'minute' : 'minutes',
        backgroundColor = this.state.style[this.props.style],
        classes = 'selected-route-container ' + backgroundColor;
    return (
      <div>
        <div onClick={this.props.deselectRoute} className="lightbox-background"></div>
        <div className={classes}>
          <h1>{this.props.route.display_name}</h1>
          <h1>{cost}</h1>
          <p>Pickup: {eta} {etaMinutes}</p>
          <p>Total: {totalTime} {totalMinutes}</p>
            <a href={this.state.orderCab} target="_blank">
             <button id="order-btn" onClick={this.orderRide}>Order Ride</button>
           </a>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentAddress: state.currentAddress,
    currentCoords: state.currentCoords,
    route: state.activeRoute.route,
    style: state.activeRoute.style,
    currentCoords: state.currentCoords,
    currentAddress: state.currentAddress
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deselectRoute }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ActiveRoute);
