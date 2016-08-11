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
	      var milliseconds = parseInt(duration % 1000 / 100),
	          seconds = parseInt(duration / 1000 % 60),
	          minutes = parseInt(duration / (1000 * 60) % 60),
	          hours = parseInt(duration / (1000 * 60 * 60) % 24);
	
	      hours = hours < 10 ? "0" + hours : hours;
	      minutes = minutes < 10 ? "0" + minutes : minutes;
	      seconds = seconds < 10 ? "0" + seconds : seconds;
	
	      return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      // Formatting for display...could be done better?
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9yb3V0ZS5qc3g/ZDUyYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHRSxrQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEZBQ1gsS0FEVzs7QUFFakIsV0FBSyxjQUFMLEdBQXNCLE1BQUssY0FBTCxDQUFvQixJQUFwQixPQUF0QjtBQUZpQjtBQUdsQjs7OztzQ0FDZ0I7QUFDZixjQUFPLEtBQUssS0FBTCxDQUFXLFdBQVgsQ0FBdUI7QUFDNUIsZ0JBQU8sS0FBSyxLQUFMLENBQVcsS0FEVTtBQUU1QixnQkFBTyxLQUFLLEtBQUwsQ0FBVztBQUZVLFFBQXZCLENBQVA7QUFJRDs7OzhCQUNRLFEsRUFBVTtBQUNqQixXQUFJLGVBQWUsU0FBVSxXQUFTLElBQVYsR0FBZ0IsR0FBekIsQ0FBbkI7QUFBQSxXQUNNLFVBQVUsU0FBVSxXQUFTLElBQVYsR0FBZ0IsRUFBekIsQ0FEaEI7QUFBQSxXQUVNLFVBQVUsU0FBVSxZQUFVLE9BQUssRUFBZixDQUFELEdBQXFCLEVBQTlCLENBRmhCO0FBQUEsV0FHTSxRQUFRLFNBQVUsWUFBVSxPQUFLLEVBQUwsR0FBUSxFQUFsQixDQUFELEdBQXdCLEVBQWpDLENBSGQ7O0FBS0EsZUFBUyxRQUFRLEVBQVQsR0FBZSxNQUFNLEtBQXJCLEdBQTZCLEtBQXJDO0FBQ0EsaUJBQVcsVUFBVSxFQUFYLEdBQWlCLE1BQU0sT0FBdkIsR0FBaUMsT0FBM0M7QUFDQSxpQkFBVyxVQUFVLEVBQVgsR0FBaUIsTUFBTSxPQUF2QixHQUFpQyxPQUEzQzs7QUFFQSxjQUFPLFFBQVEsR0FBUixHQUFjLE9BQWQsR0FBd0IsR0FBeEIsR0FBOEIsT0FBOUIsR0FBd0MsR0FBeEMsR0FBOEMsWUFBckQ7QUFDRDs7OzhCQUNRO0FBQ1A7QUFDQSxXQUFJLE1BQU0sS0FBSyxLQUFMLENBQVcsS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixHQUFqQixHQUFxQixFQUFoQyxDQUFWO0FBQUEsV0FDSSxZQUFZLEtBQUssS0FBTCxDQUFZLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsUUFBakIsR0FBNEIsS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixHQUF6RCxJQUErRCxJQUQvRTtBQUFBLFdBRUksYUFBYSxPQUFPLENBQVAsR0FBVyxRQUFYLEdBQXNCLFNBRnZDO0FBQUEsV0FHSSxlQUFlLGFBQWEsQ0FBYixHQUFpQixRQUFqQixHQUE0QixTQUgvQztBQUFBLFdBSUksT0FBTyxLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLGFBQWpCLEdBQWlDLE1BQU8sS0FBSyxLQUFMLENBQVcsS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixhQUFqQixHQUErQixHQUExQyxDQUF4QyxHQUEwRixTQUpyRztBQUFBLFdBS0ksYUFBYSxLQUFLLEtBQUwsQ0FBVyxPQUFYLEdBQXFCLDZCQUFyQixHQUFxRCxFQUx0RTtBQUFBLFdBTUksUUFBUSxLQUFLLEtBQUwsQ0FBVyxNQUFYLEdBQW9CLHVDQUFLLEtBQUssS0FBSyxLQUFMLENBQVcsTUFBckIsRUFBNkIsV0FBVSxZQUF2QyxHQUFwQixHQUE0RSxJQU54RjtBQU9JLGVBQVEsR0FBUixDQUFZLEtBQUssUUFBTCxDQUFnQixLQUFLLEdBQUwsRUFBRCxHQUFlLFNBQTlCLENBQVo7O0FBRUosY0FDRTtBQUFBO0FBQUEsV0FBSSwwQkFBd0IsS0FBSyxLQUFMLENBQVcsVUFBdkM7QUFDRSxvQkFBUyxLQUFLLGNBRGhCO0FBRUU7QUFBQTtBQUFBLGFBQUssV0FBVSxZQUFmO0FBQTZCO0FBQTdCLFVBRkY7QUFHRTtBQUFBO0FBQUEsYUFBSyxXQUFVLFlBQWY7QUFBNkIsZ0JBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUI7QUFBOUMsVUFIRjtBQUlHLGNBSkg7QUFLRTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUEsZUFBSyxXQUFVLFlBQWY7QUFBQTtBQUFxQyxnQkFBckM7QUFBQTtBQUEyQztBQUEzQyxZQURBO0FBRUE7QUFBQTtBQUFBLGVBQUssV0FBVSxnQkFBZjtBQUFBO0FBQXdDLHNCQUF4QztBQUFBO0FBQW9EO0FBQXBEO0FBRkEsVUFMRjtBQVNFO0FBQUE7QUFBQSxhQUFNLFdBQVUsWUFBaEI7QUFBOEI7QUFBOUI7QUFURixRQURGO0FBYUQ7Ozs7OzttQkFHWSxLIiwiZmlsZSI6IjAuN2JmYzk1MWEzMWQxMTNiOTEyMWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFJvdXRlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zZXRBY3RpdmVSb3V0ZSA9IHRoaXMuc2V0QWN0aXZlUm91dGUuYmluZCh0aGlzKTtcbiAgfVxuICBzZXRBY3RpdmVSb3V0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5zZWxlY3RSb3V0ZSh7XG4gICAgICByb3V0ZTogdGhpcy5wcm9wcy5yb3V0ZSxcbiAgICAgIHN0eWxlOiB0aGlzLnByb3BzLmNsYXNzU3R5bGVcbiAgICB9KTtcbiAgfVxuICBtc1RvVGltZShkdXJhdGlvbikge1xuICAgIHZhciBtaWxsaXNlY29uZHMgPSBwYXJzZUludCgoZHVyYXRpb24lMTAwMCkvMTAwKVxuICAgICAgICAsIHNlY29uZHMgPSBwYXJzZUludCgoZHVyYXRpb24vMTAwMCklNjApXG4gICAgICAgICwgbWludXRlcyA9IHBhcnNlSW50KChkdXJhdGlvbi8oMTAwMCo2MCkpJTYwKVxuICAgICAgICAsIGhvdXJzID0gcGFyc2VJbnQoKGR1cmF0aW9uLygxMDAwKjYwKjYwKSklMjQpO1xuXG4gICAgaG91cnMgPSAoaG91cnMgPCAxMCkgPyBcIjBcIiArIGhvdXJzIDogaG91cnM7XG4gICAgbWludXRlcyA9IChtaW51dGVzIDwgMTApID8gXCIwXCIgKyBtaW51dGVzIDogbWludXRlcztcbiAgICBzZWNvbmRzID0gKHNlY29uZHMgPCAxMCkgPyBcIjBcIiArIHNlY29uZHMgOiBzZWNvbmRzO1xuXG4gICAgcmV0dXJuIGhvdXJzICsgXCI6XCIgKyBtaW51dGVzICsgXCI6XCIgKyBzZWNvbmRzICsgXCIuXCIgKyBtaWxsaXNlY29uZHM7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIC8vIEZvcm1hdHRpbmcgZm9yIGRpc3BsYXkuLi5jb3VsZCBiZSBkb25lIGJldHRlcj9cbiAgICBsZXQgZXRhID0gTWF0aC5yb3VuZCh0aGlzLnByb3BzLnJvdXRlLmV0YS82MCksXG4gICAgICAgIHRvdGFsVGltZSA9IE1hdGgucm91bmQoKHRoaXMucHJvcHMucm91dGUuZHVyYXRpb24gKyB0aGlzLnByb3BzLnJvdXRlLmV0YSkpKjEwMDAsXG4gICAgICAgIGV0YU1pbnV0ZXMgPSBldGEgPD0gMSA/ICdtaW51dGUnIDogJ21pbnV0ZXMnLFxuICAgICAgICB0b3RhbE1pbnV0ZXMgPSB0b3RhbFRpbWUgPD0gMSA/ICdtaW51dGUnIDogJ21pbnV0ZXMnLFxuICAgICAgICBjb3N0ID0gdGhpcy5wcm9wcy5yb3V0ZS5oaWdoX2VzdGltYXRlID8gJyQnICsgKE1hdGgucm91bmQodGhpcy5wcm9wcy5yb3V0ZS5oaWdoX2VzdGltYXRlLzEwMCkpIDogJ01ldGVyZWQnLFxuICAgICAgICBkaXNjbGFpbWVyID0gdGhpcy5wcm9wcy5jYXJwb29sID8gJ1xcbk1heSBtYWtlIGFkZGl0aW9uYWwgc3RvcHMnIDogJycsXG4gICAgICAgIGltYWdlID0gdGhpcy5wcm9wcy5tYXJrZXIgPyA8aW1nIHNyYz17dGhpcy5wcm9wcy5tYXJrZXJ9IGNsYXNzTmFtZT1cIm1hcmtlci10YWdcIi8+IDogbnVsbDtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5tc1RvVGltZSgoKERhdGUubm93KCkpICsgdG90YWxUaW1lKSkpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBjbGFzc05hbWU9e2BsaXN0LWl0ZW0gJHt0aGlzLnByb3BzLmNsYXNzU3R5bGV9YH1cbiAgICAgICAgb25DbGljaz17dGhpcy5zZXRBY3RpdmVSb3V0ZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91dGUtY29zdFwiPntjb3N0fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdXRlLW5hbWVcIj57dGhpcy5wcm9wcy5yb3V0ZS5kaXNwbGF5X25hbWV9PC9kaXY+XG4gICAgICAgIHtpbWFnZX1cbiAgICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcml2ZXItZXRhXCI+UGlja3VwOiB7ZXRhfSB7ZXRhTWludXRlc308L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3V0ZS1kdXJhdGlvblwiPlRvdGFsOiB7dG90YWxUaW1lfSB7dG90YWxNaW51dGVzfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGlzY2xhaW1lclwiPntkaXNjbGFpbWVyfTwvc3Bhbj5cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSb3V0ZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2NvbXBvbmVudHMvcm91dGUuanN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==