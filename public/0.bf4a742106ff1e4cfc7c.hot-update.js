webpackHotUpdate(0,{

/***/ 93:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
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
	    displayName: 'Route'
	  }
	};
	
	var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	  filename: '/Users/ianmrak/Documents/Projects/drivus/src/js/components/route.jsx',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _reactTransformHmr2(Component, id);
	  };
	}
	
	var Route = _wrapComponent('Route')(function (_Component) {
	  _inherits(Route, _Component);
	
	  function Route(props) {
	    _classCallCheck(this, Route);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Route).call(this, props));
	
	    _this.setActiveRoute = _this.setActiveRoute.bind(_this);
	    return _this;
	  }
	
	  _createClass(Route, [{
	    key: 'setActiveRoute',
	    value: function setActiveRoute() {
	      return this.props.selectRoute({
	        route: this.props.route,
	        style: this.props.classStyle
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      // Formatting for display...could be done better?
	      var eta = Math.round(this.props.route.eta / 60),
	          totalTime = Math.round((this.props.route.duration + this.props.route.eta) / 60),
	          etaMinutes = eta <= 1 ? 'minute' : 'minutes',
	          totalMinutes = totalTime <= 1 ? 'minute' : 'minutes',
	          cost = this.props.route.high_estimate ? '$' + Math.round(this.props.route.high_estimate / 100) : 'Metered',
	          disclaimer = this.props.carpool ? '\nMay make additional stops' : '',
	          image = this.props.marker ? _react3.default.createElement('img', { src: this.props.marker, className: 'marker-tag' }) : null;
	      console.log(Date.now() / 100 + totalTime);
	
	      return _react3.default.createElement(
	        'li',
	        { className: 'list-item ' + this.props.classStyle,
	          onClick: this.setActiveRoute },
	        _react3.default.createElement(
	          'div',
	          { className: 'route-cost' },
	          cost
	        ),
	        _react3.default.createElement(
	          'div',
	          { className: 'route-name' },
	          this.props.route.display_name
	        ),
	        image,
	        _react3.default.createElement(
	          'div',
	          null,
	          _react3.default.createElement(
	            'div',
	            { className: 'driver-eta' },
	            'Pickup: ',
	            eta,
	            ' ',
	            etaMinutes
	          ),
	          _react3.default.createElement(
	            'div',
	            { className: 'route-duration' },
	            'Total: ',
	            totalTime,
	            ' ',
	            totalMinutes
	          )
	        ),
	        _react3.default.createElement(
	          'span',
	          { className: 'disclaimer' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9yb3V0ZS5qc3g/ZDUyYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHRSxrQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEZBQ1gsS0FEVzs7QUFFakIsV0FBSyxjQUFMLEdBQXNCLE1BQUssY0FBTCxDQUFvQixJQUFwQixPQUF0QjtBQUZpQjtBQUdsQjs7OztzQ0FDZ0I7QUFDZixjQUFPLEtBQUssS0FBTCxDQUFXLFdBQVgsQ0FBdUI7QUFDNUIsZ0JBQU8sS0FBSyxLQUFMLENBQVcsS0FEVTtBQUU1QixnQkFBTyxLQUFLLEtBQUwsQ0FBVztBQUZVLFFBQXZCLENBQVA7QUFJRDs7OzhCQUNRO0FBQ1A7QUFDQSxXQUFJLE1BQU0sS0FBSyxLQUFMLENBQVcsS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixHQUFqQixHQUFxQixFQUFoQyxDQUFWO0FBQUEsV0FDSSxZQUFZLEtBQUssS0FBTCxDQUFXLENBQUMsS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixRQUFqQixHQUE0QixLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLEdBQTlDLElBQW1ELEVBQTlELENBRGhCO0FBQUEsV0FFSSxhQUFhLE9BQU8sQ0FBUCxHQUFXLFFBQVgsR0FBc0IsU0FGdkM7QUFBQSxXQUdJLGVBQWUsYUFBYSxDQUFiLEdBQWlCLFFBQWpCLEdBQTRCLFNBSC9DO0FBQUEsV0FJSSxPQUFPLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsYUFBakIsR0FBaUMsTUFBTyxLQUFLLEtBQUwsQ0FBVyxLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLGFBQWpCLEdBQStCLEdBQTFDLENBQXhDLEdBQTBGLFNBSnJHO0FBQUEsV0FLSSxhQUFhLEtBQUssS0FBTCxDQUFXLE9BQVgsR0FBcUIsNkJBQXJCLEdBQXFELEVBTHRFO0FBQUEsV0FNSSxRQUFRLEtBQUssS0FBTCxDQUFXLE1BQVgsR0FBb0IsdUNBQUssS0FBSyxLQUFLLEtBQUwsQ0FBVyxNQUFyQixFQUE2QixXQUFVLFlBQXZDLEdBQXBCLEdBQTRFLElBTnhGO0FBT0ksZUFBUSxHQUFSLENBQWMsS0FBSyxHQUFMLEtBQVcsR0FBWixHQUFtQixTQUFoQzs7QUFFSixjQUNFO0FBQUE7QUFBQSxXQUFJLDBCQUF3QixLQUFLLEtBQUwsQ0FBVyxVQUF2QztBQUNFLG9CQUFTLEtBQUssY0FEaEI7QUFFRTtBQUFBO0FBQUEsYUFBSyxXQUFVLFlBQWY7QUFBNkI7QUFBN0IsVUFGRjtBQUdFO0FBQUE7QUFBQSxhQUFLLFdBQVUsWUFBZjtBQUE2QixnQkFBSyxLQUFMLENBQVcsS0FBWCxDQUFpQjtBQUE5QyxVQUhGO0FBSUcsY0FKSDtBQUtFO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQSxlQUFLLFdBQVUsWUFBZjtBQUFBO0FBQXFDLGdCQUFyQztBQUFBO0FBQTJDO0FBQTNDLFlBREE7QUFFQTtBQUFBO0FBQUEsZUFBSyxXQUFVLGdCQUFmO0FBQUE7QUFBd0Msc0JBQXhDO0FBQUE7QUFBb0Q7QUFBcEQ7QUFGQSxVQUxGO0FBU0U7QUFBQTtBQUFBLGFBQU0sV0FBVSxZQUFoQjtBQUE4QjtBQUE5QjtBQVRGLFFBREY7QUFhRDs7Ozs7O21CQUdZLEsiLCJmaWxlIjoiMC5iZjRhNzQyMTA2ZmYxZTRjZmM3Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgUm91dGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnNldEFjdGl2ZVJvdXRlID0gdGhpcy5zZXRBY3RpdmVSb3V0ZS5iaW5kKHRoaXMpO1xuICB9XG4gIHNldEFjdGl2ZVJvdXRlKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnNlbGVjdFJvdXRlKHtcbiAgICAgIHJvdXRlOiB0aGlzLnByb3BzLnJvdXRlLFxuICAgICAgc3R5bGU6IHRoaXMucHJvcHMuY2xhc3NTdHlsZVxuICAgIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICAvLyBGb3JtYXR0aW5nIGZvciBkaXNwbGF5Li4uY291bGQgYmUgZG9uZSBiZXR0ZXI/XG4gICAgbGV0IGV0YSA9IE1hdGgucm91bmQodGhpcy5wcm9wcy5yb3V0ZS5ldGEvNjApLFxuICAgICAgICB0b3RhbFRpbWUgPSBNYXRoLnJvdW5kKCh0aGlzLnByb3BzLnJvdXRlLmR1cmF0aW9uICsgdGhpcy5wcm9wcy5yb3V0ZS5ldGEpLzYwKSxcbiAgICAgICAgZXRhTWludXRlcyA9IGV0YSA8PSAxID8gJ21pbnV0ZScgOiAnbWludXRlcycsXG4gICAgICAgIHRvdGFsTWludXRlcyA9IHRvdGFsVGltZSA8PSAxID8gJ21pbnV0ZScgOiAnbWludXRlcycsXG4gICAgICAgIGNvc3QgPSB0aGlzLnByb3BzLnJvdXRlLmhpZ2hfZXN0aW1hdGUgPyAnJCcgKyAoTWF0aC5yb3VuZCh0aGlzLnByb3BzLnJvdXRlLmhpZ2hfZXN0aW1hdGUvMTAwKSkgOiAnTWV0ZXJlZCcsXG4gICAgICAgIGRpc2NsYWltZXIgPSB0aGlzLnByb3BzLmNhcnBvb2wgPyAnXFxuTWF5IG1ha2UgYWRkaXRpb25hbCBzdG9wcycgOiAnJyxcbiAgICAgICAgaW1hZ2UgPSB0aGlzLnByb3BzLm1hcmtlciA/IDxpbWcgc3JjPXt0aGlzLnByb3BzLm1hcmtlcn0gY2xhc3NOYW1lPVwibWFya2VyLXRhZ1wiLz4gOiBudWxsO1xuICAgICAgICBjb25zb2xlLmxvZygoKERhdGUubm93KCkvMTAwKSArIHRvdGFsVGltZSkpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGxpIGNsYXNzTmFtZT17YGxpc3QtaXRlbSAke3RoaXMucHJvcHMuY2xhc3NTdHlsZX1gfVxuICAgICAgICBvbkNsaWNrPXt0aGlzLnNldEFjdGl2ZVJvdXRlfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3V0ZS1jb3N0XCI+e2Nvc3R9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91dGUtbmFtZVwiPnt0aGlzLnByb3BzLnJvdXRlLmRpc3BsYXlfbmFtZX08L2Rpdj5cbiAgICAgICAge2ltYWdlfVxuICAgICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyaXZlci1ldGFcIj5QaWNrdXA6IHtldGF9IHtldGFNaW51dGVzfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdXRlLWR1cmF0aW9uXCI+VG90YWw6IHt0b3RhbFRpbWV9IHt0b3RhbE1pbnV0ZXN9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkaXNjbGFpbWVyXCI+e2Rpc2NsYWltZXJ9PC9zcGFuPlxuICAgICAgPC9saT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9yb3V0ZS5qc3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9