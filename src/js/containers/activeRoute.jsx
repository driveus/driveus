import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deselectRoute } from '../actions/index.js';
import { bindActionCreators } from 'redux';

class ActiveRoute extends Component {
  constructor(props) {
    super(props)

    this.orderRide = this.orderRide.bind(this);
  }
  
  orderRide() {

    // console.log('COORDS***********', this.props.currentCoords);
    // console.log('ADDRESS***********', this.props.currentAddress);

    // const lyftRoutes = {
    //   "Lyft": "lyft",
    //   "Lyft Line": "lyft_line",
    //   "Lyft Plus": "lyft_plus"
    // }

    let startAdd = this.props.currentAddress.start;
    let endAdd = this.props.currentAddress.end;
    let startLat = this.props.currentCoords.start.lat;
    let startLng = this.props.currentCoords.start.lng;
    let endLat = this.props.currentCoords.end.lat;
    let endLng = this.props.currentCoords.end.lng;

    if(this.props.route.display_name.match(/uber/i)) {    
      let uberUrl = "https://m.uber.com/ul/?client_id=37yHG1-x8iwme2fjogxoa3wU_4n2vWd5exCpEB8u&action=setPickup";
      let uberCoords = `&pickup[latitude]=${startLat}&pickup[longitude]=${startLng}&pickup[formatted_address]=${encodeURIComponent(startAdd)}&dropoff[latitude]=${endLat}&dropoff[longitude]=${endLng}&dropoff[formatted_address]=${encodeURIComponent(endAdd)}&product_id=a1111c8c-c720-46c3-8534-2fcdd730040d`
      let orderUber = uberUrl + uberCoords;

      console.log('************UBER ORDER***********', orderUber)
    } else if (this.props.route.display_name.match(/lyft/i)) {
        let lyftUrl = `lyft://ridetype?id=${this.props.route.display_name.replace(' ', '_').toLowerCase()}&partner=_2bLC2X8YfE8bVC1qcLa0vOQut5r1lB_`;
        let lyftCoods = `&pickup[latitude]=${startLat}&pickup[longitude]=${startLng}&destination[latitude]=${endLat}&destination[longitude]=${endLng}`
        let orderLyft = lyftUrl + lyftCoods;
        console.log('************LYFT ORDER***********', orderLyft)
    }

    
  }

  render() {
    // console.log('This is the data I have right now*********',this.props.route.product_id);

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
          <p>Cost: ${this.props.route.high_estimate/100}</p>
          <p>Pickup: {eta} {etaMinutes}</p>
          <p>Total: {totalTime} {totalMinutes}</p>
          <button id="order-btn" onClick={this.orderRide}>Order Ride</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
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
