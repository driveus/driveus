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
	      hours = hours < 10 ? "0" + hours : hours;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9yb3V0ZS5qc3g/ZDUyYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHRSxrQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEZBQ1gsS0FEVzs7QUFFakIsV0FBSyxjQUFMLEdBQXNCLE1BQUssY0FBTCxDQUFvQixJQUFwQixPQUF0QjtBQUZpQjtBQUdsQjs7OztzQ0FDZ0I7QUFDZixjQUFPLEtBQUssS0FBTCxDQUFXLFdBQVgsQ0FBdUI7QUFDNUIsZ0JBQU8sS0FBSyxLQUFMLENBQVcsS0FEVTtBQUU1QixnQkFBTyxLQUFLLEtBQUwsQ0FBVztBQUZVLFFBQXZCLENBQVA7QUFJRDs7OzhCQUNRLFEsRUFBVTtBQUNqQixXQUFJLFVBQVUsU0FBVSxZQUFVLE9BQUssRUFBZixDQUFELEdBQXFCLEVBQTlCLENBQWQ7QUFBQSxXQUNJLFFBQVEsU0FBVSxZQUFVLE9BQUssRUFBTCxHQUFRLEVBQWxCLENBQUQsR0FBd0IsRUFBakMsQ0FEWjtBQUVBLGVBQVMsUUFBUSxFQUFULEdBQWUsTUFBTSxLQUFyQixHQUE2QixLQUFyQztBQUNBLGlCQUFXLFVBQVUsRUFBWCxHQUFpQixNQUFNLE9BQXZCLEdBQWlDLE9BQTNDO0FBQ0EsY0FBTyxRQUFRLEdBQVIsR0FBYyxPQUFyQjtBQUNEOzs7OEJBQ1E7QUFDUDtBQUNBLGVBQVEsR0FBUixDQUFZLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsUUFBN0I7QUFDQSxXQUFJLE1BQU0sS0FBSyxLQUFMLENBQVcsS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixHQUFqQixHQUFxQixFQUFoQyxDQUFWO0FBQUEsV0FDSSxZQUFZLEtBQUssS0FBTCxDQUFZLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsUUFBakIsR0FBNEIsS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixHQUF6RCxJQUErRCxJQUQvRTtBQUFBLFdBRUksYUFBYSxPQUFPLENBQVAsR0FBVyxRQUFYLEdBQXNCLFNBRnZDO0FBQUEsV0FHSSxlQUFlLGFBQWEsQ0FBYixHQUFpQixRQUFqQixHQUE0QixTQUgvQztBQUFBLFdBSUksT0FBTyxLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLGFBQWpCLEdBQWlDLE1BQU8sS0FBSyxLQUFMLENBQVcsS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixhQUFqQixHQUErQixHQUExQyxDQUF4QyxHQUEwRixTQUpyRztBQUFBLFdBS0ksYUFBYSxLQUFLLEtBQUwsQ0FBVyxPQUFYLEdBQXFCLDZCQUFyQixHQUFxRCxFQUx0RTtBQUFBLFdBTUksUUFBUSxLQUFLLEtBQUwsQ0FBVyxNQUFYLEdBQW9CLHVDQUFLLEtBQUssS0FBSyxLQUFMLENBQVcsTUFBckIsRUFBNkIsV0FBVSxZQUF2QyxHQUFwQixHQUE0RSxJQU54RjtBQU9JLGVBQVEsR0FBUixDQUFZLEtBQUssUUFBTCxDQUFnQixLQUFLLEdBQUwsRUFBRCxHQUFlLFNBQTlCLENBQVo7O0FBRUosY0FDRTtBQUFBO0FBQUEsV0FBSSwwQkFBd0IsS0FBSyxLQUFMLENBQVcsVUFBdkM7QUFDRSxvQkFBUyxLQUFLLGNBRGhCO0FBRUU7QUFBQTtBQUFBLGFBQUssV0FBVSxZQUFmO0FBQTZCO0FBQTdCLFVBRkY7QUFHRTtBQUFBO0FBQUEsYUFBSyxXQUFVLFlBQWY7QUFBNkIsZ0JBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUI7QUFBOUMsVUFIRjtBQUlHLGNBSkg7QUFLRTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUEsZUFBSyxXQUFVLFlBQWY7QUFBQTtBQUFxQyxnQkFBckM7QUFBQTtBQUEyQztBQUEzQyxZQURBO0FBRUE7QUFBQTtBQUFBLGVBQUssV0FBVSxnQkFBZjtBQUFBO0FBQXdDLHNCQUF4QztBQUFBO0FBQW9EO0FBQXBEO0FBRkEsVUFMRjtBQVNFO0FBQUE7QUFBQSxhQUFNLFdBQVUsWUFBaEI7QUFBOEI7QUFBOUI7QUFURixRQURGO0FBYUQ7Ozs7OzttQkFHWSxLIiwiZmlsZSI6IjAuM2ZiZGIxMmFiYmMxMjhmNGE0OTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFJvdXRlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zZXRBY3RpdmVSb3V0ZSA9IHRoaXMuc2V0QWN0aXZlUm91dGUuYmluZCh0aGlzKTtcbiAgfVxuICBzZXRBY3RpdmVSb3V0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5zZWxlY3RSb3V0ZSh7XG4gICAgICByb3V0ZTogdGhpcy5wcm9wcy5yb3V0ZSxcbiAgICAgIHN0eWxlOiB0aGlzLnByb3BzLmNsYXNzU3R5bGVcbiAgICB9KTtcbiAgfVxuICBtc1RvVGltZShkdXJhdGlvbikge1xuICAgIGxldCBtaW51dGVzID0gcGFyc2VJbnQoKGR1cmF0aW9uLygxMDAwKjYwKSklNjApLFxuICAgICAgICBob3VycyA9IHBhcnNlSW50KChkdXJhdGlvbi8oMTAwMCo2MCo2MCkpJTI0KTtcbiAgICBob3VycyA9IChob3VycyA8IDEwKSA/IFwiMFwiICsgaG91cnMgOiBob3VycztcbiAgICBtaW51dGVzID0gKG1pbnV0ZXMgPCAxMCkgPyBcIjBcIiArIG1pbnV0ZXMgOiBtaW51dGVzO1xuICAgIHJldHVybiBob3VycyArIFwiOlwiICsgbWludXRlcztcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgLy8gRm9ybWF0dGluZyBmb3IgZGlzcGxheS4uLmNvdWxkIGJlIGRvbmUgYmV0dGVyP1xuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMucm91dGUuZHVyYXRpb24pXG4gICAgbGV0IGV0YSA9IE1hdGgucm91bmQodGhpcy5wcm9wcy5yb3V0ZS5ldGEvNjApLFxuICAgICAgICB0b3RhbFRpbWUgPSBNYXRoLnJvdW5kKCh0aGlzLnByb3BzLnJvdXRlLmR1cmF0aW9uICsgdGhpcy5wcm9wcy5yb3V0ZS5ldGEpKSoxMDAwLFxuICAgICAgICBldGFNaW51dGVzID0gZXRhIDw9IDEgPyAnbWludXRlJyA6ICdtaW51dGVzJyxcbiAgICAgICAgdG90YWxNaW51dGVzID0gdG90YWxUaW1lIDw9IDEgPyAnbWludXRlJyA6ICdtaW51dGVzJyxcbiAgICAgICAgY29zdCA9IHRoaXMucHJvcHMucm91dGUuaGlnaF9lc3RpbWF0ZSA/ICckJyArIChNYXRoLnJvdW5kKHRoaXMucHJvcHMucm91dGUuaGlnaF9lc3RpbWF0ZS8xMDApKSA6ICdNZXRlcmVkJyxcbiAgICAgICAgZGlzY2xhaW1lciA9IHRoaXMucHJvcHMuY2FycG9vbCA/ICdcXG5NYXkgbWFrZSBhZGRpdGlvbmFsIHN0b3BzJyA6ICcnLFxuICAgICAgICBpbWFnZSA9IHRoaXMucHJvcHMubWFya2VyID8gPGltZyBzcmM9e3RoaXMucHJvcHMubWFya2VyfSBjbGFzc05hbWU9XCJtYXJrZXItdGFnXCIvPiA6IG51bGw7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubXNUb1RpbWUoKChEYXRlLm5vdygpKSArIHRvdGFsVGltZSkpKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8bGkgY2xhc3NOYW1lPXtgbGlzdC1pdGVtICR7dGhpcy5wcm9wcy5jbGFzc1N0eWxlfWB9XG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuc2V0QWN0aXZlUm91dGV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdXRlLWNvc3RcIj57Y29zdH08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3V0ZS1uYW1lXCI+e3RoaXMucHJvcHMucm91dGUuZGlzcGxheV9uYW1lfTwvZGl2PlxuICAgICAgICB7aW1hZ2V9XG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJpdmVyLWV0YVwiPlBpY2t1cDoge2V0YX0ge2V0YU1pbnV0ZXN9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91dGUtZHVyYXRpb25cIj5Ub3RhbDoge3RvdGFsVGltZX0ge3RvdGFsTWludXRlc308L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRpc2NsYWltZXJcIj57ZGlzY2xhaW1lcn08L3NwYW4+XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUm91dGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jb21wb25lbnRzL3JvdXRlLmpzeFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=