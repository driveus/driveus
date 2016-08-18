import React, { Component } from 'react';
import msToTime from '../helpers/msToTime';
import pickupIcon from '../../assets/car.svg';
import arrivalIcon from '../../assets/clock.svg';
import walkIcon from '../../assets/walkicon.svg';

class ExpandedRoute extends Component {
  constructor(props) {
    super(props);
    this.setActiveRoute = this.setActiveRoute.bind(this);
  }
  setActiveRoute() {
    return this.props.selectRoute({
      route: this.props.route,
      style: this.props.classStyle
    });
  }

  render() {
    let eta = Math.round(this.props.route.minPrice.eta/60),
        etaMessage = `${eta} min`,
        driveTime = Math.round((this.props.route.minPrice.duration + this.props.route.minPrice.eta))*1000,
        travelTime = Date.now()+(driveTime+Math.round(this.props.route.walkTime.value*1000)),
        arrivalTime = (msToTime(travelTime)),
        cost = this.props.route.minPrice.avg_estimate ? '$' + (Math.round(this.props.route.minPrice.avg_estimate/100)) : 'Metered',
        disclaimer = this.props.carpool ? '\nMay make additional stops' : '',
        image = this.props.marker ? <img src={this.props.marker} className="marker-tag"/> : null;
    return (
      <div className='expanded-list-item'
        onClick={this.setActiveRoute}>
        <div className="pickup-distance-container">
          <img src={walkIcon}/>
          <p className="pickup-distance">{this.props.route.walkTime.text}</p>
        </div>
        <div className="ride-info">
          <div className="route-cost" style={this.props.priceStyle}>{cost} {this.props.surgeNotice}</div>
          <div className="route-name">{this.props.route.minPrice.display_name}</div>
        </div>
        <div className="travel-info">
          <div className="driver-eta"><img src={pickupIcon}/> {etaMessage}</div>
          <div className="route-duration"><img src={arrivalIcon}/> {arrivalTime}</div>
        </div>
      </div>
    );
  }
}

export default ExpandedRoute;
