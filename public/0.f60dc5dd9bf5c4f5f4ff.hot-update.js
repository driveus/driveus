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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29udGFpbmVycy9hY3RpdmVSb3V0ZS5qc3g/MmIwMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHRSx3QkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0dBQ1gsS0FEVzs7QUFFakIsV0FBSyxLQUFMLEdBQWE7QUFDWCxjQUFPO0FBQ0wsZUFBTSxNQUREO0FBRUwsZUFBTSxNQUZEO0FBR0wsZ0JBQU8sT0FIRjtBQUlMLGVBQU07QUFKRCxRQURJO0FBT1gsaUJBQVU7QUFQQyxNQUFiO0FBU0EsV0FBSyxTQUFMLEdBQWlCLE1BQUssU0FBTCxDQUFlLElBQWYsT0FBakI7QUFYaUI7QUFZbEI7Ozs7aUNBQ1c7QUFDVixXQUFJLFdBQVcsS0FBSyxLQUFMLENBQVcsY0FBWCxDQUEwQixLQUF6QztBQUFBLFdBQ0ksU0FBUyxLQUFLLEtBQUwsQ0FBVyxjQUFYLENBQTBCLEdBRHZDO0FBQUEsV0FFSSxXQUFXLEtBQUssS0FBTCxDQUFXLGFBQVgsQ0FBeUIsS0FBekIsQ0FBK0IsR0FGOUM7QUFBQSxXQUdJLFdBQVcsS0FBSyxLQUFMLENBQVcsYUFBWCxDQUF5QixLQUF6QixDQUErQixHQUg5QztBQUFBLFdBSUksU0FBUyxLQUFLLEtBQUwsQ0FBVyxhQUFYLENBQXlCLEdBQXpCLENBQTZCLEdBSjFDO0FBQUEsV0FLSSxTQUFTLEtBQUssS0FBTCxDQUFXLGFBQVgsQ0FBeUIsR0FBekIsQ0FBNkIsR0FMMUM7QUFNQTtBQUNBLFdBQUcsS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixZQUFqQixDQUE4QixLQUE5QixDQUFvQyxPQUFwQyxDQUFILEVBQWlEO0FBQy9DLGFBQUksVUFBVSw2RUFBZDtBQUNBLGFBQUksb0NBQWtDLFFBQWxDLDJCQUFnRSxRQUFoRSxtQ0FBc0csbUJBQW1CLFFBQW5CLENBQXRHLDJC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QUFRLElBQUcsV0FBWCxFQUF1QixTQUFTLEtBQUssU0FBckM7QUFBQTtBQUFBO0FBREQ7QUFMSjtBQUZGLFFBREY7QUFjRDs7Ozs7O0FBR0gsVUFBUyxlQUFULENBQXlCLEtBQXpCLEVBQWdDO0FBQzlCLFVBQU87QUFDTCxxQkFBZ0IsTUFBTSxjQURqQjtBQUVMLG9CQUFlLE1BQU0sYUFGaEI7QUFHTCxZQUFPLE1BQU0sV0FBTixDQUFrQixLQUhwQjtBQUlMLFlBQU8sTUFBTSxXQUFOLENBQWtCO0FBSnBCLElBQVA7QUFNRDtBQUNELFVBQVMsa0JBQVQsQ0FBNEIsUUFBNUIsRUFBc0M7QUFDcEMsVUFBTywrQkFBbUIsRUFBRSxtQ0FBRixFQUFuQixFQUFzQyxRQUF0QyxDQUFQO0FBQ0Q7bUJBQ2MseUJBQVEsZUFBUixFQUF5QixrQkFBekIsRUFBNkMsV0FBN0MsQyIsImZpbGUiOiIwLmY2MGRjNWRkOWJmNWM0ZjVmNGZmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGRlc2VsZWN0Um91dGUgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4LmpzJztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcblxuY2xhc3MgQWN0aXZlUm91dGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc3R5bGU6IHtcbiAgICAgICAgdWJlcjogJ3ViZXInLFxuICAgICAgICBseWZ0OiAnbHlmdCcsXG4gICAgICAgIHByaWNlOiAncHJpY2UnLFxuICAgICAgICB0aW1lOiAndGltZSdcbiAgICAgIH0sXG4gICAgICBvcmRlckNhYjogbnVsbFxuICAgIH1cbiAgICB0aGlzLm9yZGVyUmlkZSA9IHRoaXMub3JkZXJSaWRlLmJpbmQodGhpcyk7XG4gIH1cbiAgb3JkZXJSaWRlKCkge1xuICAgIGxldCBzdGFydEFkZCA9IHRoaXMucHJvcHMuY3VycmVudEFkZHJlc3Muc3RhcnQsXG4gICAgICAgIGVuZEFkZCA9IHRoaXMucHJvcHMuY3VycmVudEFkZHJlc3MuZW5kLFxuICAgICAgICBzdGFydExhdCA9IHRoaXMucHJvcHMuY3VycmVudENvb3Jkcy5zdGFydC5sYXQsXG4gICAgICAgIHN0YXJ0TG5nID0gdGhpcy5wcm9wcy5jdXJyZW50Q29vcmRzLnN0YXJ0LmxuZyxcbiAgICAgICAgZW5kTGF0ID0gdGhpcy5wcm9wcy5jdXJyZW50Q29vcmRzLmVuZC5sYXQsXG4gICAgICAgIGVuZExuZyA9IHRoaXMucHJvcHMuY3VycmVudENvb3Jkcy5lbmQubG5nO1xuICAgIC8vIEFzc2lnbnMgb3JkZXIgdXJsIHRvIFViZXJcbiAgICBpZih0aGlzLnByb3BzLnJvdXRlLmRpc3BsYXlfbmFtZS5tYXRjaCgvdWJlci9pKSkge1xuICAgICAgbGV0IHViZXJVcmwgPSBcInViZXI6Ly8/Y2xpZW50X2lkPTM3eUhHMS14OGl3bWUyZmpvZ3hvYTN3VV80bjJ2V2Q1ZXhDcEVCOHUmYWN0aW9uPXNldFBpY2t1cFwiO1xuICAgICAgbGV0IHViZXJDb29yZHMgPSBgJnBpY2t1cFtsYXRpdHVkZV09JHtzdGFydExhdH0mcGlja3VwW2xvbmdpdHVkZV09JHtzdGFydExuZ30mcGlja3VwW2Zvcm1hdHRlZF9hZGRyZXNzXT0ke2VuY29kZVVSSUNvbXBvbmVudChzdGFydEFkZCl9JmRyb3BvZmZbbGF0aXR1ZGVdPSR7ZW5kTGF0fSZkcm9wb2ZmW2xvbmdpdHVkZV09JHtlbmRMbmd9JmRyb3BvZmZbZm9ybWF0dGVkX2FkZHJlc3NdPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGVuZEFkZCl9JnByb2R1Y3RfaWQ9YTExMTFjOGMtYzcyMC00NmMzLTg1MzQtMmZjZGQ3MzAwNDBkYFxuICAgICAgbGV0IG9yZGVyVWJlciA9IHViZXJVcmwgKyB1YmVyQ29vcmRzO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7b3JkZXJDYWI6IG9yZGVyVWJlcn0pXG4gICAgICAvLyBBc3NpZ25zIG9yZGVyIHVybCB0byBseWZ0XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnJvdXRlLmRpc3BsYXlfbmFtZS5tYXRjaCgvbHlmdC9pKSkge1xuICAgICAgbGV0IGx5ZnRVcmwgPSBgbHlmdDovL3JpZGV0eXBlP2lkPSR7dGhpcy5wcm9wcy5yb3V0ZS5kaXNwbGF5X25hbWUucmVwbGFjZSgnICcsICdfJykudG9Mb3dlckNhc2UoKX0mcGFydG5lcj1fMmJMQzJYOFlmRThiVkMxcWNMYTB2T1F1dDVyMWxCX2A7XG4gICAgICBsZXQgbHlmdENvb2RzID0gYCZwaWNrdXBbbGF0aXR1ZGVdPSR7c3RhcnRMYXR9JnBpY2t1cFtsb25naXR1ZGVdPSR7c3RhcnRMbmd9JmRlc3RpbmF0aW9uW2xhdGl0dWRlXT0ke2VuZExhdH0mZGVzdGluYXRpb25bbG9uZ2l0dWRlXT0ke2VuZExuZ31gXG4gICAgICBsZXQgb3JkZXJMeWZ0ID0gbHlmdFVybCArIGx5ZnRDb29kcztcbiAgICAgIHRoaXMuc2V0U3RhdGUoe29yZGVyQ2FiOiBvcmRlckx5ZnR9KVxuICAgIH1cbiAgfVxuICBtc1RvVGltZShtcykge1xuICAgIGNvbnNvbGUubG9nKG1zKVxuICAgIGxldCBkdXJhdGlvbiA9IG5ldyBEYXRlKG1zKSxcbiAgICAgICAgbWludXRlcyA9IHBhcnNlSW50KGR1cmF0aW9uLmdldE1pbnV0ZXMoKSksXG4gICAgICAgIGhvdXJzID0gcGFyc2VJbnQoZHVyYXRpb24uZ2V0SG91cnMoKSksXG4gICAgICAgIHRpbWVPZkRheSA9IGhvdXJzID49IDEyID8gJ1BNJyA6ICdBTSc7XG4gICAgaG91cnMgPSBob3VycyA+IDEyID8gaG91cnMgLSAxMiA6IGhvdXJzO1xuICAgIG1pbnV0ZXMgPSAobWludXRlcyA8IDEwKSA/IFwiMFwiICsgbWludXRlcyA6IG1pbnV0ZXM7XG4gICAgcmV0dXJuIGhvdXJzICsgXCI6XCIgKyBtaW51dGVzICsgJyAnICsgdGltZU9mRGF5O1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICAvLyBGb3JtYXR0aW5nIGZvciBkaXNwbGF5Li4uY291bGQgYmUgZG9uZSBiZXR0ZXI/XG4gICAgaWYgKCF0aGlzLnByb3BzLnJvdXRlKSB7IHJldHVybiA8ZGl2PjwvZGl2PjsgfVxuICAgIGxldCBldGEgPSBNYXRoLnJvdW5kKHRoaXMucHJvcHMucm91dGUuZXRhLzYwKSxcbiAgICAgICAgYXJyaXZhbFRpbWUgPSAodGhpcy5tc1RvVGltZShEYXRlLm5vdygpK3RvdGFsVGltZSkpLFxuICAgICAgICB0b3RhbFRpbWUgPSBNYXRoLnJvdW5kKCh0aGlzLnByb3BzLnJvdXRlLmR1cmF0aW9uICsgdGhpcy5wcm9wcy5yb3V0ZS5ldGEpKSoxMDAwLFxuICAgICAgICBldGFNaW51dGVzID0gZXRhIDw9IDEgPyAnbWludXRlJyA6ICdtaW51dGVzJyxcbiAgICAgICAgY29zdCA9IHRoaXMucHJvcHMucm91dGUuaGlnaF9lc3RpbWF0ZSA/ICckJyArIChNYXRoLnJvdW5kKHRoaXMucHJvcHMucm91dGUuaGlnaF9lc3RpbWF0ZS8xMDApKSA6ICdNZXRlcmVkJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yID0gdGhpcy5zdGF0ZS5zdHlsZVt0aGlzLnByb3BzLnN0eWxlXSxcbiAgICAgICAgY2xhc3NlcyA9ICdzZWxlY3RlZC1yb3V0ZS1jb250YWluZXIgJyArIGJhY2tncm91bmRDb2xvcjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLnByb3BzLmRlc2VsZWN0Um91dGV9IGNsYXNzTmFtZT1cImxpZ2h0Ym94LWJhY2tncm91bmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuICAgICAgICAgIDxoMT57dGhpcy5wcm9wcy5yb3V0ZS5kaXNwbGF5X25hbWV9PC9oMT5cbiAgICAgICAgICA8aDE+e2Nvc3R9PC9oMT5cbiAgICAgICAgICA8cD5QaWNrdXA6IHtldGF9IHtldGFNaW51dGVzfTwvcD5cbiAgICAgICAgICA8cD5Ub3RhbDoge2Fycml2YWxUaW1lfTwvcD5cbiAgICAgICAgICAgIDxhIGhyZWY9e3RoaXMuc3RhdGUub3JkZXJDYWJ9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJvcmRlci1idG5cIiBvbkNsaWNrPXt0aGlzLm9yZGVyUmlkZX0+T3JkZXIgUmlkZTwvYnV0dG9uPlxuICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICBjdXJyZW50QWRkcmVzczogc3RhdGUuY3VycmVudEFkZHJlc3MsXG4gICAgY3VycmVudENvb3Jkczogc3RhdGUuY3VycmVudENvb3JkcyxcbiAgICByb3V0ZTogc3RhdGUuYWN0aXZlUm91dGUucm91dGUsXG4gICAgc3R5bGU6IHN0YXRlLmFjdGl2ZVJvdXRlLnN0eWxlXG4gIH07XG59XG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyh7IGRlc2VsZWN0Um91dGUgfSwgZGlzcGF0Y2gpXG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShBY3RpdmVSb3V0ZSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jb250YWluZXJzL2FjdGl2ZVJvdXRlLmpzeFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=