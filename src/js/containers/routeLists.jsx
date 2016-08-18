import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectRoute } from '../actions/index.js';
// Makes sure action flows through all reducers to maintain state
import { bindActionCreators } from 'redux';

// Components
import RouteList from '../components/routeList.jsx';
import ExpandedRouteList from '../components/expandedRouteList.jsx';

class RouteLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageStyle: { height: '100%' }
    }
  }
  componentWillReceiveProps() {
    if (this.props.uberRoutes || this.props.lyftRoutes) {
      this.setState({ messageStyle: { height: '0', margin: 0, opacity: 0 }});
    }
  }
  render() {
    let expandedRoutes,
        listContainerStyle = { overflow: 'hidden' };
    if (this.props.uberRoutes.length || this.props.lyftRoutes.length) {
      listContainerStyle = { overflow: 'scroll' };
    }
    return (
      <div style={listContainerStyle} className="list-container">
        <div  className="empty-message" style={this.state.messageStyle} >
          <h1>DriveUs<br/>Search for rides</h1>
          <img className="empty-message-img" src={require('../../assets/driveusLogo.svg')} />
        </div>
        <ExpandedRouteList
          message={this.props.expandedRoutes.success}
          routes={this.props.expandedRoutes.routes}
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
