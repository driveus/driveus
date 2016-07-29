import React, { Component } from 'react';

// Components
import Controls from './controls.jsx';
import RouteLists from '../containers/routeLists.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.submitLocation = this.submitLocation.bind(this);
  }

  submitLocation(e) {
    e.preventDefault();
    var start = e.target.startLocation.value;
    var end = e.target.endLocation.value;
    if (start && end) {
      console.log(start, end);
    }
  }
  render() {
    return (
      <div>
        <div>Jor / Luber / ABRoute</div>
        <Controls getLocation={this.submitLocation} />
        <div className="list-container">
          <RouteLists />
        </div>
      </div>
    );
  }
};

export default App;
