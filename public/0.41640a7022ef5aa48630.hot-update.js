webpackHotUpdate(0,{

/***/ 93:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react2 = __webpack_require__(8);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _reactTransformHmr3 = __webpack_require__(16);
	
	var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
	  Route: {
	    displayName: "Route"
	  }
	};
	
	var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	  filename: "/Users/ianmrak/Documents/Projects/drivus/src/js/components/route.jsx",
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _reactTransformHmr2(Component, id);
	  };
	}
	
	var Route = _wrapComponent("Route")(function (_Component) {
	  _inherits(Route, _Component);
	
	  function Route(props) {
	    _classCallCheck(this, Route);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Route).call(this, props));
	
	    _this.setActiveRoute = _this.setActiveRoute.bind(_this);
	    return _this;
	  }
	
	  _createClass(Route, [{
	    key: "setActiveRoute",
	    value: function setActiveRoute() {
	      return this.props.selectRoute({
	        route: this.props.route,
	        style: this.props.classStyle
	      });
	    }
	  }, {
	    key: "msToTime",
	    value: function msToTime(duration) {
	      var minutes = parseInt(duration / (1000 * 60) % 60),
	          hours = parseInt(duration / (1000 * 60 * 60) % 24);
	      console.log(hours, minutes);
	      hours = hours > 12 ? hours - 12 : hours;
	      minutes = minutes < 10 ? "0" + minutes : minutes;
	      return hours + ":" + minutes;
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      // Formatting for display...could be done better?
	      console.log(this.props.route.duration);
	      var eta = Math.round(this.props.route.eta / 60),
	          totalTime = Math.round(this.props.route.duration + this.props.route.eta) * 1000,
	          etaMinutes = eta <= 1 ? 'minute' : 'minutes',
	          totalMinutes = totalTime <= 1 ? 'minute' : 'minutes',
	          cost = this.props.route.high_estimate ? '$' + Math.round(this.props.route.high_estimate / 100) : 'Metered',
	          disclaimer = this.props.carpool ? '\nMay make additional stops' : '',
	          image = this.props.marker ? _react3.default.createElement("img", { src: this.props.marker, className: "marker-tag" }) : null;
	      console.log(this.msToTime(Date.now() + totalTime));
	
	      return _react3.default.createElement(
	        "li",
	        { className: "list-item " + this.props.classStyle,
	          onClick: this.setActiveRoute },
	        _react3.default.createElement(
	          "div",
	          { className: "route-cost" },
	          cost
	        ),
	        _react3.default.createElement(
	          "div",
	          { className: "route-name" },
	          this.props.route.display_name
	        ),
	        image,
	        _react3.default.createElement(
	          "div",
	          null,
	          _react3.default.createElement(
	            "div",
	            { className: "driver-eta" },
	            "Pickup: ",
	            eta,
	            " ",
	            etaMinutes
	          ),
	          _react3.default.createElement(
	            "div",
	            { className: "route-duration" },
	            "Total: ",
	            totalTime,
	            " ",
	            totalMinutes
	          )
	        ),
	        _react3.default.createElement(
	          "span",
	          { className: "disclaimer" },
	          disclaimer
	        )
	      );
	    }
	  }]);
	
	  return Route;
	}(_react2.Component));
	
	exports.default = Route;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9yb3V0ZS5qc3g/ZDUyYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHRSxrQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEZBQ1gsS0FEVzs7QUFFakIsV0FBSyxjQUFMLEdBQXNCLE1BQUssY0FBTCxDQUFvQixJQUFwQixPQUF0QjtBQUZpQjtBQUdsQjs7OztzQ0FDZ0I7QUFDZixjQUFPLEtBQUssS0FBTCxDQUFXLFdBQVgsQ0FBdUI7QUFDNUIsZ0JBQU8sS0FBSyxLQUFMLENBQVcsS0FEVTtBQUU1QixnQkFBTyxLQUFLLEtBQUwsQ0FBVztBQUZVLFFBQXZCLENBQVA7QUFJRDs7OzhCQUNRLFEsRUFBVTtBQUNqQixXQUFJLFVBQVUsU0FBVSxZQUFVLE9BQUssRUFBZixDQUFELEdBQXFCLEVBQTlCLENBQWQ7QUFBQSxXQUNJLFFBQVEsU0FBVSxZQUFVLE9BQUssRUFBTCxHQUFRLEVBQWxCLENBQUQsR0FBd0IsRUFBakMsQ0FEWjtBQUVJLGVBQVEsR0FBUixDQUFZLEtBQVosRUFBbUIsT0FBbkI7QUFDSixlQUFRLFFBQVEsRUFBUixHQUFhLFFBQVEsRUFBckIsR0FBMEIsS0FBbEM7QUFDQSxpQkFBVyxVQUFVLEVBQVgsR0FBaUIsTUFBTSxPQUF2QixHQUFpQyxPQUEzQztBQUNBLGNBQU8sUUFBUSxHQUFSLEdBQWMsT0FBckI7QUFDRDs7OzhCQUNRO0FBQ1A7QUFDQSxlQUFRLEdBQVIsQ0FBWSxLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLFFBQTdCO0FBQ0EsV0FBSSxNQUFNLEtBQUssS0FBTCxDQUFXLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsR0FBakIsR0FBcUIsRUFBaEMsQ0FBVjtBQUFBLFdBQ0ksWUFBWSxLQUFLLEtBQUwsQ0FBWSxLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLFFBQWpCLEdBQTRCLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsR0FBekQsSUFBK0QsSUFEL0U7QUFBQSxXQUVJLGFBQWEsT0FBTyxDQUFQLEdBQVcsUUFBWCxHQUFzQixTQUZ2QztBQUFBLFdBR0ksZUFBZSxhQUFhLENBQWIsR0FBaUIsUUFBakIsR0FBNEIsU0FIL0M7QUFBQSxXQUlJLE9BQU8sS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixhQUFqQixHQUFpQyxNQUFPLEtBQUssS0FBTCxDQUFXLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsYUFBakIsR0FBK0IsR0FBMUMsQ0FBeEMsR0FBMEYsU0FKckc7QUFBQSxXQUtJLGFBQWEsS0FBSyxLQUFMLENBQVcsT0FBWCxHQUFxQiw2QkFBckIsR0FBcUQsRUFMdEU7QUFBQSxXQU1JLFFBQVEsS0FBSyxLQUFMLENBQVcsTUFBWCxHQUFvQix1Q0FBSyxLQUFLLEtBQUssS0FBTCxDQUFXLE1BQXJCLEVBQTZCLFdBQVUsWUFBdkMsR0FBcEIsR0FBNEUsSUFOeEY7QUFPSSxlQUFRLEdBQVIsQ0FBWSxLQUFLLFFBQUwsQ0FBZ0IsS0FBSyxHQUFMLEtBQVcsU0FBM0IsQ0FBWjs7QUFFSixjQUNFO0FBQUE7QUFBQSxXQUFJLDBCQUF3QixLQUFLLEtBQUwsQ0FBVyxVQUF2QztBQUNFLG9CQUFTLEtBQUssY0FEaEI7QUFFRTtBQUFBO0FBQUEsYUFBSyxXQUFVLFlBQWY7QUFBNkI7QUFBN0IsVUFGRjtBQUdFO0FBQUE7QUFBQSxhQUFLLFdBQVUsWUFBZjtBQUE2QixnQkFBSyxLQUFMLENBQVcsS0FBWCxDQUFpQjtBQUE5QyxVQUhGO0FBSUcsY0FKSDtBQUtFO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQSxlQUFLLFdBQVUsWUFBZjtBQUFBO0FBQXFDLGdCQUFyQztBQUFBO0FBQTJDO0FBQTNDLFlBREE7QUFFQTtBQUFBO0FBQUEsZUFBSyxXQUFVLGdCQUFmO0FBQUE7QUFBd0Msc0JBQXhDO0FBQUE7QUFBb0Q7QUFBcEQ7QUFGQSxVQUxGO0FBU0U7QUFBQTtBQUFBLGFBQU0sV0FBVSxZQUFoQjtBQUE4QjtBQUE5QjtBQVRGLFFBREY7QUFhRDs7Ozs7O21CQUdZLEsiLCJmaWxlIjoiMC40MTY0MGE3MDIyZWY1YWE0ODYzMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgUm91dGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnNldEFjdGl2ZVJvdXRlID0gdGhpcy5zZXRBY3RpdmVSb3V0ZS5iaW5kKHRoaXMpO1xuICB9XG4gIHNldEFjdGl2ZVJvdXRlKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnNlbGVjdFJvdXRlKHtcbiAgICAgIHJvdXRlOiB0aGlzLnByb3BzLnJvdXRlLFxuICAgICAgc3R5bGU6IHRoaXMucHJvcHMuY2xhc3NTdHlsZVxuICAgIH0pO1xuICB9XG4gIG1zVG9UaW1lKGR1cmF0aW9uKSB7XG4gICAgbGV0IG1pbnV0ZXMgPSBwYXJzZUludCgoZHVyYXRpb24vKDEwMDAqNjApKSU2MCksXG4gICAgICAgIGhvdXJzID0gcGFyc2VJbnQoKGR1cmF0aW9uLygxMDAwKjYwKjYwKSklMjQpO1xuICAgICAgICBjb25zb2xlLmxvZyhob3VycywgbWludXRlcylcbiAgICBob3VycyA9IGhvdXJzID4gMTIgPyBob3VycyAtIDEyIDogaG91cnM7XG4gICAgbWludXRlcyA9IChtaW51dGVzIDwgMTApID8gXCIwXCIgKyBtaW51dGVzIDogbWludXRlcztcbiAgICByZXR1cm4gaG91cnMgKyBcIjpcIiArIG1pbnV0ZXM7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIC8vIEZvcm1hdHRpbmcgZm9yIGRpc3BsYXkuLi5jb3VsZCBiZSBkb25lIGJldHRlcj9cbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLnJvdXRlLmR1cmF0aW9uKVxuICAgIGxldCBldGEgPSBNYXRoLnJvdW5kKHRoaXMucHJvcHMucm91dGUuZXRhLzYwKSxcbiAgICAgICAgdG90YWxUaW1lID0gTWF0aC5yb3VuZCgodGhpcy5wcm9wcy5yb3V0ZS5kdXJhdGlvbiArIHRoaXMucHJvcHMucm91dGUuZXRhKSkqMTAwMCxcbiAgICAgICAgZXRhTWludXRlcyA9IGV0YSA8PSAxID8gJ21pbnV0ZScgOiAnbWludXRlcycsXG4gICAgICAgIHRvdGFsTWludXRlcyA9IHRvdGFsVGltZSA8PSAxID8gJ21pbnV0ZScgOiAnbWludXRlcycsXG4gICAgICAgIGNvc3QgPSB0aGlzLnByb3BzLnJvdXRlLmhpZ2hfZXN0aW1hdGUgPyAnJCcgKyAoTWF0aC5yb3VuZCh0aGlzLnByb3BzLnJvdXRlLmhpZ2hfZXN0aW1hdGUvMTAwKSkgOiAnTWV0ZXJlZCcsXG4gICAgICAgIGRpc2NsYWltZXIgPSB0aGlzLnByb3BzLmNhcnBvb2wgPyAnXFxuTWF5IG1ha2UgYWRkaXRpb25hbCBzdG9wcycgOiAnJyxcbiAgICAgICAgaW1hZ2UgPSB0aGlzLnByb3BzLm1hcmtlciA/IDxpbWcgc3JjPXt0aGlzLnByb3BzLm1hcmtlcn0gY2xhc3NOYW1lPVwibWFya2VyLXRhZ1wiLz4gOiBudWxsO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1zVG9UaW1lKCgoRGF0ZS5ub3coKSt0b3RhbFRpbWUpKSkpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBjbGFzc05hbWU9e2BsaXN0LWl0ZW0gJHt0aGlzLnByb3BzLmNsYXNzU3R5bGV9YH1cbiAgICAgICAgb25DbGljaz17dGhpcy5zZXRBY3RpdmVSb3V0ZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91dGUtY29zdFwiPntjb3N0fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdXRlLW5hbWVcIj57dGhpcy5wcm9wcy5yb3V0ZS5kaXNwbGF5X25hbWV9PC9kaXY+XG4gICAgICAgIHtpbWFnZX1cbiAgICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcml2ZXItZXRhXCI+UGlja3VwOiB7ZXRhfSB7ZXRhTWludXRlc308L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3V0ZS1kdXJhdGlvblwiPlRvdGFsOiB7dG90YWxUaW1lfSB7dG90YWxNaW51dGVzfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGlzY2xhaW1lclwiPntkaXNjbGFpbWVyfTwvc3Bhbj5cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSb3V0ZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2NvbXBvbmVudHMvcm91dGUuanN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==