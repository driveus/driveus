import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deselectRoute } from '../actions/index.js';
import { bindActionCreators } from 'redux';

class ActiveRoute extends Component {
  // constructor(props) {
  //   super(props)

  //   this.orderRide = this.orderRide.bind(this);
  // }
  
  // orderRide() {
  //   const lyftRoutes = {
  //     "Lyft": "lyft",
  //     "Lyft Line": "lyft_line",
  //     "Lyft Plus": "lyft_plus"
  //   }

  //   let startAdd = this.props.currentAddress.start;
  //   let endAdd = this.props.currentAddress.end;
  //   let startLat = this.props.currentLocation.start.lat;
  //   let startLng = this.props.currentLocation.start.lng;
  //   let endLat = this.props.currentLocation.end.lat;
  //   let endLng = this.props.currentLocation.end.lng;
  //   //need to acccess the client id differently

  //   //add pickup and dropoff coords
  //   let uberUrl = "https://m.uber.com/ul/?client_id=37yHG1-x8iwme2fjogxoa3wU_4n2vWd5exCpEB8u&action=setPickup";

  //   let uberCoords = `h&pickup[latitude]=${startLat}&pickup[longitude]=${startLng}&pickup[nickname]=UberHQ&pickup[formatted_address]=1455%20Market%20St%2C%20San%20Francisco%2C%20CA%2094103&dropoff[latitude]=${endLat}&dropoff[longitude]=${endLng}&dropoff[nickname]=Coit%20Tower&dropoff[formatted_address]=1%20Telegraph%20Hill%20Blvd%2C%20San%20Francisco%2C%20CA%2094133&product_id=a1111c8c-c720-46c3-8534-2fcdd730040d`
  //   //add pickup and destination coords
  //   let lyftUrl = `lyft://ridetype?id=${lyftRoutes[this.props.route.display_name]}&partner=_2bLC2X8YfE8bVC1qcLa0vOQut5r1lB_`;


  //   let lyftCoods = `&pickup[latitude]=${startLat}&pickup[longitude]=${startLng}&destination[latitude]=${endLat}&destination[longitude]=${endLng}`

  //   let orderLyft = lyftUrl + lyftCoods;
  //   console.log(orderLyft)
  // }
  render() {
    // console.log('This is the data I have right now*********',this.props.route.product_id);

    if (!this.props.route) { return <div></div>; }
    let eta = Math.round(this.props.route.eta/60),
        totalTime = Math.round((this.props.route.duration + this.props.route.eta)/60),
        minutes = eta <= 1 ? 'minute' : 'minutes',
        backgroundColor = this.props.style === 0 ? 'uber' : 'lyft',
        classes = 'selected-route-container ' + backgroundColor;
    return (
      <div>
        <div onClick={this.props.deselectRoute} className="lightbox-background"></div>
        <div className={classes}>
          <h1>{this.props.route.display_name}</h1>
          <p>Cost: ${this.props.route.high_estimate/100}</p>
          <p>Pickup: {eta} {minutes}</p>
          <p>Total: {totalTime} {minutes}</p>
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
    currentLocation: state.currentLocation,
    currentAddress: state.currentAddress
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deselectRoute }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ActiveRoute);
