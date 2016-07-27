var Test = React.createClass({displayName: "Test",
  render: function() {
    return (
      React.createElement("div", null, "Hello world!")
    );
  }
});

ReactDOM.render(React.createElement(Test, null), document.getElementById('container'));
