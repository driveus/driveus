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
	    value: function msToTime(ms) {
	      var duration = new Date(ms);
	      var minutes = parseInt(duration.getMinutes()),
	          hours = parseInt(duration.getHours());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9yb3V0ZS5qc3g/ZDUyYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHRSxrQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEZBQ1gsS0FEVzs7QUFFakIsV0FBSyxjQUFMLEdBQXNCLE1BQUssY0FBTCxDQUFvQixJQUFwQixPQUF0QjtBQUZpQjtBQUdsQjs7OztzQ0FDZ0I7QUFDZixjQUFPLEtBQUssS0FBTCxDQUFXLFdBQVgsQ0FBdUI7QUFDNUIsZ0JBQU8sS0FBSyxLQUFMLENBQVcsS0FEVTtBQUU1QixnQkFBTyxLQUFLLEtBQUwsQ0FBVztBQUZVLFFBQXZCLENBQVA7QUFJRDs7OzhCQUNRLEUsRUFBSTtBQUNYLFdBQUksV0FBVyxJQUFJLElBQUosQ0FBUyxFQUFULENBQWY7QUFDQSxXQUFJLFVBQVUsU0FBUyxTQUFTLFVBQVQsRUFBVCxDQUFkO0FBQUEsV0FDSSxRQUFRLFNBQVMsU0FBUyxRQUFULEVBQVQsQ0FEWjtBQUVBLGVBQVEsUUFBUSxFQUFSLEdBQWEsUUFBUSxFQUFyQixHQUEwQixLQUFsQztBQUNBLGlCQUFXLFVBQVUsRUFBWCxHQUFpQixNQUFNLE9BQXZCLEdBQWlDLE9BQTNDO0FBQ0EsY0FBTyxRQUFRLEdBQVIsR0FBYyxPQUFyQjtBQUNEOzs7OEJBQ1E7QUFDUDtBQUNBLGVBQVEsR0FBUixDQUFZLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsUUFBN0I7QUFDQSxXQUFJLE1BQU0sS0FBSyxLQUFMLENBQVcsS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixHQUFqQixHQUFxQixFQUFoQyxDQUFWO0FBQUEsV0FDSSxZQUFZLEtBQUssS0FBTCxDQUFZLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsUUFBakIsR0FBNEIsS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixHQUF6RCxJQUErRCxJQUQvRTtBQUFBLFdBRUksYUFBYSxPQUFPLENBQVAsR0FBVyxRQUFYLEdBQXNCLFNBRnZDO0FBQUEsV0FHSSxlQUFlLGFBQWEsQ0FBYixHQUFpQixRQUFqQixHQUE0QixTQUgvQztBQUFBLFdBSUksT0FBTyxLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLGFBQWpCLEdBQWlDLE1BQU8sS0FBSyxLQUFMLENBQVcsS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixhQUFqQixHQUErQixHQUExQyxDQUF4QyxHQUEwRixTQUpyRztBQUFBLFdBS0ksYUFBYSxLQUFLLEtBQUwsQ0FBVyxPQUFYLEdBQXFCLDZCQUFyQixHQUFxRCxFQUx0RTtBQUFBLFdBTUksUUFBUSxLQUFLLEtBQUwsQ0FBVyxNQUFYLEdBQW9CLHVDQUFLLEtBQUssS0FBSyxLQUFMLENBQVcsTUFBckIsRUFBNkIsV0FBVSxZQUF2QyxHQUFwQixHQUE0RSxJQU54RjtBQU9JLGVBQVEsR0FBUixDQUFZLEtBQUssUUFBTCxDQUFnQixLQUFLLEdBQUwsS0FBVyxTQUEzQixDQUFaOztBQUVKLGNBQ0U7QUFBQTtBQUFBLFdBQUksMEJBQXdCLEtBQUssS0FBTCxDQUFXLFVBQXZDO0FBQ0Usb0JBQVMsS0FBSyxjQURoQjtBQUVFO0FBQUE7QUFBQSxhQUFLLFdBQVUsWUFBZjtBQUE2QjtBQUE3QixVQUZGO0FBR0U7QUFBQTtBQUFBLGFBQUssV0FBVSxZQUFmO0FBQTZCLGdCQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCO0FBQTlDLFVBSEY7QUFJRyxjQUpIO0FBS0U7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBLGVBQUssV0FBVSxZQUFmO0FBQUE7QUFBcUMsZ0JBQXJDO0FBQUE7QUFBMkM7QUFBM0MsWUFEQTtBQUVBO0FBQUE7QUFBQSxlQUFLLFdBQVUsZ0JBQWY7QUFBQTtBQUF3QyxzQkFBeEM7QUFBQTtBQUFvRDtBQUFwRDtBQUZBLFVBTEY7QUFTRTtBQUFBO0FBQUEsYUFBTSxXQUFVLFlBQWhCO0FBQThCO0FBQTlCO0FBVEYsUUFERjtBQWFEOzs7Ozs7bUJBR1ksSyIsImZpbGUiOiIwLmQxZmE4ODY5NzVmMjI0MmZhYTdlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBSb3V0ZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc2V0QWN0aXZlUm91dGUgPSB0aGlzLnNldEFjdGl2ZVJvdXRlLmJpbmQodGhpcyk7XG4gIH1cbiAgc2V0QWN0aXZlUm91dGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuc2VsZWN0Um91dGUoe1xuICAgICAgcm91dGU6IHRoaXMucHJvcHMucm91dGUsXG4gICAgICBzdHlsZTogdGhpcy5wcm9wcy5jbGFzc1N0eWxlXG4gICAgfSk7XG4gIH1cbiAgbXNUb1RpbWUobXMpIHtcbiAgICBsZXQgZHVyYXRpb24gPSBuZXcgRGF0ZShtcylcbiAgICBsZXQgbWludXRlcyA9IHBhcnNlSW50KGR1cmF0aW9uLmdldE1pbnV0ZXMoKSksXG4gICAgICAgIGhvdXJzID0gcGFyc2VJbnQoZHVyYXRpb24uZ2V0SG91cnMoKSk7XG4gICAgaG91cnMgPSBob3VycyA+IDEyID8gaG91cnMgLSAxMiA6IGhvdXJzO1xuICAgIG1pbnV0ZXMgPSAobWludXRlcyA8IDEwKSA/IFwiMFwiICsgbWludXRlcyA6IG1pbnV0ZXM7XG4gICAgcmV0dXJuIGhvdXJzICsgXCI6XCIgKyBtaW51dGVzO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICAvLyBGb3JtYXR0aW5nIGZvciBkaXNwbGF5Li4uY291bGQgYmUgZG9uZSBiZXR0ZXI/XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5yb3V0ZS5kdXJhdGlvbilcbiAgICBsZXQgZXRhID0gTWF0aC5yb3VuZCh0aGlzLnByb3BzLnJvdXRlLmV0YS82MCksXG4gICAgICAgIHRvdGFsVGltZSA9IE1hdGgucm91bmQoKHRoaXMucHJvcHMucm91dGUuZHVyYXRpb24gKyB0aGlzLnByb3BzLnJvdXRlLmV0YSkpKjEwMDAsXG4gICAgICAgIGV0YU1pbnV0ZXMgPSBldGEgPD0gMSA/ICdtaW51dGUnIDogJ21pbnV0ZXMnLFxuICAgICAgICB0b3RhbE1pbnV0ZXMgPSB0b3RhbFRpbWUgPD0gMSA/ICdtaW51dGUnIDogJ21pbnV0ZXMnLFxuICAgICAgICBjb3N0ID0gdGhpcy5wcm9wcy5yb3V0ZS5oaWdoX2VzdGltYXRlID8gJyQnICsgKE1hdGgucm91bmQodGhpcy5wcm9wcy5yb3V0ZS5oaWdoX2VzdGltYXRlLzEwMCkpIDogJ01ldGVyZWQnLFxuICAgICAgICBkaXNjbGFpbWVyID0gdGhpcy5wcm9wcy5jYXJwb29sID8gJ1xcbk1heSBtYWtlIGFkZGl0aW9uYWwgc3RvcHMnIDogJycsXG4gICAgICAgIGltYWdlID0gdGhpcy5wcm9wcy5tYXJrZXIgPyA8aW1nIHNyYz17dGhpcy5wcm9wcy5tYXJrZXJ9IGNsYXNzTmFtZT1cIm1hcmtlci10YWdcIi8+IDogbnVsbDtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5tc1RvVGltZSgoKERhdGUubm93KCkrdG90YWxUaW1lKSkpKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8bGkgY2xhc3NOYW1lPXtgbGlzdC1pdGVtICR7dGhpcy5wcm9wcy5jbGFzc1N0eWxlfWB9XG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuc2V0QWN0aXZlUm91dGV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdXRlLWNvc3RcIj57Y29zdH08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3V0ZS1uYW1lXCI+e3RoaXMucHJvcHMucm91dGUuZGlzcGxheV9uYW1lfTwvZGl2PlxuICAgICAgICB7aW1hZ2V9XG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJpdmVyLWV0YVwiPlBpY2t1cDoge2V0YX0ge2V0YU1pbnV0ZXN9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91dGUtZHVyYXRpb25cIj5Ub3RhbDoge3RvdGFsVGltZX0ge3RvdGFsTWludXRlc308L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRpc2NsYWltZXJcIj57ZGlzY2xhaW1lcn08L3NwYW4+XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUm91dGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jb21wb25lbnRzL3JvdXRlLmpzeFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=