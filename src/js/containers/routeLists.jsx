import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectRoute } from '../actions/index.js';
// Makes sure action flows through all reducers to maintain state
import { bindActionCreators } from 'redux';

// Components
import RouteList from '../components/routeList.jsx';
import ExpandedRouteList from '../components/expandedRouteList.jsx';

class RouteLists extends Component {
  render() {
    let expandedRoutes;
    if (this.props.expandedRoutes.price || this.props.expandedRoutes.time) {
      expandedRoutes =
      <ExpandedRouteList
        routes={this.props.expandedRoutes}
        selectRoute={this.props.selectRoute}
        />
    }
    return (
      <div className="list-container">
        {expandedRoutes}
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
  console.log(state)
  return {
    uberRoutes: state.routes.uber,
    lyftRoutes: state.routes.lyft,
    expandedRoutes: state.expandedRoutes,
    expandedDirections: state.expandedDirections
  };
}
// All returns return as props to route container
function mapDispatchToProps(dispatch) {
  // When selectRoute is called, the result is passed to all reducers
  return bindActionCreators({ selectRoute }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RouteLists);
