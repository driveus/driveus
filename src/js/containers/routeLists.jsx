import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import RouteList from '../components/routeList.jsx';

class RouteLists extends Component {
  render() {
    return (
      <div className="list-container">
        <RouteList routes={this.props.routes[0]} classStyle={0} />
        <RouteList routes={this.props.routes[1]} classStyle={1} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    routes: state.routes
  };
}

export default connect(mapStateToProps)(RouteLists);
