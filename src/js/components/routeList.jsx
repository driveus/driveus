import React, { Component } from 'react';

import Route from './route.jsx';

class RouteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uber: 'uber-list-container',
      lyft: 'lyft-list-container',
    };
  }
  renderRoutes() {
    return this.props.routes.map((route) => {
      if (route.high_estimate) {
        let priceStyle = {color:'inherit'},
            surgeNotice = '',
            surgeValue = route.price_multiplier;
        if (route.price_multiplier > 1) {
          priceStyle = {color:'yellow'};
          surgeValue = surgeValue % 1 === 0 ? surgeValue + '.0' : surgeValue;
          surgeNotice = `- ${surgeValue}x`;
        }
        let carpool = false;
        if (route.display_name === 'UberPOOL' || route.display_name === 'Lyft Line') { carpool = true; }
        return <Route
          surgeNotice={surgeNotice}
          priceStyle={priceStyle}
          key={route.display_name}
          route={route}
          selectRoute={this.props.selectRoute}
          classStyle={this.props.classStyle}
          carpool={carpool}
          />
      }
    });
  }
  render() {
    let height = {
      height: '0%',
      borderBottomLeftRadius: '100%',
      borderBottomRightRadius: '100%'
      },
        style = this.state[this.props.classStyle];
    if (this.props.routes.length) {
      height = {
        height: '100%',
        borderBottomLeftRadius: '0%',
        borderBottomRightRadius: '0%'
        }
      }
    return (
      <div className={style} style={height}>
        <ul>
          {this.renderRoutes()}
        </ul>
      </div>
    );
  }
}

export default RouteList
