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
	      console.log((Date.now() / 100 + this.props.route.duration).toTimeString());
	      var eta = Math.round(this.props.route.eta / 60),
	          totalTime = Math.round((this.props.route.duration + this.props.route.eta) / 60),
	          etaMinutes = eta <= 1 ? 'minute' : 'minutes',
	          totalMinutes = totalTime <= 1 ? 'minute' : 'minutes',
	          cost = this.props.route.high_estimate ? '$' + Math.round(this.props.route.high_estimate / 100) : 'Metered',
	          disclaimer = this.props.carpool ? '\nMay make additional stops' : '',
	          image = this.props.marker ? _react3.default.createElement('img', { src: this.props.marker, className: 'marker-tag' }) : null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9yb3V0ZS5qc3g/ZDUyYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHRSxrQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEZBQ1gsS0FEVzs7QUFFakIsV0FBSyxjQUFMLEdBQXNCLE1BQUssY0FBTCxDQUFvQixJQUFwQixPQUF0QjtBQUZpQjtBQUdsQjs7OztzQ0FDZ0I7QUFDZixjQUFPLEtBQUssS0FBTCxDQUFXLFdBQVgsQ0FBdUI7QUFDNUIsZ0JBQU8sS0FBSyxLQUFMLENBQVcsS0FEVTtBQUU1QixnQkFBTyxLQUFLLEtBQUwsQ0FBVztBQUZVLFFBQXZCLENBQVA7QUFJRDs7OzhCQUNRO0FBQ1A7QUFDQSxlQUFRLEdBQVIsQ0FBWSxDQUFFLEtBQUssR0FBTCxLQUFXLEdBQVosR0FBbUIsS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixRQUFyQyxFQUErQyxZQUEvQyxFQUFaO0FBQ0EsV0FBSSxNQUFNLEtBQUssS0FBTCxDQUFXLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsR0FBakIsR0FBcUIsRUFBaEMsQ0FBVjtBQUFBLFdBQ0ksWUFBWSxLQUFLLEtBQUwsQ0FBVyxDQUFDLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsUUFBakIsR0FBNEIsS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixHQUE5QyxJQUFtRCxFQUE5RCxDQURoQjtBQUFBLFdBRUksYUFBYSxPQUFPLENBQVAsR0FBVyxRQUFYLEdBQXNCLFNBRnZDO0FBQUEsV0FHSSxlQUFlLGFBQWEsQ0FBYixHQUFpQixRQUFqQixHQUE0QixTQUgvQztBQUFBLFdBSUksT0FBTyxLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLGFBQWpCLEdBQWlDLE1BQU8sS0FBSyxLQUFMLENBQVcsS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixhQUFqQixHQUErQixHQUExQyxDQUF4QyxHQUEwRixTQUpyRztBQUFBLFdBS0ksYUFBYSxLQUFLLEtBQUwsQ0FBVyxPQUFYLEdBQXFCLDZCQUFyQixHQUFxRCxFQUx0RTtBQUFBLFdBTUksUUFBUSxLQUFLLEtBQUwsQ0FBVyxNQUFYLEdBQW9CLHVDQUFLLEtBQUssS0FBSyxLQUFMLENBQVcsTUFBckIsRUFBNkIsV0FBVSxZQUF2QyxHQUFwQixHQUE0RSxJQU54RjtBQU9BLGNBQ0U7QUFBQTtBQUFBLFdBQUksMEJBQXdCLEtBQUssS0FBTCxDQUFXLFVBQXZDO0FBQ0Usb0JBQVMsS0FBSyxjQURoQjtBQUVFO0FBQUE7QUFBQSxhQUFLLFdBQVUsWUFBZjtBQUE2QjtBQUE3QixVQUZGO0FBR0U7QUFBQTtBQUFBLGFBQUssV0FBVSxZQUFmO0FBQTZCLGdCQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCO0FBQTlDLFVBSEY7QUFJRyxjQUpIO0FBS0U7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBLGVBQUssV0FBVSxZQUFmO0FBQUE7QUFBcUMsZ0JBQXJDO0FBQUE7QUFBMkM7QUFBM0MsWUFEQTtBQUVBO0FBQUE7QUFBQSxlQUFLLFdBQVUsZ0JBQWY7QUFBQTtBQUF3QyxzQkFBeEM7QUFBQTtBQUFvRDtBQUFwRDtBQUZBLFVBTEY7QUFTRTtBQUFBO0FBQUEsYUFBTSxXQUFVLFlBQWhCO0FBQThCO0FBQTlCO0FBVEYsUUFERjtBQWFEOzs7Ozs7bUJBR1ksSyIsImZpbGUiOiIwLjYyNTY1NGI3OWUwMTI1MDljYWI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBSb3V0ZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc2V0QWN0aXZlUm91dGUgPSB0aGlzLnNldEFjdGl2ZVJvdXRlLmJpbmQodGhpcyk7XG4gIH1cbiAgc2V0QWN0aXZlUm91dGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuc2VsZWN0Um91dGUoe1xuICAgICAgcm91dGU6IHRoaXMucHJvcHMucm91dGUsXG4gICAgICBzdHlsZTogdGhpcy5wcm9wcy5jbGFzc1N0eWxlXG4gICAgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIC8vIEZvcm1hdHRpbmcgZm9yIGRpc3BsYXkuLi5jb3VsZCBiZSBkb25lIGJldHRlcj9cbiAgICBjb25zb2xlLmxvZygoKERhdGUubm93KCkvMTAwKSArIHRoaXMucHJvcHMucm91dGUuZHVyYXRpb24pLnRvVGltZVN0cmluZygpKVxuICAgIGxldCBldGEgPSBNYXRoLnJvdW5kKHRoaXMucHJvcHMucm91dGUuZXRhLzYwKSxcbiAgICAgICAgdG90YWxUaW1lID0gTWF0aC5yb3VuZCgodGhpcy5wcm9wcy5yb3V0ZS5kdXJhdGlvbiArIHRoaXMucHJvcHMucm91dGUuZXRhKS82MCksXG4gICAgICAgIGV0YU1pbnV0ZXMgPSBldGEgPD0gMSA/ICdtaW51dGUnIDogJ21pbnV0ZXMnLFxuICAgICAgICB0b3RhbE1pbnV0ZXMgPSB0b3RhbFRpbWUgPD0gMSA/ICdtaW51dGUnIDogJ21pbnV0ZXMnLFxuICAgICAgICBjb3N0ID0gdGhpcy5wcm9wcy5yb3V0ZS5oaWdoX2VzdGltYXRlID8gJyQnICsgKE1hdGgucm91bmQodGhpcy5wcm9wcy5yb3V0ZS5oaWdoX2VzdGltYXRlLzEwMCkpIDogJ01ldGVyZWQnLFxuICAgICAgICBkaXNjbGFpbWVyID0gdGhpcy5wcm9wcy5jYXJwb29sID8gJ1xcbk1heSBtYWtlIGFkZGl0aW9uYWwgc3RvcHMnIDogJycsXG4gICAgICAgIGltYWdlID0gdGhpcy5wcm9wcy5tYXJrZXIgPyA8aW1nIHNyYz17dGhpcy5wcm9wcy5tYXJrZXJ9IGNsYXNzTmFtZT1cIm1hcmtlci10YWdcIi8+IDogbnVsbDtcbiAgICByZXR1cm4gKFxuICAgICAgPGxpIGNsYXNzTmFtZT17YGxpc3QtaXRlbSAke3RoaXMucHJvcHMuY2xhc3NTdHlsZX1gfVxuICAgICAgICBvbkNsaWNrPXt0aGlzLnNldEFjdGl2ZVJvdXRlfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3V0ZS1jb3N0XCI+e2Nvc3R9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91dGUtbmFtZVwiPnt0aGlzLnByb3BzLnJvdXRlLmRpc3BsYXlfbmFtZX08L2Rpdj5cbiAgICAgICAge2ltYWdlfVxuICAgICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyaXZlci1ldGFcIj5QaWNrdXA6IHtldGF9IHtldGFNaW51dGVzfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdXRlLWR1cmF0aW9uXCI+VG90YWw6IHt0b3RhbFRpbWV9IHt0b3RhbE1pbnV0ZXN9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkaXNjbGFpbWVyXCI+e2Rpc2NsYWltZXJ9PC9zcGFuPlxuICAgICAgPC9saT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9yb3V0ZS5qc3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9