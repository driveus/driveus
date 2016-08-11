webpackHotUpdate(0,{

/***/ 192:
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
	
	var _reactRedux = __webpack_require__(34);
	
	var _index = __webpack_require__(58);
	
	var _redux = __webpack_require__(26);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
	  ActiveRoute: {
	    displayName: 'ActiveRoute'
	  }
	};
	
	var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	  filename: '/Users/ianmrak/Documents/Projects/drivus/src/js/containers/activeRoute.jsx',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _reactTransformHmr2(Component, id);
	  };
	}
	
	var ActiveRoute = _wrapComponent('ActiveRoute')(function (_Component) {
	  _inherits(ActiveRoute, _Component);
	
	  function ActiveRoute(props) {
	    _classCallCheck(this, ActiveRoute);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ActiveRoute).call(this, props));
	
	    _this.state = {
	      style: {
	        uber: 'uber',
	        lyft: 'lyft',
	        price: 'price',
	        time: 'time'
	      },
	      orderCab: null
	    };
	    _this.orderRide = _this.orderRide.bind(_this);
	    return _this;
	  }
	
	  _createClass(ActiveRoute, [{
	    key: 'orderRide',
	    value: function orderRide() {
	      var startAdd = this.props.currentAddress.start,
	          endAdd = this.props.currentAddress.end,
	          startLat = this.props.currentCoords.start.lat,
	          startLng = this.props.currentCoords.start.lng,
	          endLat = this.props.currentCoords.end.lat,
	          endLng = this.props.currentCoords.end.lng;
	      // Assigns order url to Uber
	      if (this.props.route.display_name.match(/uber/i)) {
	        var uberUrl = "uber://?client_id=37yHG1-x8iwme2fjogxoa3wU_4n2vWd5exCpEB8u&action=setPickup";
	        var uberCoords = '&pickup[latitude]=' + startLat + '&pickup[longitude]=' + startLng + '&pickup[formatted_address]=' + encodeURIComponent(startAdd) + '&dropoff[latitude]=' + endLat + '&dropoff[longitude]=' + endLng + '&dropoff[formatted_address]=' + encodeURIComponent(endAdd) + '&product_id=a1111c8c-c720-46c3-8534-2fcdd730040d';
	        var orderUber = uberUrl + uberCoords;
	        this.setState({ orderCab: orderUber });
	        // Assigns order url to lyft
	      } else if (this.props.route.display_name.match(/lyft/i)) {
	        var lyftUrl = 'lyft://ridetype?id=' + this.props.route.display_name.replace(' ', '_').toLowerCase() + '&partner=_2bLC2X8YfE8bVC1qcLa0vOQut5r1lB_';
	        var lyftCoods = '&pickup[latitude]=' + startLat + '&pickup[longitude]=' + startLng + '&destination[latitude]=' + endLat + '&destination[longitude]=' + endLng;
	        var orderLyft = lyftUrl + lyftCoods;
	        this.setState({ orderCab: orderLyft });
	      }
	    }
	  }, {
	    key: 'msToTime',
	    value: function msToTime(ms) {
	      console.log(ms);
	      var duration = new Date(ms),
	          minutes = parseInt(duration.getMinutes()),
	          hours = parseInt(duration.getHours()),
	          timeOfDay = hours >= 12 ? 'PM' : 'AM';
	      hours = hours > 12 ? hours - 12 : hours;
	      minutes = minutes < 10 ? "0" + minutes : minutes;
	      return hours + ":" + minutes + ' ' + timeOfDay;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      // Formatting for display...could be done better?
	      if (!this.props.route) {
	        return _react3.default.createElement('div', null);
	      }
	      var eta = Math.round(this.props.route.eta / 60),
	          arrivalTime = this.msToTime(Date.now() + totalTime),
	          totalTime = Math.round(this.props.route.duration + this.props.route.eta) * 1000,
	          etaMinutes = eta <= 1 ? 'minute' : 'minutes',
	          cost = this.props.route.high_estimate ? '$' + Math.round(this.props.route.high_estimate / 100) : 'Metered',
	          backgroundColor = this.state.style[this.props.style],
	          classes = 'selected-route-container ' + backgroundColor;
	      console.log(Date.now() + totalTime);
	      return _react3.default.createElement(
	        'div',
	        null,
	        _react3.default.createElement('div', { onClick: this.props.deselectRoute, className: 'lightbox-background' }),
	        _react3.default.createElement(
	          'div',
	          { className: classes },
	          _react3.default.createElement(
	            'h1',
	            null,
	            this.props.route.display_name
	          ),
	          _react3.default.createElement(
	            'h1',
	            null,
	            cost
	          ),
	          _react3.default.createElement(
	            'p',
	            null,
	            'Pickup: ',
	            eta,
	            ' ',
	            etaMinutes
	          ),
	          _react3.default.createElement(
	            'p',
	            null,
	            'Total: ',
	            arrivalTime
	          ),
	          _react3.default.createElement(
	            'a',
	            { href: this.state.orderCab, target: '_blank' },
	            _react3.default.createElement(
	              'button',
	              { id: 'order-btn', onClick: this.orderRide },
	              'Order Ride'
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return ActiveRoute;
	}(_react2.Component));
	
	function mapStateToProps(state) {
	  return {
	    currentAddress: state.currentAddress,
	    currentCoords: state.currentCoords,
	    route: state.activeRoute.route,
	    style: state.activeRoute.style
	  };
	}
	function mapDispatchToProps(dispatch) {
	  return (0, _redux.bindActionCreators)({ deselectRoute: _index.deselectRoute }, dispatch);
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ActiveRoute);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29udGFpbmVycy9hY3RpdmVSb3V0ZS5qc3g/MmIwMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHRSx3QkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0dBQ1gsS0FEVzs7QUFFakIsV0FBSyxLQUFMLEdBQWE7QUFDWCxjQUFPO0FBQ0wsZUFBTSxNQUREO0FBRUwsZUFBTSxNQUZEO0FBR0wsZ0JBQU8sT0FIRjtBQUlMLGVBQU07QUFKRCxRQURJO0FBT1gsaUJBQVU7QUFQQyxNQUFiO0FBU0EsV0FBSyxTQUFMLEdBQWlCLE1BQUssU0FBTCxDQUFlLElBQWYsT0FBakI7QUFYaUI7QUFZbEI7Ozs7aUNBQ1c7QUFDVixXQUFJLFdBQVcsS0FBSyxLQUFMLENBQVcsY0FBWCxDQUEwQixLQUF6QztBQUFBLFdBQ0ksU0FBUyxLQUFLLEtBQUwsQ0FBVyxjQUFYLENBQTBCLEdBRHZDO0FBQUEsV0FFSSxXQUFXLEtBQUssS0FBTCxDQUFXLGFBQVgsQ0FBeUIsS0FBekIsQ0FBK0IsR0FGOUM7QUFBQSxXQUdJLFdBQVcsS0FBSyxLQUFMLENBQVcsYUFBWCxDQUF5QixLQUF6QixDQUErQixHQUg5QztBQUFBLFdBSUksU0FBUyxLQUFLLEtBQUwsQ0FBVyxhQUFYLENBQXlCLEdBQXpCLENBQTZCLEdBSjFDO0FBQUEsV0FLSSxTQUFTLEtBQUssS0FBTCxDQUFXLGFBQVgsQ0FBeUIsR0FBekIsQ0FBNkIsR0FMMUM7QUFNQTtBQUNBLFdBQUcsS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixZQUFqQixDQUE4QixLQUE5QixDQUFvQyxPQUFwQyxDQUFILEVBQWlEO0FBQy9DLGFBQUksVUFBVSw2RUFBZDtBQUNBLGFBQUksb0NBQWtDLFFBQWxDLDJCQUFnRSxRQUFoRSxtQ0FBc0csbUJBQW1CLFFBQW5CLENBQXRHLDJC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LFFBQXBCLEVBQThCLFFBQU8sUUFBckM7QUFDQztBQUFBO0FBQUEsaUJBQVEsSUFBRyxXQUFYLEVBQXVCLFNBQVMsS0FBSyxTQUFyQztBQUFBO0FBQUE7QUFERDtBQUxKO0FBRkYsUUFERjtBQWNEOzs7Ozs7QUFHSCxVQUFTLGVBQVQsQ0FBeUIsS0FBekIsRUFBZ0M7QUFDOUIsVUFBTztBQUNMLHFCQUFnQixNQUFNLGNBRGpCO0FBRUwsb0JBQWUsTUFBTSxhQUZoQjtBQUdMLFlBQU8sTUFBTSxXQUFOLENBQWtCLEtBSHBCO0FBSUwsWUFBTyxNQUFNLFdBQU4sQ0FBa0I7QUFKcEIsSUFBUDtBQU1EO0FBQ0QsVUFBUyxrQkFBVCxDQUE0QixRQUE1QixFQUFzQztBQUNwQyxVQUFPLCtCQUFtQixFQUFFLG1DQUFGLEVBQW5CLEVBQXNDLFFBQXRDLENBQVA7QUFDRDttQkFDYyx5QkFBUSxlQUFSLEVBQXlCLGtCQUF6QixFQUE2QyxXQUE3QyxDIiwiZmlsZSI6IjAuYTczY2I1YmM5OWE5OTM4MTI4ZDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgZGVzZWxlY3RSb3V0ZSB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXguanMnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuXG5jbGFzcyBBY3RpdmVSb3V0ZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzdHlsZToge1xuICAgICAgICB1YmVyOiAndWJlcicsXG4gICAgICAgIGx5ZnQ6ICdseWZ0JyxcbiAgICAgICAgcHJpY2U6ICdwcmljZScsXG4gICAgICAgIHRpbWU6ICd0aW1lJ1xuICAgICAgfSxcbiAgICAgIG9yZGVyQ2FiOiBudWxsXG4gICAgfVxuICAgIHRoaXMub3JkZXJSaWRlID0gdGhpcy5vcmRlclJpZGUuYmluZCh0aGlzKTtcbiAgfVxuICBvcmRlclJpZGUoKSB7XG4gICAgbGV0IHN0YXJ0QWRkID0gdGhpcy5wcm9wcy5jdXJyZW50QWRkcmVzcy5zdGFydCxcbiAgICAgICAgZW5kQWRkID0gdGhpcy5wcm9wcy5jdXJyZW50QWRkcmVzcy5lbmQsXG4gICAgICAgIHN0YXJ0TGF0ID0gdGhpcy5wcm9wcy5jdXJyZW50Q29vcmRzLnN0YXJ0LmxhdCxcbiAgICAgICAgc3RhcnRMbmcgPSB0aGlzLnByb3BzLmN1cnJlbnRDb29yZHMuc3RhcnQubG5nLFxuICAgICAgICBlbmRMYXQgPSB0aGlzLnByb3BzLmN1cnJlbnRDb29yZHMuZW5kLmxhdCxcbiAgICAgICAgZW5kTG5nID0gdGhpcy5wcm9wcy5jdXJyZW50Q29vcmRzLmVuZC5sbmc7XG4gICAgLy8gQXNzaWducyBvcmRlciB1cmwgdG8gVWJlclxuICAgIGlmKHRoaXMucHJvcHMucm91dGUuZGlzcGxheV9uYW1lLm1hdGNoKC91YmVyL2kpKSB7XG4gICAgICBsZXQgdWJlclVybCA9IFwidWJlcjovLz9jbGllbnRfaWQ9Mzd5SEcxLXg4aXdtZTJmam9neG9hM3dVXzRuMnZXZDVleENwRUI4dSZhY3Rpb249c2V0UGlja3VwXCI7XG4gICAgICBsZXQgdWJlckNvb3JkcyA9IGAmcGlja3VwW2xhdGl0dWRlXT0ke3N0YXJ0TGF0fSZwaWNrdXBbbG9uZ2l0dWRlXT0ke3N0YXJ0TG5nfSZwaWNrdXBbZm9ybWF0dGVkX2FkZHJlc3NdPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHN0YXJ0QWRkKX0mZHJvcG9mZltsYXRpdHVkZV09JHtlbmRMYXR9JmRyb3BvZmZbbG9uZ2l0dWRlXT0ke2VuZExuZ30mZHJvcG9mZltmb3JtYXR0ZWRfYWRkcmVzc109JHtlbmNvZGVVUklDb21wb25lbnQoZW5kQWRkKX0mcHJvZHVjdF9pZD1hMTExMWM4Yy1jNzIwLTQ2YzMtODUzNC0yZmNkZDczMDA0MGRgXG4gICAgICBsZXQgb3JkZXJVYmVyID0gdWJlclVybCArIHViZXJDb29yZHM7XG4gICAgICB0aGlzLnNldFN0YXRlKHtvcmRlckNhYjogb3JkZXJVYmVyfSlcbiAgICAgIC8vIEFzc2lnbnMgb3JkZXIgdXJsIHRvIGx5ZnRcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMucm91dGUuZGlzcGxheV9uYW1lLm1hdGNoKC9seWZ0L2kpKSB7XG4gICAgICBsZXQgbHlmdFVybCA9IGBseWZ0Oi8vcmlkZXR5cGU/aWQ9JHt0aGlzLnByb3BzLnJvdXRlLmRpc3BsYXlfbmFtZS5yZXBsYWNlKCcgJywgJ18nKS50b0xvd2VyQ2FzZSgpfSZwYXJ0bmVyPV8yYkxDMlg4WWZFOGJWQzFxY0xhMHZPUXV0NXIxbEJfYDtcbiAgICAgIGxldCBseWZ0Q29vZHMgPSBgJnBpY2t1cFtsYXRpdHVkZV09JHtzdGFydExhdH0mcGlja3VwW2xvbmdpdHVkZV09JHtzdGFydExuZ30mZGVzdGluYXRpb25bbGF0aXR1ZGVdPSR7ZW5kTGF0fSZkZXN0aW5hdGlvbltsb25naXR1ZGVdPSR7ZW5kTG5nfWBcbiAgICAgIGxldCBvcmRlckx5ZnQgPSBseWZ0VXJsICsgbHlmdENvb2RzO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7b3JkZXJDYWI6IG9yZGVyTHlmdH0pXG4gICAgfVxuICB9XG4gIG1zVG9UaW1lKG1zKSB7XG4gICAgY29uc29sZS5sb2cobXMpXG4gICAgbGV0IGR1cmF0aW9uID0gbmV3IERhdGUobXMpLFxuICAgICAgICBtaW51dGVzID0gcGFyc2VJbnQoZHVyYXRpb24uZ2V0TWludXRlcygpKSxcbiAgICAgICAgaG91cnMgPSBwYXJzZUludChkdXJhdGlvbi5nZXRIb3VycygpKSxcbiAgICAgICAgdGltZU9mRGF5ID0gaG91cnMgPj0gMTIgPyAnUE0nIDogJ0FNJztcbiAgICBob3VycyA9IGhvdXJzID4gMTIgPyBob3VycyAtIDEyIDogaG91cnM7XG4gICAgbWludXRlcyA9IChtaW51dGVzIDwgMTApID8gXCIwXCIgKyBtaW51dGVzIDogbWludXRlcztcbiAgICByZXR1cm4gaG91cnMgKyBcIjpcIiArIG1pbnV0ZXMgKyAnICcgKyB0aW1lT2ZEYXk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIC8vIEZvcm1hdHRpbmcgZm9yIGRpc3BsYXkuLi5jb3VsZCBiZSBkb25lIGJldHRlcj9cbiAgICBpZiAoIXRoaXMucHJvcHMucm91dGUpIHsgcmV0dXJuIDxkaXY+PC9kaXY+OyB9XG4gICAgbGV0IGV0YSA9IE1hdGgucm91bmQodGhpcy5wcm9wcy5yb3V0ZS5ldGEvNjApLFxuICAgICAgICBhcnJpdmFsVGltZSA9ICh0aGlzLm1zVG9UaW1lKERhdGUubm93KCkrdG90YWxUaW1lKSksXG4gICAgICAgIHRvdGFsVGltZSA9IE1hdGgucm91bmQoKHRoaXMucHJvcHMucm91dGUuZHVyYXRpb24gKyB0aGlzLnByb3BzLnJvdXRlLmV0YSkpKjEwMDAsXG4gICAgICAgIGV0YU1pbnV0ZXMgPSBldGEgPD0gMSA/ICdtaW51dGUnIDogJ21pbnV0ZXMnLFxuICAgICAgICBjb3N0ID0gdGhpcy5wcm9wcy5yb3V0ZS5oaWdoX2VzdGltYXRlID8gJyQnICsgKE1hdGgucm91bmQodGhpcy5wcm9wcy5yb3V0ZS5oaWdoX2VzdGltYXRlLzEwMCkpIDogJ01ldGVyZWQnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLnN0YXRlLnN0eWxlW3RoaXMucHJvcHMuc3R5bGVdLFxuICAgICAgICBjbGFzc2VzID0gJ3NlbGVjdGVkLXJvdXRlLWNvbnRhaW5lciAnICsgYmFja2dyb3VuZENvbG9yO1xuICAgICAgICBjb25zb2xlLmxvZyhEYXRlLm5vdygpK3RvdGFsVGltZSlcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLnByb3BzLmRlc2VsZWN0Um91dGV9IGNsYXNzTmFtZT1cImxpZ2h0Ym94LWJhY2tncm91bmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuICAgICAgICAgIDxoMT57dGhpcy5wcm9wcy5yb3V0ZS5kaXNwbGF5X25hbWV9PC9oMT5cbiAgICAgICAgICA8aDE+e2Nvc3R9PC9oMT5cbiAgICAgICAgICA8cD5QaWNrdXA6IHtldGF9IHtldGFNaW51dGVzfTwvcD5cbiAgICAgICAgICA8cD5Ub3RhbDoge2Fycml2YWxUaW1lfTwvcD5cbiAgICAgICAgICAgIDxhIGhyZWY9e3RoaXMuc3RhdGUub3JkZXJDYWJ9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJvcmRlci1idG5cIiBvbkNsaWNrPXt0aGlzLm9yZGVyUmlkZX0+T3JkZXIgUmlkZTwvYnV0dG9uPlxuICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICBjdXJyZW50QWRkcmVzczogc3RhdGUuY3VycmVudEFkZHJlc3MsXG4gICAgY3VycmVudENvb3Jkczogc3RhdGUuY3VycmVudENvb3JkcyxcbiAgICByb3V0ZTogc3RhdGUuYWN0aXZlUm91dGUucm91dGUsXG4gICAgc3R5bGU6IHN0YXRlLmFjdGl2ZVJvdXRlLnN0eWxlXG4gIH07XG59XG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyh7IGRlc2VsZWN0Um91dGUgfSwgZGlzcGF0Y2gpXG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShBY3RpdmVSb3V0ZSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jb250YWluZXJzL2FjdGl2ZVJvdXRlLmpzeFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=