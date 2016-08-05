import React, { Component } from 'react';
import { connect } from 'react-redux';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disclaimer: ''
    }
  }
  componentWillReceiveProps() {
    this.setState({
      disclaimer: '*May have additional stops'
    })
  }
  render() {
    return (
      <div id="footer">
        <span>{this.state.disclaimer}</span>
      </div>
    );
  }
}

function mapDispatchToProps(state) {
  return {
    routes: state.routes,
  }
}
export default connect(mapDispatchToProps)(Footer);
