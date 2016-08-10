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
	      console.log(totalTime);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29udGFpbmVycy9hY3RpdmVSb3V0ZS5qc3g/MmIwMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHRSx3QkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0dBQ1gsS0FEVzs7QUFFakIsV0FBSyxLQUFMLEdBQWE7QUFDWCxjQUFPO0FBQ0wsZUFBTSxNQUREO0FBRUwsZUFBTSxNQUZEO0FBR0wsZ0JBQU8sT0FIRjtBQUlMLGVBQU07QUFKRCxRQURJO0FBT1gsaUJBQVU7QUFQQyxNQUFiO0FBU0EsV0FBSyxTQUFMLEdBQWlCLE1BQUssU0FBTCxDQUFlLElBQWYsT0FBakI7QUFYaUI7QUFZbEI7Ozs7aUNBQ1c7QUFDVixXQUFJLFdBQVcsS0FBSyxLQUFMLENBQVcsY0FBWCxDQUEwQixLQUF6QztBQUFBLFdBQ0ksU0FBUyxLQUFLLEtBQUwsQ0FBVyxjQUFYLENBQTBCLEdBRHZDO0FBQUEsV0FFSSxXQUFXLEtBQUssS0FBTCxDQUFXLGFBQVgsQ0FBeUIsS0FBekIsQ0FBK0IsR0FGOUM7QUFBQSxXQUdJLFdBQVcsS0FBSyxLQUFMLENBQVcsYUFBWCxDQUF5QixLQUF6QixDQUErQixHQUg5QztBQUFBLFdBSUksU0FBUyxLQUFLLEtBQUwsQ0FBVyxhQUFYLENBQXlCLEdBQXpCLENBQTZCLEdBSjFDO0FBQUEsV0FLSSxTQUFTLEtBQUssS0FBTCxDQUFXLGFBQVgsQ0FBeUIsR0FBekIsQ0FBNkIsR0FMMUM7QUFNQTtBQUNBLFdBQUcsS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixZQUFqQixDQUE4QixLQUE5QixDQUFvQyxPQUFwQyxDQUFILEVBQWlEO0FBQy9DLGFBQUksVUFBVSw2RUFBZDtBQUNBLGFBQUksb0NBQWtDLFFBQWxDLDJCQUFnRSxRQUFoRSxtQ0FBc0csbUJBQW1CLFFBQW5CLENBQXRHLDJC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TyxRQUFyQztBQUNDO0FBQUE7QUFBQSxpQkFBUSxJQUFHLFdBQVgsRUFBdUIsU0FBUyxLQUFLLFNBQXJDO0FBQUE7QUFBQTtBQUREO0FBTEo7QUFGRixRQURGO0FBY0Q7Ozs7OztBQUdILFVBQVMsZUFBVCxDQUF5QixLQUF6QixFQUFnQztBQUM5QixVQUFPO0FBQ0wscUJBQWdCLE1BQU0sY0FEakI7QUFFTCxvQkFBZSxNQUFNLGFBRmhCO0FBR0wsWUFBTyxNQUFNLFdBQU4sQ0FBa0IsS0FIcEI7QUFJTCxZQUFPLE1BQU0sV0FBTixDQUFrQjtBQUpwQixJQUFQO0FBTUQ7QUFDRCxVQUFTLGtCQUFULENBQTRCLFFBQTVCLEVBQXNDO0FBQ3BDLFVBQU8sK0JBQW1CLEVBQUUsbUNBQUYsRUFBbkIsRUFBc0MsUUFBdEMsQ0FBUDtBQUNEO21CQUNjLHlCQUFRLGVBQVIsRUFBeUIsa0JBQXpCLEVBQTZDLFdBQTdDLEMiLCJmaWxlIjoiMC5hMTU5ZDI3NTQ0MmE5YzQyOTU0OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBkZXNlbGVjdFJvdXRlIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleC5qcyc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5cbmNsYXNzIEFjdGl2ZVJvdXRlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIHViZXI6ICd1YmVyJyxcbiAgICAgICAgbHlmdDogJ2x5ZnQnLFxuICAgICAgICBwcmljZTogJ3ByaWNlJyxcbiAgICAgICAgdGltZTogJ3RpbWUnXG4gICAgICB9LFxuICAgICAgb3JkZXJDYWI6IG51bGxcbiAgICB9XG4gICAgdGhpcy5vcmRlclJpZGUgPSB0aGlzLm9yZGVyUmlkZS5iaW5kKHRoaXMpO1xuICB9XG4gIG9yZGVyUmlkZSgpIHtcbiAgICBsZXQgc3RhcnRBZGQgPSB0aGlzLnByb3BzLmN1cnJlbnRBZGRyZXNzLnN0YXJ0LFxuICAgICAgICBlbmRBZGQgPSB0aGlzLnByb3BzLmN1cnJlbnRBZGRyZXNzLmVuZCxcbiAgICAgICAgc3RhcnRMYXQgPSB0aGlzLnByb3BzLmN1cnJlbnRDb29yZHMuc3RhcnQubGF0LFxuICAgICAgICBzdGFydExuZyA9IHRoaXMucHJvcHMuY3VycmVudENvb3Jkcy5zdGFydC5sbmcsXG4gICAgICAgIGVuZExhdCA9IHRoaXMucHJvcHMuY3VycmVudENvb3Jkcy5lbmQubGF0LFxuICAgICAgICBlbmRMbmcgPSB0aGlzLnByb3BzLmN1cnJlbnRDb29yZHMuZW5kLmxuZztcbiAgICAvLyBBc3NpZ25zIG9yZGVyIHVybCB0byBVYmVyXG4gICAgaWYodGhpcy5wcm9wcy5yb3V0ZS5kaXNwbGF5X25hbWUubWF0Y2goL3ViZXIvaSkpIHtcbiAgICAgIGxldCB1YmVyVXJsID0gXCJ1YmVyOi8vP2NsaWVudF9pZD0zN3lIRzEteDhpd21lMmZqb2d4b2Ezd1VfNG4ydldkNWV4Q3BFQjh1JmFjdGlvbj1zZXRQaWNrdXBcIjtcbiAgICAgIGxldCB1YmVyQ29vcmRzID0gYCZwaWNrdXBbbGF0aXR1ZGVdPSR7c3RhcnRMYXR9JnBpY2t1cFtsb25naXR1ZGVdPSR7c3RhcnRMbmd9JnBpY2t1cFtmb3JtYXR0ZWRfYWRkcmVzc109JHtlbmNvZGVVUklDb21wb25lbnQoc3RhcnRBZGQpfSZkcm9wb2ZmW2xhdGl0dWRlXT0ke2VuZExhdH0mZHJvcG9mZltsb25naXR1ZGVdPSR7ZW5kTG5nfSZkcm9wb2ZmW2Zvcm1hdHRlZF9hZGRyZXNzXT0ke2VuY29kZVVSSUNvbXBvbmVudChlbmRBZGQpfSZwcm9kdWN0X2lkPWExMTExYzhjLWM3MjAtNDZjMy04NTM0LTJmY2RkNzMwMDQwZGBcbiAgICAgIGxldCBvcmRlclViZXIgPSB1YmVyVXJsICsgdWJlckNvb3JkcztcbiAgICAgIHRoaXMuc2V0U3RhdGUoe29yZGVyQ2FiOiBvcmRlclViZXJ9KVxuICAgICAgLy8gQXNzaWducyBvcmRlciB1cmwgdG8gbHlmdFxuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5yb3V0ZS5kaXNwbGF5X25hbWUubWF0Y2goL2x5ZnQvaSkpIHtcbiAgICAgIGxldCBseWZ0VXJsID0gYGx5ZnQ6Ly9yaWRldHlwZT9pZD0ke3RoaXMucHJvcHMucm91dGUuZGlzcGxheV9uYW1lLnJlcGxhY2UoJyAnLCAnXycpLnRvTG93ZXJDYXNlKCl9JnBhcnRuZXI9XzJiTEMyWDhZZkU4YlZDMXFjTGEwdk9RdXQ1cjFsQl9gO1xuICAgICAgbGV0IGx5ZnRDb29kcyA9IGAmcGlja3VwW2xhdGl0dWRlXT0ke3N0YXJ0TGF0fSZwaWNrdXBbbG9uZ2l0dWRlXT0ke3N0YXJ0TG5nfSZkZXN0aW5hdGlvbltsYXRpdHVkZV09JHtlbmRMYXR9JmRlc3RpbmF0aW9uW2xvbmdpdHVkZV09JHtlbmRMbmd9YFxuICAgICAgbGV0IG9yZGVyTHlmdCA9IGx5ZnRVcmwgKyBseWZ0Q29vZHM7XG4gICAgICB0aGlzLnNldFN0YXRlKHtvcmRlckNhYjogb3JkZXJMeWZ0fSlcbiAgICB9XG4gIH1cbiAgbXNUb1RpbWUobXMpIHtcbiAgICBjb25zb2xlLmxvZyhtcylcbiAgICBsZXQgZHVyYXRpb24gPSBuZXcgRGF0ZShtcyksXG4gICAgICAgIG1pbnV0ZXMgPSBwYXJzZUludChkdXJhdGlvbi5nZXRNaW51dGVzKCkpLFxuICAgICAgICBob3VycyA9IHBhcnNlSW50KGR1cmF0aW9uLmdldEhvdXJzKCkpLFxuICAgICAgICB0aW1lT2ZEYXkgPSBob3VycyA+PSAxMiA/ICdQTScgOiAnQU0nO1xuICAgIGhvdXJzID0gaG91cnMgPiAxMiA/IGhvdXJzIC0gMTIgOiBob3VycztcbiAgICBtaW51dGVzID0gKG1pbnV0ZXMgPCAxMCkgPyBcIjBcIiArIG1pbnV0ZXMgOiBtaW51dGVzO1xuICAgIHJldHVybiBob3VycyArIFwiOlwiICsgbWludXRlcyArICcgJyArIHRpbWVPZkRheTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgLy8gRm9ybWF0dGluZyBmb3IgZGlzcGxheS4uLmNvdWxkIGJlIGRvbmUgYmV0dGVyP1xuICAgIGlmICghdGhpcy5wcm9wcy5yb3V0ZSkgeyByZXR1cm4gPGRpdj48L2Rpdj47IH1cbiAgICBsZXQgZXRhID0gTWF0aC5yb3VuZCh0aGlzLnByb3BzLnJvdXRlLmV0YS82MCksXG4gICAgICAgIGFycml2YWxUaW1lID0gKHRoaXMubXNUb1RpbWUoRGF0ZS5ub3coKSt0b3RhbFRpbWUpKSxcbiAgICAgICAgdG90YWxUaW1lID0gTWF0aC5yb3VuZCgodGhpcy5wcm9wcy5yb3V0ZS5kdXJhdGlvbiArIHRoaXMucHJvcHMucm91dGUuZXRhKSkqMTAwMCxcbiAgICAgICAgZXRhTWludXRlcyA9IGV0YSA8PSAxID8gJ21pbnV0ZScgOiAnbWludXRlcycsXG4gICAgICAgIGNvc3QgPSB0aGlzLnByb3BzLnJvdXRlLmhpZ2hfZXN0aW1hdGUgPyAnJCcgKyAoTWF0aC5yb3VuZCh0aGlzLnByb3BzLnJvdXRlLmhpZ2hfZXN0aW1hdGUvMTAwKSkgOiAnTWV0ZXJlZCcsXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA9IHRoaXMuc3RhdGUuc3R5bGVbdGhpcy5wcm9wcy5zdHlsZV0sXG4gICAgICAgIGNsYXNzZXMgPSAnc2VsZWN0ZWQtcm91dGUtY29udGFpbmVyICcgKyBiYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvdGFsVGltZSlcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLnByb3BzLmRlc2VsZWN0Um91dGV9IGNsYXNzTmFtZT1cImxpZ2h0Ym94LWJhY2tncm91bmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuICAgICAgICAgIDxoMT57dGhpcy5wcm9wcy5yb3V0ZS5kaXNwbGF5X25hbWV9PC9oMT5cbiAgICAgICAgICA8aDE+e2Nvc3R9PC9oMT5cbiAgICAgICAgICA8cD5QaWNrdXA6IHtldGF9IHtldGFNaW51dGVzfTwvcD5cbiAgICAgICAgICA8cD5Ub3RhbDoge2Fycml2YWxUaW1lfTwvcD5cbiAgICAgICAgICAgIDxhIGhyZWY9e3RoaXMuc3RhdGUub3JkZXJDYWJ9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJvcmRlci1idG5cIiBvbkNsaWNrPXt0aGlzLm9yZGVyUmlkZX0+T3JkZXIgUmlkZTwvYnV0dG9uPlxuICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICBjdXJyZW50QWRkcmVzczogc3RhdGUuY3VycmVudEFkZHJlc3MsXG4gICAgY3VycmVudENvb3Jkczogc3RhdGUuY3VycmVudENvb3JkcyxcbiAgICByb3V0ZTogc3RhdGUuYWN0aXZlUm91dGUucm91dGUsXG4gICAgc3R5bGU6IHN0YXRlLmFjdGl2ZVJvdXRlLnN0eWxlXG4gIH07XG59XG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyh7IGRlc2VsZWN0Um91dGUgfSwgZGlzcGF0Y2gpXG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShBY3RpdmVSb3V0ZSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jb250YWluZXJzL2FjdGl2ZVJvdXRlLmpzeFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=