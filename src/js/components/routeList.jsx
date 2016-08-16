import React, { Component } from 'react';

// Components
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
    // Div formatting including carpool disclaimer for certain services
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
        if (route.price_multiplier > 2) {
          priceStyle = {color:'orangered'};
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
    let height = { height: '0%' };
    if (this.props.routes.length) { height = { height: '100%' }; }
    let style = this.state[this.props.classStyle];
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
