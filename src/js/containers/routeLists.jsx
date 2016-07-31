import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectRoute } from '../actions/index.js';
// Makes sure action flows through all reducers to maintain state
import { bindActionCreators } from 'redux';

// Components
import RouteList from '../components/routeList.jsx';

class RouteLists extends Component {
  constructor(props) {
    super(props);
    // this.findCheapest = this.findCheapest.bind(this);
  }
  // findCheapest(routes) {
  //   return routes.map(function(list) {
  //     if (list.length) {
  //       return list.reduce(function(acc, curr) {
  //         if (curr.high_estimate < acc.high_estimate) {
  //           acc = curr;
  //         }
  //         return acc;
  //       });
  //     }
  //   });
  // }
  render() {
    return (
      <div className="list-container">
        <RouteList
          routes={this.props.uberRoutes}
          classStyle={0}
          selectRoute={this.props.selectRoute}
          />
        <RouteList
          routes={this.props.lyftRoutes}
          classStyle={1}
          selectRoute={this.props.selectRoute}
          />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    uberRoutes: state.routes.uber,
    lyftRoutes: state.routes.lyft
  };
}
// All returns return as props to route container
function mapDispatchToProps(dispatch) {
  // When selectRoute is called, the result is passed to all reducers
  return bindActionCreators({ selectRoute }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RouteLists);
