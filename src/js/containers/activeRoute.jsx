import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deselectRoute } from '../actions/index.js';
import { bindActionCreators } from 'redux';
import msToTime from '../helpers/msToTime';
import walkIcon from '../../assets/walkicon.svg';

import axios from 'axios';

class ActiveRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        uber: 'uber',
        lyft: 'lyft',
        expanded: 'expanded'
      },
      orderCab: null,
      MobileBrowser: null,
      inputElement: null
    }
    this.orderRide = this.orderRide.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount() {
    if( navigator.userAgent.match(/(Android|webOS|i(Phone|Pad|Pod)|BlackBerry|Windows Phone)/i)) {
      this.setState({MobileBrowser: true})
    } else {
      this.setState({MobileBrowser: false, orderCab: "#"})
    }
  }

  orderRide() {
    let startAdd = this.props.currentAddress.start,
        endAdd = this.props.currentAddress.end,
        startLat = this.props.coords.start.lat || this.props.currentCoords.start.lat,
        startLng = this.props.coords.start.lng || this.props.currentCoords.start.lng,
        endLat = this.props.currentCoords.end.lat,
        endLng = this.props.currentCoords.end.lng;
    if(this.props.route.display_name.match(/uber/i)) {
      let uberUrl = "uber://?client_id=37yHG1-x8iwme2fjogxoa3wU_4n2vWd5exCpEB8u&action=setPickup";
      let uberCoords = `&pickup[latitude]=${startLat}&pickup[longitude]=${startLng}&pickup[formatted_address]=${encodeURIComponent(startAdd)}&dropoff[latitude]=${endLat}&dropoff[longitude]=${endLng}&dropoff[formatted_address]=${encodeURIComponent(endAdd)}&product_id=a1111c8c-c720-46c3-8534-2fcdd730040d`
      let orderUber = uberUrl + uberCoords;

      if (!this.state.MobileBrowser) {
        this.sendMessage(orderUber);
      } else {
        this.setState({orderCab: orderUber, inputElement:null});
      }

    } else if (this.props.route.display_name.match(/lyft/i)) {
      let lyftUrl = `lyft://ridetype?id=${this.props.route.display_name.replace(' ', '_').toLowerCase()}&partner=_2bLC2X8YfE8bVC1qcLa0vOQut5r1lB_`;
      let lyftCoods = `&pickup[latitude]=${startLat}&pickup[longitude]=${startLng}&destination[latitude]=${endLat}&destination[longitude]=${endLng}`;
      let orderLyft = lyftUrl + lyftCoods;

      if (!this.state.MobileBrowser ) {
        this.sendMessage(orderLyft);
      } else {
        this.setState({orderCab: orderLyft, inputElement:null});
      }
    }
}
  sendMessage(order) {
    axios.post('/sms', {
      data: order
    })
    this.setState({inputElement: 'We just texted you the link to your ride!'});
  }

  render() {
    if (!this.props.route) { return <div></div>; }
      let eta = Math.round(this.props.route.eta/60),
          driveTime = Math.round((this.props.route.duration + this.props.route.eta))*1000,
          arrivalTime,
          etaMinutes = eta <= 1 ? 'minute' : 'minutes',
          cost = this.props.route.avg_estimate ? '$' + (Math.round(this.props.route.avg_estimate/100)) : 'Metered',
          backgroundColor = this.state.style[this.props.style],
          classes = 'selected-route-container ' + backgroundColor,
          walkingDisclaimer = null,
          distance;
          if (this.props.route.walkTime) {
            if (this.props.route.walkTime.value/60 > eta) {
              walkingDisclaimer = 'Due to walk time, we recommend you get closer before ordering'
            }
            let travelTime = Date.now()+(driveTime+Math.round(this.props.route.walkTime.value)*1000);
                arrivalTime = (msToTime(travelTime));
                distance = <div className="pickup-distance-active"><img src={walkIcon}/><p>{this.props.route.walkTime.text}</p></div>;
          }
          else {
            arrivalTime = (msToTime(Date.now()+driveTime));
          }
      return (
        <div>
          <div onClick={() => {this.props.deselectRoute(); this.setState({inputElement: null})}} className="lightbox-background"></div>
          <div className={classes}>
            <h1>{this.props.route.display_name}</h1>
            <h1>{cost}</h1>
            <p>Pickup: {eta} {etaMinutes}</p>
            <p>Arrival: {arrivalTime}</p>
            {distance}
            <a href={this.state.orderCab}>
              <button id="order-btn" onClick={this.orderRide}>Order Ride</button>
            </a>
            <div className="walking-disclaimer">{walkingDisclaimer}</div>
            <div className="text-message">{this.state.inputElement}</div>
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
    coords: state.activeRoute.coords,
    currentCoords: state.currentCoords,
    currentAddress: state.currentAddress
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deselectRoute }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(ActiveRoute);
