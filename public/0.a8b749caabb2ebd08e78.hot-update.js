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
	          totalTime = Math.round((this.props.route.duration + this.props.route.eta) / 60),
	          etaMinutes = eta <= 1 ? 'minute' : 'minutes',
	          totalMinutes = totalTime <= 1 ? 'minute' : 'minutes',
	          cost = this.props.route.high_estimate ? '$' + Math.round(this.props.route.high_estimate / 100) : 'Metered',
	          disclaimer = this.props.carpool ? '\nMay make additional stops' : '',
	          image = this.props.marker ? _react3.default.createElement("img", { src: this.props.marker, className: "marker-tag" }) : null;
	      console.log(this.msToTime(Date.now() / 100 + totalTime));
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9yb3V0ZS5qc3g/ZDUyYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHRSxrQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEZBQ1gsS0FEVzs7QUFFakIsV0FBSyxjQUFMLEdBQXNCLE1BQUssY0FBTCxDQUFvQixJQUFwQixPQUF0QjtBQUZpQjtBQUdsQjs7OztzQ0FDZ0I7QUFDZixjQUFPLEtBQUssS0FBTCxDQUFXLFdBQVgsQ0FBdUI7QUFDNUIsZ0JBQU8sS0FBSyxLQUFMLENBQVcsS0FEVTtBQUU1QixnQkFBTyxLQUFLLEtBQUwsQ0FBVztBQUZVLFFBQXZCLENBQVA7QUFJRDs7OzhCQUNRLFEsRUFBVTtBQUNqQixXQUFJLGVBQWUsU0FBVSxXQUFTLElBQVYsR0FBZ0IsR0FBekIsQ0FBbkI7QUFBQSxXQUNNLFVBQVUsU0FBVSxXQUFTLElBQVYsR0FBZ0IsRUFBekIsQ0FEaEI7QUFBQSxXQUVNLFVBQVUsU0FBVSxZQUFVLE9BQUssRUFBZixDQUFELEdBQXFCLEVBQTlCLENBRmhCO0FBQUEsV0FHTSxRQUFRLFNBQVUsWUFBVSxPQUFLLEVBQUwsR0FBUSxFQUFsQixDQUFELEdBQXdCLEVBQWpDLENBSGQ7O0FBS0EsZUFBUyxRQUFRLEVBQVQsR0FBZSxNQUFNLEtBQXJCLEdBQTZCLEtBQXJDO0FBQ0EsaUJBQVcsVUFBVSxFQUFYLEdBQWlCLE1BQU0sT0FBdkIsR0FBaUMsT0FBM0M7QUFDQSxpQkFBVyxVQUFVLEVBQVgsR0FBaUIsTUFBTSxPQUF2QixHQUFpQyxPQUEzQzs7QUFFQSxjQUFPLFFBQVEsR0FBUixHQUFjLE9BQWQsR0FBd0IsR0FBeEIsR0FBOEIsT0FBOUIsR0FBd0MsR0FBeEMsR0FBOEMsWUFBckQ7QUFDRDs7OzhCQUNRO0FBQ1A7QUFDQSxXQUFJLE1BQU0sS0FBSyxLQUFMLENBQVcsS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixHQUFqQixHQUFxQixFQUFoQyxDQUFWO0FBQUEsV0FDSSxZQUFZLEtBQUssS0FBTCxDQUFXLENBQUMsS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixRQUFqQixHQUE0QixLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLEdBQTlDLElBQW1ELEVBQTlELENBRGhCO0FBQUEsV0FFSSxhQUFhLE9BQU8sQ0FBUCxHQUFXLFFBQVgsR0FBc0IsU0FGdkM7QUFBQSxXQUdJLGVBQWUsYUFBYSxDQUFiLEdBQWlCLFFBQWpCLEdBQTRCLFNBSC9DO0FBQUEsV0FJSSxPQUFPLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsYUFBakIsR0FBaUMsTUFBTyxLQUFLLEtBQUwsQ0FBVyxLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLGFBQWpCLEdBQStCLEdBQTFDLENBQXhDLEdBQTBGLFNBSnJHO0FBQUEsV0FLSSxhQUFhLEtBQUssS0FBTCxDQUFXLE9BQVgsR0FBcUIsNkJBQXJCLEdBQXFELEVBTHRFO0FBQUEsV0FNSSxRQUFRLEtBQUssS0FBTCxDQUFXLE1BQVgsR0FBb0IsdUNBQUssS0FBSyxLQUFLLEtBQUwsQ0FBVyxNQUFyQixFQUE2QixXQUFVLFlBQXZDLEdBQXBCLEdBQTRFLElBTnhGO0FBT0ksZUFBUSxHQUFSLENBQVksS0FBSyxRQUFMLENBQWdCLEtBQUssR0FBTCxLQUFXLEdBQVosR0FBbUIsU0FBbEMsQ0FBWjs7QUFFSixjQUNFO0FBQUE7QUFBQSxXQUFJLDBCQUF3QixLQUFLLEtBQUwsQ0FBVyxVQUF2QztBQUNFLG9CQUFTLEtBQUssY0FEaEI7QUFFRTtBQUFBO0FBQUEsYUFBSyxXQUFVLFlBQWY7QUFBNkI7QUFBN0IsVUFGRjtBQUdFO0FBQUE7QUFBQSxhQUFLLFdBQVUsWUFBZjtBQUE2QixnQkFBSyxLQUFMLENBQVcsS0FBWCxDQUFpQjtBQUE5QyxVQUhGO0FBSUcsY0FKSDtBQUtFO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQSxlQUFLLFdBQVUsWUFBZjtBQUFBO0FBQXFDLGdCQUFyQztBQUFBO0FBQTJDO0FBQTNDLFlBREE7QUFFQTtBQUFBO0FBQUEsZUFBSyxXQUFVLGdCQUFmO0FBQUE7QUFBd0Msc0JBQXhDO0FBQUE7QUFBb0Q7QUFBcEQ7QUFGQSxVQUxGO0FBU0U7QUFBQTtBQUFBLGFBQU0sV0FBVSxZQUFoQjtBQUE4QjtBQUE5QjtBQVRGLFFBREY7QUFhRDs7Ozs7O21CQUdZLEsiLCJmaWxlIjoiMC5hOGI3NDljYWFiYjJlYmQwOGU3OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgUm91dGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnNldEFjdGl2ZVJvdXRlID0gdGhpcy5zZXRBY3RpdmVSb3V0ZS5iaW5kKHRoaXMpO1xuICB9XG4gIHNldEFjdGl2ZVJvdXRlKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnNlbGVjdFJvdXRlKHtcbiAgICAgIHJvdXRlOiB0aGlzLnByb3BzLnJvdXRlLFxuICAgICAgc3R5bGU6IHRoaXMucHJvcHMuY2xhc3NTdHlsZVxuICAgIH0pO1xuICB9XG4gIG1zVG9UaW1lKGR1cmF0aW9uKSB7XG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IHBhcnNlSW50KChkdXJhdGlvbiUxMDAwKS8xMDApXG4gICAgICAgICwgc2Vjb25kcyA9IHBhcnNlSW50KChkdXJhdGlvbi8xMDAwKSU2MClcbiAgICAgICAgLCBtaW51dGVzID0gcGFyc2VJbnQoKGR1cmF0aW9uLygxMDAwKjYwKSklNjApXG4gICAgICAgICwgaG91cnMgPSBwYXJzZUludCgoZHVyYXRpb24vKDEwMDAqNjAqNjApKSUyNCk7XG5cbiAgICBob3VycyA9IChob3VycyA8IDEwKSA/IFwiMFwiICsgaG91cnMgOiBob3VycztcbiAgICBtaW51dGVzID0gKG1pbnV0ZXMgPCAxMCkgPyBcIjBcIiArIG1pbnV0ZXMgOiBtaW51dGVzO1xuICAgIHNlY29uZHMgPSAoc2Vjb25kcyA8IDEwKSA/IFwiMFwiICsgc2Vjb25kcyA6IHNlY29uZHM7XG5cbiAgICByZXR1cm4gaG91cnMgKyBcIjpcIiArIG1pbnV0ZXMgKyBcIjpcIiArIHNlY29uZHMgKyBcIi5cIiArIG1pbGxpc2Vjb25kcztcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgLy8gRm9ybWF0dGluZyBmb3IgZGlzcGxheS4uLmNvdWxkIGJlIGRvbmUgYmV0dGVyP1xuICAgIGxldCBldGEgPSBNYXRoLnJvdW5kKHRoaXMucHJvcHMucm91dGUuZXRhLzYwKSxcbiAgICAgICAgdG90YWxUaW1lID0gTWF0aC5yb3VuZCgodGhpcy5wcm9wcy5yb3V0ZS5kdXJhdGlvbiArIHRoaXMucHJvcHMucm91dGUuZXRhKS82MCksXG4gICAgICAgIGV0YU1pbnV0ZXMgPSBldGEgPD0gMSA/ICdtaW51dGUnIDogJ21pbnV0ZXMnLFxuICAgICAgICB0b3RhbE1pbnV0ZXMgPSB0b3RhbFRpbWUgPD0gMSA/ICdtaW51dGUnIDogJ21pbnV0ZXMnLFxuICAgICAgICBjb3N0ID0gdGhpcy5wcm9wcy5yb3V0ZS5oaWdoX2VzdGltYXRlID8gJyQnICsgKE1hdGgucm91bmQodGhpcy5wcm9wcy5yb3V0ZS5oaWdoX2VzdGltYXRlLzEwMCkpIDogJ01ldGVyZWQnLFxuICAgICAgICBkaXNjbGFpbWVyID0gdGhpcy5wcm9wcy5jYXJwb29sID8gJ1xcbk1heSBtYWtlIGFkZGl0aW9uYWwgc3RvcHMnIDogJycsXG4gICAgICAgIGltYWdlID0gdGhpcy5wcm9wcy5tYXJrZXIgPyA8aW1nIHNyYz17dGhpcy5wcm9wcy5tYXJrZXJ9IGNsYXNzTmFtZT1cIm1hcmtlci10YWdcIi8+IDogbnVsbDtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5tc1RvVGltZSgoKERhdGUubm93KCkvMTAwKSArIHRvdGFsVGltZSkpKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8bGkgY2xhc3NOYW1lPXtgbGlzdC1pdGVtICR7dGhpcy5wcm9wcy5jbGFzc1N0eWxlfWB9XG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuc2V0QWN0aXZlUm91dGV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdXRlLWNvc3RcIj57Y29zdH08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3V0ZS1uYW1lXCI+e3RoaXMucHJvcHMucm91dGUuZGlzcGxheV9uYW1lfTwvZGl2PlxuICAgICAgICB7aW1hZ2V9XG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJpdmVyLWV0YVwiPlBpY2t1cDoge2V0YX0ge2V0YU1pbnV0ZXN9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91dGUtZHVyYXRpb25cIj5Ub3RhbDoge3RvdGFsVGltZX0ge3RvdGFsTWludXRlc308L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRpc2NsYWltZXJcIj57ZGlzY2xhaW1lcn08L3NwYW4+XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUm91dGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jb21wb25lbnRzL3JvdXRlLmpzeFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=