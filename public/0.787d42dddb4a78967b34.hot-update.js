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
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
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
	      var minutes = duration.getMinutes(),
	          hours = parseInt(duration.getHours());
	      console.log(typeof hours === "undefined" ? "undefined" : _typeof(hours));
	      // hours = (hours > 12) ? hours - 12;
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
	      console.log(this.msToTime(new Date()));
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9yb3V0ZS5qc3g/ZDUyYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdFLGtCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwRkFDWCxLQURXOztBQUVqQixXQUFLLGNBQUwsR0FBc0IsTUFBSyxjQUFMLENBQW9CLElBQXBCLE9BQXRCO0FBRmlCO0FBR2xCOzs7O3NDQUNnQjtBQUNmLGNBQU8sS0FBSyxLQUFMLENBQVcsV0FBWCxDQUF1QjtBQUM1QixnQkFBTyxLQUFLLEtBQUwsQ0FBVyxLQURVO0FBRTVCLGdCQUFPLEtBQUssS0FBTCxDQUFXO0FBRlUsUUFBdkIsQ0FBUDtBQUlEOzs7OEJBQ1EsUSxFQUFVO0FBQ2pCLFdBQUksVUFBVSxTQUFTLFVBQVQsRUFBZDtBQUFBLFdBQ0ksUUFBUSxTQUFTLFNBQVMsUUFBVCxFQUFULENBRFo7QUFFSSxlQUFRLEdBQVIsUUFBbUIsS0FBbkIseUNBQW1CLEtBQW5CO0FBQ0o7QUFDQSxpQkFBVyxVQUFVLEVBQVgsR0FBaUIsTUFBTSxPQUF2QixHQUFpQyxPQUEzQztBQUNBLGNBQU8sUUFBUSxHQUFSLEdBQWMsT0FBckI7QUFDRDs7OzhCQUNRO0FBQ1A7QUFDQSxlQUFRLEdBQVIsQ0FBWSxLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLFFBQTdCO0FBQ0EsV0FBSSxNQUFNLEtBQUssS0FBTCxDQUFXLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsR0FBakIsR0FBcUIsRUFBaEMsQ0FBVjtBQUFBLFdBQ0ksWUFBWSxLQUFLLEtBQUwsQ0FBWSxLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLFFBQWpCLEdBQTRCLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsR0FBekQsSUFBK0QsSUFEL0U7QUFBQSxXQUVJLGFBQWEsT0FBTyxDQUFQLEdBQVcsUUFBWCxHQUFzQixTQUZ2QztBQUFBLFdBR0ksZUFBZSxhQUFhLENBQWIsR0FBaUIsUUFBakIsR0FBNEIsU0FIL0M7QUFBQSxXQUlJLE9BQU8sS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixhQUFqQixHQUFpQyxNQUFPLEtBQUssS0FBTCxDQUFXLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsYUFBakIsR0FBK0IsR0FBMUMsQ0FBeEMsR0FBMEYsU0FKckc7QUFBQSxXQUtJLGFBQWEsS0FBSyxLQUFMLENBQVcsT0FBWCxHQUFxQiw2QkFBckIsR0FBcUQsRUFMdEU7QUFBQSxXQU1JLFFBQVEsS0FBSyxLQUFMLENBQVcsTUFBWCxHQUFvQix1Q0FBSyxLQUFLLEtBQUssS0FBTCxDQUFXLE1BQXJCLEVBQTZCLFdBQVUsWUFBdkMsR0FBcEIsR0FBNEUsSUFOeEY7QUFPSSxlQUFRLEdBQVIsQ0FBWSxLQUFLLFFBQUwsQ0FBZ0IsSUFBSSxJQUFKLEVBQWhCLENBQVo7O0FBRUosY0FDRTtBQUFBO0FBQUEsV0FBSSwwQkFBd0IsS0FBSyxLQUFMLENBQVcsVUFBdkM7QUFDRSxvQkFBUyxLQUFLLGNBRGhCO0FBRUU7QUFBQTtBQUFBLGFBQUssV0FBVSxZQUFmO0FBQTZCO0FBQTdCLFVBRkY7QUFHRTtBQUFBO0FBQUEsYUFBSyxXQUFVLFlBQWY7QUFBNkIsZ0JBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUI7QUFBOUMsVUFIRjtBQUlHLGNBSkg7QUFLRTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUEsZUFBSyxXQUFVLFlBQWY7QUFBQTtBQUFxQyxnQkFBckM7QUFBQTtBQUEyQztBQUEzQyxZQURBO0FBRUE7QUFBQTtBQUFBLGVBQUssV0FBVSxnQkFBZjtBQUFBO0FBQXdDLHNCQUF4QztBQUFBO0FBQW9EO0FBQXBEO0FBRkEsVUFMRjtBQVNFO0FBQUE7QUFBQSxhQUFNLFdBQVUsWUFBaEI7QUFBOEI7QUFBOUI7QUFURixRQURGO0FBYUQ7Ozs7OzttQkFHWSxLIiwiZmlsZSI6IjAuNzg3ZDQyZGRkYjRhNzg5NjdiMzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFJvdXRlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zZXRBY3RpdmVSb3V0ZSA9IHRoaXMuc2V0QWN0aXZlUm91dGUuYmluZCh0aGlzKTtcbiAgfVxuICBzZXRBY3RpdmVSb3V0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5zZWxlY3RSb3V0ZSh7XG4gICAgICByb3V0ZTogdGhpcy5wcm9wcy5yb3V0ZSxcbiAgICAgIHN0eWxlOiB0aGlzLnByb3BzLmNsYXNzU3R5bGVcbiAgICB9KTtcbiAgfVxuICBtc1RvVGltZShkdXJhdGlvbikge1xuICAgIGxldCBtaW51dGVzID0gZHVyYXRpb24uZ2V0TWludXRlcygpLFxuICAgICAgICBob3VycyA9IHBhcnNlSW50KGR1cmF0aW9uLmdldEhvdXJzKCkpO1xuICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgaG91cnMpXG4gICAgLy8gaG91cnMgPSAoaG91cnMgPiAxMikgPyBob3VycyAtIDEyO1xuICAgIG1pbnV0ZXMgPSAobWludXRlcyA8IDEwKSA/IFwiMFwiICsgbWludXRlcyA6IG1pbnV0ZXM7XG4gICAgcmV0dXJuIGhvdXJzICsgXCI6XCIgKyBtaW51dGVzO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICAvLyBGb3JtYXR0aW5nIGZvciBkaXNwbGF5Li4uY291bGQgYmUgZG9uZSBiZXR0ZXI/XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5yb3V0ZS5kdXJhdGlvbilcbiAgICBsZXQgZXRhID0gTWF0aC5yb3VuZCh0aGlzLnByb3BzLnJvdXRlLmV0YS82MCksXG4gICAgICAgIHRvdGFsVGltZSA9IE1hdGgucm91bmQoKHRoaXMucHJvcHMucm91dGUuZHVyYXRpb24gKyB0aGlzLnByb3BzLnJvdXRlLmV0YSkpKjEwMDAsXG4gICAgICAgIGV0YU1pbnV0ZXMgPSBldGEgPD0gMSA/ICdtaW51dGUnIDogJ21pbnV0ZXMnLFxuICAgICAgICB0b3RhbE1pbnV0ZXMgPSB0b3RhbFRpbWUgPD0gMSA/ICdtaW51dGUnIDogJ21pbnV0ZXMnLFxuICAgICAgICBjb3N0ID0gdGhpcy5wcm9wcy5yb3V0ZS5oaWdoX2VzdGltYXRlID8gJyQnICsgKE1hdGgucm91bmQodGhpcy5wcm9wcy5yb3V0ZS5oaWdoX2VzdGltYXRlLzEwMCkpIDogJ01ldGVyZWQnLFxuICAgICAgICBkaXNjbGFpbWVyID0gdGhpcy5wcm9wcy5jYXJwb29sID8gJ1xcbk1heSBtYWtlIGFkZGl0aW9uYWwgc3RvcHMnIDogJycsXG4gICAgICAgIGltYWdlID0gdGhpcy5wcm9wcy5tYXJrZXIgPyA8aW1nIHNyYz17dGhpcy5wcm9wcy5tYXJrZXJ9IGNsYXNzTmFtZT1cIm1hcmtlci10YWdcIi8+IDogbnVsbDtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5tc1RvVGltZSgoKG5ldyBEYXRlKCkpKSkpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBjbGFzc05hbWU9e2BsaXN0LWl0ZW0gJHt0aGlzLnByb3BzLmNsYXNzU3R5bGV9YH1cbiAgICAgICAgb25DbGljaz17dGhpcy5zZXRBY3RpdmVSb3V0ZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91dGUtY29zdFwiPntjb3N0fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdXRlLW5hbWVcIj57dGhpcy5wcm9wcy5yb3V0ZS5kaXNwbGF5X25hbWV9PC9kaXY+XG4gICAgICAgIHtpbWFnZX1cbiAgICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcml2ZXItZXRhXCI+UGlja3VwOiB7ZXRhfSB7ZXRhTWludXRlc308L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3V0ZS1kdXJhdGlvblwiPlRvdGFsOiB7dG90YWxUaW1lfSB7dG90YWxNaW51dGVzfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGlzY2xhaW1lclwiPntkaXNjbGFpbWVyfTwvc3Bhbj5cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSb3V0ZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2NvbXBvbmVudHMvcm91dGUuanN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==