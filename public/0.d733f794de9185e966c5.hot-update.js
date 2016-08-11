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
	          arrivalTime = this.msToTime(Date.now() + totalTime);
	      cost = this.props.route.high_estimate ? '$' + Math.round(this.props.route.high_estimate / 100) : 'Metered', disclaimer = this.props.carpool ? '\nMay make additional stops' : '', image = this.props.marker ? _react3.default.createElement("img", { src: this.props.marker, className: "marker-tag" }) : null;
	
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
	            arrivalTime
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9yb3V0ZS5qc3g/ZDUyYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHRSxrQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEZBQ1gsS0FEVzs7QUFFakIsV0FBSyxjQUFMLEdBQXNCLE1BQUssY0FBTCxDQUFvQixJQUFwQixPQUF0QjtBQUZpQjtBQUdsQjs7OztzQ0FDZ0I7QUFDZixjQUFPLEtBQUssS0FBTCxDQUFXLFdBQVgsQ0FBdUI7QUFDNUIsZ0JBQU8sS0FBSyxLQUFMLENBQVcsS0FEVTtBQUU1QixnQkFBTyxLQUFLLEtBQUwsQ0FBVztBQUZVLFFBQXZCLENBQVA7QUFJRDs7OzhCQUNRLEUsRUFBSTtBQUNYLFdBQUksV0FBVyxJQUFJLElBQUosQ0FBUyxFQUFULENBQWY7QUFDQSxXQUFJLFVBQVUsU0FBUyxTQUFTLFVBQVQsRUFBVCxDQUFkO0FBQUEsV0FDSSxRQUFRLFNBQVMsU0FBUyxRQUFULEVBQVQsQ0FEWjtBQUVBLGVBQVEsUUFBUSxFQUFSLEdBQWEsUUFBUSxFQUFyQixHQUEwQixLQUFsQztBQUNBLGlCQUFXLFVBQVUsRUFBWCxHQUFpQixNQUFNLE9BQXZCLEdBQWlDLE9BQTNDO0FBQ0EsY0FBTyxRQUFRLEdBQVIsR0FBYyxPQUFyQjtBQUNEOzs7OEJBQ1E7QUFDUDtBQUNBLGVBQVEsR0FBUixDQUFZLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsUUFBN0I7QUFDQSxXQUFJLE1BQU0sS0FBSyxLQUFMLENBQVcsS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixHQUFqQixHQUFxQixFQUFoQyxDQUFWO0FBQUEsV0FDSSxZQUFZLEtBQUssS0FBTCxDQUFZLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsUUFBakIsR0FBNEIsS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixHQUF6RCxJQUErRCxJQUQvRTtBQUFBLFdBRUksYUFBYSxPQUFPLENBQVAsR0FBVyxRQUFYLEdBQXNCLFNBRnZDO0FBQUEsV0FHSSxjQUFlLEtBQUssUUFBTCxDQUFjLEtBQUssR0FBTCxLQUFXLFNBQXpCLENBSG5CO0FBSUksY0FBTyxLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLGFBQWpCLEdBQWlDLE1BQU8sS0FBSyxLQUFMLENBQVcsS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixhQUFqQixHQUErQixHQUExQyxDQUF4QyxHQUEwRixTQUFqRyxFQUNBLGFBQWEsS0FBSyxLQUFMLENBQVcsT0FBWCxHQUFxQiw2QkFBckIsR0FBcUQsRUFEbEUsRUFFQSxRQUFRLEtBQUssS0FBTCxDQUFXLE1BQVgsR0FBb0IsdUNBQUssS0FBSyxLQUFLLEtBQUwsQ0FBVyxNQUFyQixFQUE2QixXQUFVLFlBQXZDLEdBQXBCLEdBQTRFLElBRnBGOztBQUlKLGNBQ0U7QUFBQTtBQUFBLFdBQUksMEJBQXdCLEtBQUssS0FBTCxDQUFXLFVBQXZDO0FBQ0Usb0JBQVMsS0FBSyxjQURoQjtBQUVFO0FBQUE7QUFBQSxhQUFLLFdBQVUsWUFBZjtBQUE2QjtBQUE3QixVQUZGO0FBR0U7QUFBQTtBQUFBLGFBQUssV0FBVSxZQUFmO0FBQTZCLGdCQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCO0FBQTlDLFVBSEY7QUFJRyxjQUpIO0FBS0U7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBLGVBQUssV0FBVSxZQUFmO0FBQUE7QUFBcUMsZ0JBQXJDO0FBQUE7QUFBMkM7QUFBM0MsWUFEQTtBQUVBO0FBQUE7QUFBQSxlQUFLLFdBQVUsZ0JBQWY7QUFBQTtBQUF3QztBQUF4QztBQUZBLFVBTEY7QUFTRTtBQUFBO0FBQUEsYUFBTSxXQUFVLFlBQWhCO0FBQThCO0FBQTlCO0FBVEYsUUFERjtBQWFEOzs7Ozs7bUJBR1ksSyIsImZpbGUiOiIwLmQ3MzNmNzk0ZGU5MTg1ZTk2NmM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBSb3V0ZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc2V0QWN0aXZlUm91dGUgPSB0aGlzLnNldEFjdGl2ZVJvdXRlLmJpbmQodGhpcyk7XG4gIH1cbiAgc2V0QWN0aXZlUm91dGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuc2VsZWN0Um91dGUoe1xuICAgICAgcm91dGU6IHRoaXMucHJvcHMucm91dGUsXG4gICAgICBzdHlsZTogdGhpcy5wcm9wcy5jbGFzc1N0eWxlXG4gICAgfSk7XG4gIH1cbiAgbXNUb1RpbWUobXMpIHtcbiAgICBsZXQgZHVyYXRpb24gPSBuZXcgRGF0ZShtcylcbiAgICBsZXQgbWludXRlcyA9IHBhcnNlSW50KGR1cmF0aW9uLmdldE1pbnV0ZXMoKSksXG4gICAgICAgIGhvdXJzID0gcGFyc2VJbnQoZHVyYXRpb24uZ2V0SG91cnMoKSk7XG4gICAgaG91cnMgPSBob3VycyA+IDEyID8gaG91cnMgLSAxMiA6IGhvdXJzO1xuICAgIG1pbnV0ZXMgPSAobWludXRlcyA8IDEwKSA/IFwiMFwiICsgbWludXRlcyA6IG1pbnV0ZXM7XG4gICAgcmV0dXJuIGhvdXJzICsgXCI6XCIgKyBtaW51dGVzO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICAvLyBGb3JtYXR0aW5nIGZvciBkaXNwbGF5Li4uY291bGQgYmUgZG9uZSBiZXR0ZXI/XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5yb3V0ZS5kdXJhdGlvbilcbiAgICBsZXQgZXRhID0gTWF0aC5yb3VuZCh0aGlzLnByb3BzLnJvdXRlLmV0YS82MCksXG4gICAgICAgIHRvdGFsVGltZSA9IE1hdGgucm91bmQoKHRoaXMucHJvcHMucm91dGUuZHVyYXRpb24gKyB0aGlzLnByb3BzLnJvdXRlLmV0YSkpKjEwMDAsXG4gICAgICAgIGV0YU1pbnV0ZXMgPSBldGEgPD0gMSA/ICdtaW51dGUnIDogJ21pbnV0ZXMnLFxuICAgICAgICBhcnJpdmFsVGltZSA9ICh0aGlzLm1zVG9UaW1lKERhdGUubm93KCkrdG90YWxUaW1lKSk7XG4gICAgICAgIGNvc3QgPSB0aGlzLnByb3BzLnJvdXRlLmhpZ2hfZXN0aW1hdGUgPyAnJCcgKyAoTWF0aC5yb3VuZCh0aGlzLnByb3BzLnJvdXRlLmhpZ2hfZXN0aW1hdGUvMTAwKSkgOiAnTWV0ZXJlZCcsXG4gICAgICAgIGRpc2NsYWltZXIgPSB0aGlzLnByb3BzLmNhcnBvb2wgPyAnXFxuTWF5IG1ha2UgYWRkaXRpb25hbCBzdG9wcycgOiAnJyxcbiAgICAgICAgaW1hZ2UgPSB0aGlzLnByb3BzLm1hcmtlciA/IDxpbWcgc3JjPXt0aGlzLnByb3BzLm1hcmtlcn0gY2xhc3NOYW1lPVwibWFya2VyLXRhZ1wiLz4gOiBudWxsO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBjbGFzc05hbWU9e2BsaXN0LWl0ZW0gJHt0aGlzLnByb3BzLmNsYXNzU3R5bGV9YH1cbiAgICAgICAgb25DbGljaz17dGhpcy5zZXRBY3RpdmVSb3V0ZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91dGUtY29zdFwiPntjb3N0fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdXRlLW5hbWVcIj57dGhpcy5wcm9wcy5yb3V0ZS5kaXNwbGF5X25hbWV9PC9kaXY+XG4gICAgICAgIHtpbWFnZX1cbiAgICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcml2ZXItZXRhXCI+UGlja3VwOiB7ZXRhfSB7ZXRhTWludXRlc308L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3V0ZS1kdXJhdGlvblwiPlRvdGFsOiB7YXJyaXZhbFRpbWV9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkaXNjbGFpbWVyXCI+e2Rpc2NsYWltZXJ9PC9zcGFuPlxuICAgICAgPC9saT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9yb3V0ZS5qc3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9