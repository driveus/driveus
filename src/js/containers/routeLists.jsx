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
    let expandedRoutes,
        listMessage = <h1 className="empty-message">Search for rides</h1>;
    if (this.props.uberRoutes.length || this.props.lyftRoutes.length) {
      let style = { height: '0%', margin: 0, opacity: 0 }
      listMessage = <h1 style={style} className="empty-message">Search for rides</h1>;
    }
    return (
      <div className="list-container">
        {listMessage}
        <ExpandedRouteList
          routes={this.props.expandedRoutes}
          selectRoute={this.props.selectRoute}
          />
        <RouteList
          routes={this.props.uberRoutes}
          classStyle={'uber'}
          selectRoute={this.props.selectRoute}
          />
        <RouteList
          routes={this.props.lyftRoutes}
          classStyle={'lyft'}
          selectRoute={this.props.selectRoute}
          />
      </div>
    );
  }
}

function mapStateToProps(state) {
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
