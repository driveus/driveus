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
  }
  render() {
    return (
      <div className="list-container">
        <RouteList routes={this.props.routes[0]} classStyle={0} selectRoute={this.props.selectRoute} />
        <RouteList routes={this.props.routes[1]} classStyle={1} selectRoute={this.props.selectRoute} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { routes: state.routes };
}
// All returns return as props to route container
function mapDispatchToProps(dispatch) {
  // When selectRoute is called, the result is passed to all reducers
  return bindActionCreators({ selectRoute: selectRoute }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RouteLists);
