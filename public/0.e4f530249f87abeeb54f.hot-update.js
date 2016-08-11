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
	          disclaimer = this.props.carpool ? '\nMay make additional stops' : '';
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
	          this.props.route.display_name,
	          _react3.default.createElement('img', { src: this.props.marker, className: 'marker-tag' })
	        ),
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

/***/ },

/***/ 189:
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
	
	var _route = __webpack_require__(93);
	
	var _route2 = _interopRequireDefault(_route);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
	  ExpandedRouteList: {
	    displayName: 'ExpandedRouteList'
	  }
	};
	
	var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	  filename: '/Users/ianmrak/Documents/Projects/drivus/src/js/components/expandedRouteList.jsx',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _reactTransformHmr2(Component, id);
	  };
	}
	
	// Components
	
	
	// Fast and Cheap images
	var time = __webpack_require__(216);
	var price = __webpack_require__(214);
	var priceTime = __webpack_require__(212);
	
	var ExpandedRouteList = _wrapComponent('ExpandedRouteList')(function (_Component) {
	  _inherits(ExpandedRouteList, _Component);
	
	  function ExpandedRouteList(props) {
	    _classCallCheck(this, ExpandedRouteList);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ExpandedRouteList).call(this, props));
	
	    _this.state = {
	      0: 'expanded-price',
	      1: 'expanded-money'
	    };
	    return _this;
	  }
	
	  _createClass(ExpandedRouteList, [{
	    key: 'renderRoutes',
	    value: function renderRoutes() {
	      var routes = [];
	      var key = 0;
	      for (var route in this.props.routes) {
	        var marker = route === 'time' ? time : price;
	        var eprice = this.props.routes.price;
	        var etime = this.props.routes.time;
	        if (eprice.avg_estimate === etime.avg_estimate && eprice.display_name === etime.display_name && eprice.duration === etime.duration) {
	          routes.push(_react3.default.createElement(_route2.default, {
	            key: key++,
	            route: this.props.routes.price,
	            selectRoute: this.props.selectRoute,
	            classStyle: route,
	            marker: priceTime
	          }));
	          return routes;
	        }
	        if (this.props.routes[route] !== null) {
	          routes.push(_react3.default.createElement(_route2.default, {
	            key: key++,
	            route: this.props.routes[route],
	            selectRoute: this.props.selectRoute,
	            classStyle: route,
	            marker: marker
	          }));
	        }
	      }
	      return routes;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react3.default.createElement(
	        'div',
	        { className: 'expanded-routes' },
	        _react3.default.createElement(
	          'ul',
	          null,
	          this.renderRoutes()
	        )
	      );
	    }
	  }]);
	
	  return ExpandedRouteList;
	}(_react2.Component));
	
	exports.default = ExpandedRouteList;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ },

/***/ 190:
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
	  LocationSearch: {
	    displayName: 'LocationSearch'
	  }
	};
	
	var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	  filename: '/Users/ianmrak/Documents/Projects/drivus/src/js/components/locationSearch.jsx',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _reactTransformHmr2(Component, id);
	  };
	}
	
	// import { connect } from 'react-redux';
	// import { bindActionCreators } from 'redux'
	
	var LocationSearch = _wrapComponent('LocationSearch')(function (_Component) {
	  _inherits(LocationSearch, _Component);
	
	  function LocationSearch(props) {
	    _classCallCheck(this, LocationSearch);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LocationSearch).call(this, props));
	
	    _this.state = {
	      id: 'LocationSearch'.concat(_this.props.tripNode)
	    };
	    return _this;
	  }
	
	  _createClass(LocationSearch, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;
	
	      // Sets up Google autocomplete once component renders
	      var autocomplete = new google.maps.places.Autocomplete(document.getElementById(this.state.id), { types: ['geocode', 'establishment'] });
	      autocomplete.addListener('place_changed', function () {
	        var place = autocomplete.getPlace();
	        if (place.formatted_address) {
	          _this2.props.onAutoComplete(place.formatted_address, _this2.props.tripNode);
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react3.default.createElement('input', {
	        placeholder: this.props.placeholder,
	        id: this.state.id,
	        value: this.props.value,
	        onChange: this.props.onLocationChange,
	        name: this.props.name
	      });
	    }
	  }]);

	  return LocationSearch;
	}(_react2.Component));

	exports.default = LocationSearch;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ },

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
	    key: 'render',
	    value: function render() {
	      // Formatting for display...could be done better?
	      if (!this.props.route) {
	        return _react3.default.createElement('div', null);
	      }
	      var eta = Math.round(this.props.route.eta / 60),
	          totalTime = Math.round((this.props.route.duration + this.props.route.eta) / 60),
	          etaMinutes = eta <= 1 ? 'minute' : 'minutes',
	          cost = this.props.route.high_estimate ? '$' + Math.round(this.props.route.high_estimate / 100) : 'Metered',
	          totalMinutes = totalTime <= 1 ? 'minute' : 'minutes',
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
	            totalTime,
	            ' ',
	            totalMinutes
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

/***/ },

/***/ 193:
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
	
	var _redux = __webpack_require__(26);
	
	var _requests = __webpack_require__(175);
	
	var _locationSearch = __webpack_require__(190);
	
	var _locationSearch2 = _interopRequireDefault(_locationSearch);
	
	var _expandSearch = __webpack_require__(188);
	
	var _expandSearch2 = _interopRequireDefault(_expandSearch);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
	  Controls: {
	    displayName: 'Controls'
	  }
	};
	
	var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	  filename: '/Users/ianmrak/Documents/Projects/drivus/src/js/containers/controls.jsx',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _reactTransformHmr2(Component, id);
	  };
	}
	// Components
	
	
	var Controls = _wrapComponent('Controls')(function (_Component) {
	  _inherits(Controls, _Component);
	
	  function Controls(props) {
	    _classCallCheck(this, Controls);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Controls).call(this, props));
	
	    _this.state = {
	      startLocation: '',
	      endLocation: '',
	      startPlaceholder: 'Pickup',
	      endPlaceholder: 'Dropoff',
	      currentLocation: null
	    };
	    _this.onFormSubmit = _this.onFormSubmit.bind(_this);
	    _this.handleLocationChange = _this.handleLocationChange.bind(_this);
	    _this.handleLocationAutoComplete = _this.handleLocationAutoComplete.bind(_this);
	    return _this;
	  }
	  // Gets user location with HTML5 geolocation
	
	
	  _createClass(Controls, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;
	
	      navigator.geolocation.getCurrentPosition(function (position) {
	        _this2.setState({
	          currentLocation: {
	            lat: position.coords.latitude,
	            lng: position.coords.longitude
	          }
	        });
	      });
	    }
	    // Wipes input field after form submission (at the end of redux cycle)
	
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps() {
	      this.setState({
	        startLocation: '',
	        endLocation: ''
	      });
	    }
	    // Assigns input placeholders and fires of redux chain API calls
	
	  }, {
	    key: 'onFormSubmit',
	    value: function onFormSubmit(e) {
	      e.preventDefault();
	      if (this.props.canRequestRoutes) {
	        var startLocation = e.target.startLocation.value,
	            endLocation = e.target.endLocation.value;
	        if (startLocation && endLocation) {
	          var location = {
	            start: startLocation,
	            end: endLocation
	          };
	          this.setState({
	            startPlaceholder: startLocation,
	            endPlaceholder: endLocation
	          });
	          this.props.getCoords(location);
	        }
	      }
	    }
	    // Tracks user input to local state values
	
	  }, {
	    key: 'handleLocationChange',
	    value: function handleLocationChange(e) {
	      switch (e.target.name) {
	        case 'startLocation':
	          this.setState({ startLocation: e.target.value });
	          break;
	        case 'endLocation':
	          this.setState({ endLocation: e.target.value });
	          break;
	        default:
	          return;
	      }
	    }
	    // Assigns Google autocomplete values to local state
	
	  }, {
	    key: 'handleLocationAutoComplete',
	    value: function handleLocationAutoComplete(address, tripNode) {
	      switch (tripNode) {
	        case 'startLocation':
	          this.setState({ startLocation: address });
	          break;
	        case 'endLocation':
	          this.setState({ endLocation: address });
	          break;
	        default:
	          return;
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var isActive = 'inactive-expand',
	          canExpand = null;
	      if (this.props.currentAddress.start) {
	        isActive = 'active-expand';
	        canExpand = this.props.fetchExpanded;
	      }
	      return _react3.default.createElement(
	        'div',
	        { className: 'search-box' },
	        _react3.default.createElement(
	          'form',
	          { onSubmit: this.onFormSubmit, className: 'location-form' },
	          _react3.default.createElement(_locationSearch2.default, {
	            tripNode: 'startLocation',
	            onLocationChange: this.handleLocationChange,
	            onAutoComplete: this.handleLocationAutoComplete,
	            value: this.state.startLocation,
	            name: 'startLocation',
	            placeholder: this.state.startPlaceholder
	          }),
	          _react3.default.createElement(_locationSearch2.default, {
	            tripNode: 'endLocation',
	            onLocationChange: this.handleLocationChange,
	            onAutoComplete: this.handleLocationAutoComplete,
	            value: this.state.endLocation,
	            name: 'endLocation',
	            placeholder: this.state.endPlaceholder
	          }),
	          _react3.default.createElement(
	            'div',
	            { className: 'form-submit' },
	            _react3.default.createElement(_expandSearch2.default, {
	              classStyle: isActive,
	              currentLocation: this.props.currentCoords,
	              expandSearch: canExpand
	            }),
	            _react3.default.createElement(
	              'button',
	              { className: 'form-btn' },
	              'Submit'
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Controls;
	}(_react2.Component));
	
	;
	
	function mapStateToProps(state) {
	  return {
	    canRequestRoutes: state.requestRoute,
	    currentCoords: state.currentCoords,
	    currentAddress: state.currentAddress
	  };
	}
	function mapDispatchToProps(dispatch) {
	  return (0, _redux.bindActionCreators)({ getCoords: _requests.getCoords, fetchExpanded: _requests.fetchExpanded }, dispatch);
	}
	// no mapStateToProps, must use null to skip to mapDispatchToProps
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Controls);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ },

/***/ 194:
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
	
	var _redux = __webpack_require__(26);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
	  MapView: {
	    displayName: 'MapView'
	  }
	};
	
	var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	  filename: '/Users/ianmrak/Documents/Projects/drivus/src/js/containers/mapView.jsx',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _reactTransformHmr2(Component, id);
	  };
	}
	
	var MapView = _wrapComponent('MapView')(function (_Component) {
	  _inherits(MapView, _Component);
	
	  function MapView() {
	    _classCallCheck(this, MapView);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(MapView).apply(this, arguments));
	  }
	
	  _createClass(MapView, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      // Allows directions to be rendered on the map
	      var directionsDisplay = new google.maps.DirectionsRenderer({
	        suppressMarkers: true
	      });
	      // Creates persistent map for session
	      var map = new google.maps.Map(document.querySelector('.map-container'), {
	        center: this.props.currentCoords.start || { lat: 37.773972, lng: -122.431297 },
	        scrollwheel: false,
	        zoom: 10,
	        disableDefaultUI: true,
	        scaleControl: true,
	        zoomControl: true
	      });
	      // Sets the directionsDisplay to the current map
	      directionsDisplay.setMap(map);
	      this.setState({
	        map: map,
	        directionsDisplay: directionsDisplay,
	        markers: []
	      });
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps() {
	      // If new coords, remove old position markers
	      if (this.props.currentCoords.start || this.props.currentCoords.end) {
	        for (var marker in this.props.routeMarkers) {
	          this.props.routeMarkers[marker].setMap(null);
	        }
	        // Removes expanded markers as well
	        for (var _marker in this.props.expandedMarkers) {
	          if (this.props.expandedMarkers[_marker]) {
	            this.props.expandedMarkers[_marker].setMap(null);
	            this.props.expandedMarkers[_marker] = null;
	          }
	        }
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      // Creates direction path on map
	      if (this.props.directions) {
	        this.state.directionsDisplay.setDirections(this.props.directions);
	      }
	      // Drop route markers on map
	      if (this.props.routeMarkers.start) {
	        var markers = this.props.routeMarkers,
	            bounds = new google.maps.LatLngBounds();
	        for (var data in markers) {
	          if (markers[data].position) {
	            markers[data].setMap(this.state.map);
	            bounds.extend(markers[data].getPosition());
	          }
	        }
	        this.state.map.fitBounds(bounds);
	      }
	      // Set expanded markers and remove current directions (for closer bounding box)
	      if (this.props.expandedMarkers.price || this.props.expandedMarkers.time) {
	        this.state.directionsDisplay.set('directions', null);
	        var _markers = this.props.expandedMarkers,
	            _bounds = new google.maps.LatLngBounds();
	        for (var _data in _markers) {
	          if (_markers[_data].position) {
	            _markers[_data].setMap(this.state.map);
	            _bounds.extend(_markers[_data].getPosition());
	          }
	        }
	        // Extends bounds to include expanded markers and start location
	        _bounds.extend(this.props.routeMarkers['start'].getPosition());
	        this.state.map.fitBounds(_bounds);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var walkingDistance = void 0;
	      // Displays walking time if less than 45 minutes
	      if (this.props.directions && this.props.directions.routes[0].legs[0].duration.value <= 2700) {
	        var time = this.props.directions.routes[0].legs[0].duration.text,
	            message = 'Walking: ' + time;
	        walkingDistance = _react3.default.createElement(
	          'div',
	          { className: 'walking-distance' },
	          message
	        );
	      }
	      return _react3.default.createElement(
	        'div',
	        { id: 'map-display' },
	        walkingDistance,
	        _react3.default.createElement('div', { className: 'map-container' })
	      );
	    }
	  }]);
	
	  return MapView;
	}(_react2.Component));
	
	function mapStateToProps(state) {
	  return {
	    currentCoords: state.currentCoords,
	    routeMarkers: state.routeMarkers,
	    expandedMarkers: state.expandedMarkers,
	    directions: state.directions
	  };
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(MapView);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ },

/***/ 195:
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
	
	var _routeList = __webpack_require__(191);
	
	var _routeList2 = _interopRequireDefault(_routeList);
	
	var _expandedRouteList = __webpack_require__(189);
	
	var _expandedRouteList2 = _interopRequireDefault(_expandedRouteList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
	  RouteLists: {
	    displayName: 'RouteLists'
	  }
	};
	
	var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	  filename: '/Users/ianmrak/Documents/Projects/drivus/src/js/containers/routeLists.jsx',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _reactTransformHmr2(Component, id);
	  };
	}
	// Makes sure action flows through all reducers to maintain state
	
	
	// Components
	
	
	var RouteLists = _wrapComponent('RouteLists')(function (_Component) {
	  _inherits(RouteLists, _Component);
	
	  function RouteLists() {
	    _classCallCheck(this, RouteLists);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(RouteLists).apply(this, arguments));
	  }
	
	  _createClass(RouteLists, [{
	    key: 'render',
	    value: function render() {
	      var expandedRoutes = void 0;
	      if (this.props.expandedRoutes.price || this.props.expandedRoutes.time) {
	        expandedRoutes = _react3.default.createElement(_expandedRouteList2.default, {
	          routes: this.props.expandedRoutes,
	          selectRoute: this.props.selectRoute
	        });
	      }
	      return _react3.default.createElement(
	        'div',
	        { className: 'list-container' },
	        expandedRoutes,
	        _react3.default.createElement(_routeList2.default, {
	          routes: this.props.uberRoutes,
	          classStyle: 'uber',
	          selectRoute: this.props.selectRoute
	        }),
	        _react3.default.createElement(_routeList2.default, {
	          routes: this.props.lyftRoutes,
	          classStyle: 'lyft',
	          selectRoute: this.props.selectRoute
	        })
	      );
	    }
	  }]);
	
	  return RouteLists;
	}(_react2.Component));
	
	function mapStateToProps(state) {
	  return {
	    uberRoutes: state.routes.uber,
	    lyftRoutes: state.routes.lyft,
	    expandedRoutes: state.expandedRoutes,
	    expandedDirections: state.expandedDirections
	  };
	}
	// All returns return as props to route container
	function mapDispatchToProps(dispatch) {
	  // When selectRoute is called, the result is passed to all reducers
	  return (0, _redux.bindActionCreators)({ selectRoute: _index.selectRoute }, dispatch);
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(RouteLists);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ },

/***/ 399:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9yb3V0ZS5qc3g/ZDUyYyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9leHBhbmRlZFJvdXRlTGlzdC5qc3g/M2RjZCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9sb2NhdGlvblNlYXJjaC5qc3g/MWE0MyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29udGFpbmVycy9hY3RpdmVSb3V0ZS5qc3g/MmIwMSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29udGFpbmVycy9jb250cm9scy5qc3g/NmI0MCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29udGFpbmVycy9tYXBWaWV3LmpzeD82NTdhIiwid2VicGFjazovLy8uL3NyYy9qcy9jb250YWluZXJzL3JvdXRlTGlzdHMuanN4P2U5ZDQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3Mvc3R5bGUuc2Nzcz84MjZmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdFLGtCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwRkFDWCxLQURXOztBQUVqQixXQUFLLGNBQUwsR0FBc0IsTUFBSyxjQUFMLENBQW9CLElBQXBCLE9BQXRCO0FBRmlCO0FBR2xCOzs7O3NDQUNnQjtBQUNmLGNBQU8sS0FBSyxLQUFMLENBQVcsV0FBWCxDQUF1QjtBQUM1QixnQkFBTyxLQUFLLEtBQUwsQ0FBVyxLQURVO0FBRTVCLGdCQUFPLEtBQUssS0FBTCxDQUFXO0FBRlUsUUFBdkIsQ0FBUDtBQUlEOzs7OEJBQ1E7QUFDUDtBQUNBLFdBQUksTUFBTSxLQUFLLEtBQUwsQ0FBVyxLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLEdBQWpCLEdBQXFCLEVBQWhDLENBQVY7QUFBQSxXQUNJLFlBQVksS0FBSyxLQUFMLENBQVcsQ0FBQyxLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLFFB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QUwsQ0FBVyxjQURyQjtBQUVFLHdCQUFhLEtBQUssS0FBTCxDQUFXO0FBRjFCLFdBREE7QUFLRDtBQUNELGNBQ0U7QUFBQTtBQUFBLFdBQUssV0FBVSxnQkFBZjtBQUNHLHVCQURIO0FBRUU7QUFDRSxtQkFBUSxLQUFLLEtBQUwsQ0FBVyxVQURyQjtBQUVFLHVCQUFZLE1BRmQ7QUFHRSx3QkFBYSxLQUFLLEtBQUwsQ0FBVztBQUgxQixXQUZGO0FBT0U7QUFDRSxtQkFBUSxLQUFLLEtBQUwsQ0FBVyxVQURyQjtBQUVFLHVCQUFZLE1BRmQ7QUFHRSx3QkFBYSxLQUFLLEtBQUwsQ0FBVztBQUgxQjtBQVBGLFFBREY7QUFlRDs7Ozs7O0FBR0gsVUFBUyxlQUFULENBQXlCLEtBQXpCLEVBQWdDO0FBQzlCLFVBQU87QUFDTCxpQkFBWSxNQUFNLE1BQU4sQ0FBYSxJQURwQjtBQUVMLGlCQUFZLE1BQU0sTUFBTixDQUFhLElBRnBCO0FBR0wscUJBQWdCLE1BQU0sY0FIakI7QUFJTCx5QkFBb0IsTUFBTTtBQUpyQixJQUFQO0FBTUQ7QUFDRDtBQUNBLFVBQVMsa0JBQVQsQ0FBNEIsUUFBNUIsRUFBc0M7QUFDcEM7QUFDQSxVQUFPLCtCQUFtQixFQUFFLCtCQUFGLEVBQW5CLEVBQW9DLFFBQXBDLENBQVA7QUFDRDs7bUJBRWMseUJBQVEsZUFBUixFQUF5QixrQkFBekIsRUFBNkMsVUFBN0MsQzs7Ozs7Ozs7QUNwRGYsMEMiLCJmaWxlIjoiMC5lNGY1MzAyNDlmODdhYmVlYjU0Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgUm91dGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnNldEFjdGl2ZVJvdXRlID0gdGhpcy5zZXRBY3RpdmVSb3V0ZS5iaW5kKHRoaXMpO1xuICB9XG4gIHNldEFjdGl2ZVJvdXRlKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnNlbGVjdFJvdXRlKHtcbiAgICAgIHJvdXRlOiB0aGlzLnByb3BzLnJvdXRlLFxuICAgICAgc3R5bGU6IHRoaXMucHJvcHMuY2xhc3NTdHlsZVxuICAgIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICAvLyBGb3JtYXR0aW5nIGZvciBkaXNwbGF5Li4uY291bGQgYmUgZG9uZSBiZXR0ZXI/XG4gICAgbGV0IGV0YSA9IE1hdGgucm91bmQodGhpcy5wcm9wcy5yb3V0ZS5ldGEvNjApLFxuICAgICAgICB0b3RhbFRpbWUgPSBNYXRoLnJvdW5kKCh0aGlzLnByb3BzLnJvdXRlLmR1cmF0aW9uICsgdGhpcy5wcm9wcy5yb3V0ZS5ldGEpLzYwKSxcbiAgICAgICAgZXRhTWludXRlcyA9IGV0YSA8PSAxID8gJ21pbnV0ZScgOiAnbWludXRlcycsXG4gICAgICAgIHRvdGFsTWludXRlcyA9IHRvdGFsVGltZSA8PSAxID8gJ21pbnV0ZScgOiAnbWludXRlcycsXG4gICAgICAgIGNvc3QgPSB0aGlzLnByb3BzLnJvdXRlLmhpZ2hfZXN0aW1hdGUgPyAnJCcgKyAoTWF0aC5yb3VuZCh0aGlzLnByb3BzLnJvdXRlLmhpZ2hfZXN0aW1hdGUvMTAwKSkgOiAnTWV0ZXJlZCcsXG4gICAgICAgIGRpc2NsYWltZXIgPSB0aGlzLnByb3BzLmNhcnBvb2wgPyAnXFxuTWF5IG1ha2UgYWRkaXRpb25hbCBzdG9wcycgOiAnJztcbiAgICByZXR1cm4gKFxuICAgICAgPGxpIGNsYXNzTmFtZT17YGxpc3QtaXRlbSAke3RoaXMucHJvcHMuY2xhc3NTdHlsZX1gfVxuICAgICAgICBvbkNsaWNrPXt0aGlzLnNldEFjdGl2ZVJvdXRlfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3V0ZS1jb3N0XCI+e2Nvc3R9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91dGUtbmFtZVwiPnt0aGlzLnByb3BzLnJvdXRlLmRpc3BsYXlfbmFtZX0gXG4gICAgICAgIDxpbWcgc3JjPXt0aGlzLnByb3BzLm1hcmtlcn0gY2xhc3NOYW1lPVwibWFya2VyLXRhZ1wiLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcml2ZXItZXRhXCI+UGlja3VwOiB7ZXRhfSB7ZXRhTWludXRlc308L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3V0ZS1kdXJhdGlvblwiPlRvdGFsOiB7dG90YWxUaW1lfSB7dG90YWxNaW51dGVzfTwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkaXNjbGFpbWVyXCI+e2Rpc2NsYWltZXJ9PC9zcGFuPlxuICAgICAgPC9saT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9yb3V0ZS5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgUm91dGUgZnJvbSAnLi9yb3V0ZS5qc3gnO1xuXG4vLyBGYXN0IGFuZCBDaGVhcCBpbWFnZXNcbmxldCB0aW1lID0gcmVxdWlyZSgnLi4vLi4vYXNzZXRzL3RpbWUtdy1iYWxvb24uc3ZnJyk7XG5sZXQgcHJpY2UgPSByZXF1aXJlKCcuLi8uLi9hc3NldHMvcHJpY2Utdy1iYWxvb24uc3ZnJyk7XG5sZXQgcHJpY2VUaW1lID0gcmVxdWlyZSgnLi4vLi4vYXNzZXRzL3ByaWNlLXRpbWUtdy1iYWxvb24uc3ZnJyk7XG5cbmNsYXNzIEV4cGFuZGVkUm91dGVMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIDA6ICdleHBhbmRlZC1wcmljZScsXG4gICAgICAxOiAnZXhwYW5kZWQtbW9uZXknXG4gICAgfTtcbiAgfVxuICByZW5kZXJSb3V0ZXMoKSB7XG4gICAgbGV0IHJvdXRlcyA9IFtdO1xuICAgIGxldCBrZXkgPSAwO1xuICAgIGZvciAobGV0IHJvdXRlIGluIHRoaXMucHJvcHMucm91dGVzKSB7XG4gICAgICBsZXQgbWFya2VyID0gcm91dGUgPT09ICd0aW1lJyA/IHRpbWUgOiBwcmljZTtcbiAgICAgIGxldCBlcHJpY2UgPSB0aGlzLnByb3BzLnJvdXRlcy5wcmljZTtcbiAgICAgIGxldCBldGltZSA9IHRoaXMucHJvcHMucm91dGVzLnRpbWU7XG4gICAgICBpZiAoZXByaWNlLmF2Z19lc3RpbWF0ZSA9PT0gZXRpbWUuYXZnX2VzdGltYXRlICYmXG4gICAgICAgICAgZXByaWNlLmRpc3BsYXlfbmFtZSA9PT0gZXRpbWUuZGlzcGxheV9uYW1lICYmXG4gICAgICAgICAgZXByaWNlLmR1cmF0aW9uICAgICA9PT0gZXRpbWUuZHVyYXRpb24pIHtcbiAgICAgICAgcm91dGVzLnB1c2goXG4gICAgICAgICAgPFJvdXRlXG4gICAgICAgICAga2V5PXtrZXkrK31cbiAgICAgICAgICByb3V0ZT17dGhpcy5wcm9wcy5yb3V0ZXMucHJpY2V9XG4gICAgICAgICAgc2VsZWN0Um91dGU9e3RoaXMucHJvcHMuc2VsZWN0Um91dGV9XG4gICAgICAgICAgY2xhc3NTdHlsZT17cm91dGV9XG4gICAgICAgICAgbWFya2VyPXtwcmljZVRpbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICApO1xuICAgICAgICByZXR1cm4gcm91dGVzO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucHJvcHMucm91dGVzW3JvdXRlXSAhPT0gbnVsbCkge1xuICAgICAgICByb3V0ZXMucHVzaCg8Um91dGVcbiAgICAgICAgICBrZXk9e2tleSsrfVxuICAgICAgICAgIHJvdXRlPXt0aGlzLnByb3BzLnJvdXRlc1tyb3V0ZV19XG4gICAgICAgICAgc2VsZWN0Um91dGU9e3RoaXMucHJvcHMuc2VsZWN0Um91dGV9XG4gICAgICAgICAgY2xhc3NTdHlsZT17cm91dGV9XG4gICAgICAgICAgbWFya2VyPXttYXJrZXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJvdXRlcztcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwYW5kZWQtcm91dGVzXCI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJSb3V0ZXMoKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXhwYW5kZWRSb3V0ZUxpc3RcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2NvbXBvbmVudHMvZXhwYW5kZWRSb3V0ZUxpc3QuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4Jztcbi8vIGltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhdGlvblNlYXJjaCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpZDogJ0xvY2F0aW9uU2VhcmNoJy5jb25jYXQodGhpcy5wcm9wcy50cmlwTm9kZSksXG4gICAgfVxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIFNldHMgdXAgR29vZ2xlIGF1dG9jb21wbGV0ZSBvbmNlIGNvbXBvbmVudCByZW5kZXJzXG4gICAgbGV0IGF1dG9jb21wbGV0ZSA9IG5ldyBnb29nbGUubWFwcy5wbGFjZXMuQXV0b2NvbXBsZXRlKFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5zdGF0ZS5pZCksXG4gICAgICB7dHlwZXM6IFsnZ2VvY29kZScsICdlc3RhYmxpc2htZW50J119XG4gICAgKTtcbiAgICBhdXRvY29tcGxldGUuYWRkTGlzdGVuZXIoJ3BsYWNlX2NoYW5nZWQnLCAoKSA9PiB7XG4gICAgICBsZXQgcGxhY2UgPSBhdXRvY29tcGxldGUuZ2V0UGxhY2UoKVxuICAgICAgaWYgKHBsYWNlLmZvcm1hdHRlZF9hZGRyZXNzKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25BdXRvQ29tcGxldGUocGxhY2UuZm9ybWF0dGVkX2FkZHJlc3MsIHRoaXMucHJvcHMudHJpcE5vZGUpXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnBsYWNlaG9sZGVyfVxuICAgICAgICAgIGlkPXt0aGlzLnN0YXRlLmlkfVxuICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uTG9jYXRpb25DaGFuZ2V9XG4gICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5uYW1lfVxuICAgICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2NvbXBvbmVudHMvbG9jYXRpb25TZWFyY2guanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBkZXNlbGVjdFJvdXRlIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleC5qcyc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5cbmNsYXNzIEFjdGl2ZVJvdXRlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIHViZXI6ICd1YmVyJyxcbiAgICAgICAgbHlmdDogJ2x5ZnQnLFxuICAgICAgICBwcmljZTogJ3ByaWNlJyxcbiAgICAgICAgdGltZTogJ3RpbWUnXG4gICAgICB9LFxuICAgICAgb3JkZXJDYWI6IG51bGxcbiAgICB9XG4gICAgdGhpcy5vcmRlclJpZGUgPSB0aGlzLm9yZGVyUmlkZS5iaW5kKHRoaXMpO1xuICB9XG4gIG9yZGVyUmlkZSgpIHtcbiAgICBsZXQgc3RhcnRBZGQgPSB0aGlzLnByb3BzLmN1cnJlbnRBZGRyZXNzLnN0YXJ0LFxuICAgICAgICBlbmRBZGQgPSB0aGlzLnByb3BzLmN1cnJlbnRBZGRyZXNzLmVuZCxcbiAgICAgICAgc3RhcnRMYXQgPSB0aGlzLnByb3BzLmN1cnJlbnRDb29yZHMuc3RhcnQubGF0LFxuICAgICAgICBzdGFydExuZyA9IHRoaXMucHJvcHMuY3VycmVudENvb3Jkcy5zdGFydC5sbmcsXG4gICAgICAgIGVuZExhdCA9IHRoaXMucHJvcHMuY3VycmVudENvb3Jkcy5lbmQubGF0LFxuICAgICAgICBlbmRMbmcgPSB0aGlzLnByb3BzLmN1cnJlbnRDb29yZHMuZW5kLmxuZztcbiAgICAvLyBBc3NpZ25zIG9yZGVyIHVybCB0byBVYmVyXG4gICAgaWYodGhpcy5wcm9wcy5yb3V0ZS5kaXNwbGF5X25hbWUubWF0Y2goL3ViZXIvaSkpIHtcbiAgICAgIGxldCB1YmVyVXJsID0gXCJ1YmVyOi8vP2NsaWVudF9pZD0zN3lIRzEteDhpd21lMmZqb2d4b2Ezd1VfNG4ydldkNWV4Q3BFQjh1JmFjdGlvbj1zZXRQaWNrdXBcIjtcbiAgICAgIGxldCB1YmVyQ29vcmRzID0gYCZwaWNrdXBbbGF0aXR1ZGVdPSR7c3RhcnRMYXR9JnBpY2t1cFtsb25naXR1ZGVdPSR7c3RhcnRMbmd9JnBpY2t1cFtmb3JtYXR0ZWRfYWRkcmVzc109JHtlbmNvZGVVUklDb21wb25lbnQoc3RhcnRBZGQpfSZkcm9wb2ZmW2xhdGl0dWRlXT0ke2VuZExhdH0mZHJvcG9mZltsb25naXR1ZGVdPSR7ZW5kTG5nfSZkcm9wb2ZmW2Zvcm1hdHRlZF9hZGRyZXNzXT0ke2VuY29kZVVSSUNvbXBvbmVudChlbmRBZGQpfSZwcm9kdWN0X2lkPWExMTExYzhjLWM3MjAtNDZjMy04NTM0LTJmY2RkNzMwMDQwZGBcbiAgICAgIGxldCBvcmRlclViZXIgPSB1YmVyVXJsICsgdWJlckNvb3JkcztcbiAgICAgIHRoaXMuc2V0U3RhdGUoe29yZGVyQ2FiOiBvcmRlclViZXJ9KVxuICAgIC8vIEFzc2lnbnMgb3JkZXIgdXJsIHRvIGx5ZnRcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMucm91dGUuZGlzcGxheV9uYW1lLm1hdGNoKC9seWZ0L2kpKSB7XG4gICAgICAgIGxldCBseWZ0VXJsID0gYGx5ZnQ6Ly9yaWRldHlwZT9pZD0ke3RoaXMucHJvcHMucm91dGUuZGlzcGxheV9uYW1lLnJlcGxhY2UoJyAnLCAnXycpLnRvTG93ZXJDYXNlKCl9JnBhcnRuZXI9XzJiTEMyWDhZZkU4YlZDMXFjTGEwdk9RdXQ1cjFsQl9gO1xuICAgICAgICBsZXQgbHlmdENvb2RzID0gYCZwaWNrdXBbbGF0aXR1ZGVdPSR7c3RhcnRMYXR9JnBpY2t1cFtsb25naXR1ZGVdPSR7c3RhcnRMbmd9JmRlc3RpbmF0aW9uW2xhdGl0dWRlXT0ke2VuZExhdH0mZGVzdGluYXRpb25bbG9uZ2l0dWRlXT0ke2VuZExuZ31gXG4gICAgICAgIGxldCBvcmRlckx5ZnQgPSBseWZ0VXJsICsgbHlmdENvb2RzO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtvcmRlckNhYjogb3JkZXJMeWZ0fSlcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIC8vIEZvcm1hdHRpbmcgZm9yIGRpc3BsYXkuLi5jb3VsZCBiZSBkb25lIGJldHRlcj9cbiAgICBpZiAoIXRoaXMucHJvcHMucm91dGUpIHsgcmV0dXJuIDxkaXY+PC9kaXY+OyB9XG4gICAgbGV0IGV0YSA9IE1hdGgucm91bmQodGhpcy5wcm9wcy5yb3V0ZS5ldGEvNjApLFxuICAgICAgICB0b3RhbFRpbWUgPSBNYXRoLnJvdW5kKCh0aGlzLnByb3BzLnJvdXRlLmR1cmF0aW9uICsgdGhpcy5wcm9wcy5yb3V0ZS5ldGEpLzYwKSxcbiAgICAgICAgZXRhTWludXRlcyA9IGV0YSA8PSAxID8gJ21pbnV0ZScgOiAnbWludXRlcycsXG4gICAgICAgIGNvc3QgPSB0aGlzLnByb3BzLnJvdXRlLmhpZ2hfZXN0aW1hdGUgPyAnJCcgKyAoTWF0aC5yb3VuZCh0aGlzLnByb3BzLnJvdXRlLmhpZ2hfZXN0aW1hdGUvMTAwKSkgOiAnTWV0ZXJlZCcsXG4gICAgICAgIHRvdGFsTWludXRlcyA9IHRvdGFsVGltZSA8PSAxID8gJ21pbnV0ZScgOiAnbWludXRlcycsXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA9IHRoaXMuc3RhdGUuc3R5bGVbdGhpcy5wcm9wcy5zdHlsZV0sXG4gICAgICAgIGNsYXNzZXMgPSAnc2VsZWN0ZWQtcm91dGUtY29udGFpbmVyICcgKyBiYWNrZ3JvdW5kQ29sb3I7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5wcm9wcy5kZXNlbGVjdFJvdXRlfSBjbGFzc05hbWU9XCJsaWdodGJveC1iYWNrZ3JvdW5kXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgICAgICA8aDE+e3RoaXMucHJvcHMucm91dGUuZGlzcGxheV9uYW1lfTwvaDE+XG4gICAgICAgICAgPGgxPntjb3N0fTwvaDE+XG4gICAgICAgICAgPHA+UGlja3VwOiB7ZXRhfSB7ZXRhTWludXRlc308L3A+XG4gICAgICAgICAgPHA+VG90YWw6IHt0b3RhbFRpbWV9IHt0b3RhbE1pbnV0ZXN9PC9wPlxuICAgICAgICAgICAgPGEgaHJlZj17dGhpcy5zdGF0ZS5vcmRlckNhYn0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIm9yZGVyLWJ0blwiIG9uQ2xpY2s9e3RoaXMub3JkZXJSaWRlfT5PcmRlciBSaWRlPC9idXR0b24+XG4gICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICByZXR1cm4ge1xuICAgIGN1cnJlbnRBZGRyZXNzOiBzdGF0ZS5jdXJyZW50QWRkcmVzcyxcbiAgICBjdXJyZW50Q29vcmRzOiBzdGF0ZS5jdXJyZW50Q29vcmRzLFxuICAgIHJvdXRlOiBzdGF0ZS5hY3RpdmVSb3V0ZS5yb3V0ZSxcbiAgICBzdHlsZTogc3RhdGUuYWN0aXZlUm91dGUuc3R5bGVcbiAgfTtcbn1cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKHsgZGVzZWxlY3RSb3V0ZSB9LCBkaXNwYXRjaClcbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFjdGl2ZVJvdXRlKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2NvbnRhaW5lcnMvYWN0aXZlUm91dGUuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBnZXRDb29yZHMsIGZldGNoRXhwYW5kZWQgfSBmcm9tICcuLi9hY3Rpb25zL3JlcXVlc3RzJztcbi8vIENvbXBvbmVudHNcbmltcG9ydCBMb2NhdGlvblNlYXJjaCBmcm9tICcuLi9jb21wb25lbnRzL2xvY2F0aW9uU2VhcmNoLmpzeCc7XG5pbXBvcnQgRXhwYW5kU2VhcmNoIGZyb20gJy4uL2NvbXBvbmVudHMvZXhwYW5kU2VhcmNoLmpzeCc7XG5cbmNsYXNzIENvbnRyb2xzIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc3RhcnRMb2NhdGlvbjogJycsXG4gICAgICBlbmRMb2NhdGlvbjogJycsXG4gICAgICBzdGFydFBsYWNlaG9sZGVyOiAnUGlja3VwJyxcbiAgICAgIGVuZFBsYWNlaG9sZGVyOiAnRHJvcG9mZicsXG4gICAgICBjdXJyZW50TG9jYXRpb246IG51bGxcbiAgICB9O1xuICAgIHRoaXMub25Gb3JtU3VibWl0ID0gdGhpcy5vbkZvcm1TdWJtaXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUxvY2F0aW9uQ2hhbmdlID0gdGhpcy5oYW5kbGVMb2NhdGlvbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlTG9jYXRpb25BdXRvQ29tcGxldGUgPSB0aGlzLmhhbmRsZUxvY2F0aW9uQXV0b0NvbXBsZXRlLmJpbmQodGhpcylcbiAgfVxuICAvLyBHZXRzIHVzZXIgbG9jYXRpb24gd2l0aCBIVE1MNSBnZW9sb2NhdGlvblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKChwb3NpdGlvbikgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGN1cnJlbnRMb2NhdGlvbjoge1xuICAgICAgICAgIGxhdDogcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLFxuICAgICAgICAgIGxuZzogcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICAvLyBXaXBlcyBpbnB1dCBmaWVsZCBhZnRlciBmb3JtIHN1Ym1pc3Npb24gKGF0IHRoZSBlbmQgb2YgcmVkdXggY3ljbGUpXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzdGFydExvY2F0aW9uOiAnJyxcbiAgICAgIGVuZExvY2F0aW9uOiAnJ1xuICAgIH0pO1xuICB9XG4gIC8vIEFzc2lnbnMgaW5wdXQgcGxhY2Vob2xkZXJzIGFuZCBmaXJlcyBvZiByZWR1eCBjaGFpbiBBUEkgY2FsbHNcbiAgb25Gb3JtU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHRoaXMucHJvcHMuY2FuUmVxdWVzdFJvdXRlcykge1xuICAgICAgbGV0IHN0YXJ0TG9jYXRpb24gPSBlLnRhcmdldC5zdGFydExvY2F0aW9uLnZhbHVlLFxuICAgICAgICAgIGVuZExvY2F0aW9uID0gZS50YXJnZXQuZW5kTG9jYXRpb24udmFsdWU7XG4gICAgICBpZiAoc3RhcnRMb2NhdGlvbiAmJiBlbmRMb2NhdGlvbikge1xuICAgICAgICBsZXQgbG9jYXRpb24gPSB7XG4gICAgICAgICAgc3RhcnQ6IHN0YXJ0TG9jYXRpb24sXG4gICAgICAgICAgZW5kOiBlbmRMb2NhdGlvblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHN0YXJ0UGxhY2Vob2xkZXI6IHN0YXJ0TG9jYXRpb24sXG4gICAgICAgICAgZW5kUGxhY2Vob2xkZXI6IGVuZExvY2F0aW9uXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMucHJvcHMuZ2V0Q29vcmRzKGxvY2F0aW9uKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBUcmFja3MgdXNlciBpbnB1dCB0byBsb2NhbCBzdGF0ZSB2YWx1ZXNcbiAgaGFuZGxlTG9jYXRpb25DaGFuZ2UoZSkge1xuICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xuICAgICAgY2FzZSAnc3RhcnRMb2NhdGlvbic6XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGFydExvY2F0aW9uOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlbmRMb2NhdGlvbic6XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlbmRMb2NhdGlvbjogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICAvLyBBc3NpZ25zIEdvb2dsZSBhdXRvY29tcGxldGUgdmFsdWVzIHRvIGxvY2FsIHN0YXRlXG4gIGhhbmRsZUxvY2F0aW9uQXV0b0NvbXBsZXRlKGFkZHJlc3MsIHRyaXBOb2RlKSB7XG4gICAgc3dpdGNoICh0cmlwTm9kZSkge1xuICAgICAgY2FzZSAnc3RhcnRMb2NhdGlvbic6XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGFydExvY2F0aW9uOiBhZGRyZXNzIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2VuZExvY2F0aW9uJzpcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVuZExvY2F0aW9uOiBhZGRyZXNzIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGxldCBpc0FjdGl2ZSA9ICdpbmFjdGl2ZS1leHBhbmQnLFxuICAgICAgICBjYW5FeHBhbmQgPSBudWxsO1xuICAgIGlmICh0aGlzLnByb3BzLmN1cnJlbnRBZGRyZXNzLnN0YXJ0KSB7XG4gICAgICBpc0FjdGl2ZSA9ICdhY3RpdmUtZXhwYW5kJztcbiAgICAgIGNhbkV4cGFuZCA9IHRoaXMucHJvcHMuZmV0Y2hFeHBhbmRlZFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYm94XCI+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uRm9ybVN1Ym1pdH0gY2xhc3NOYW1lPVwibG9jYXRpb24tZm9ybVwiPlxuICAgICAgICAgIDxMb2NhdGlvblNlYXJjaFxuICAgICAgICAgICAgdHJpcE5vZGU9XCJzdGFydExvY2F0aW9uXCJcbiAgICAgICAgICAgIG9uTG9jYXRpb25DaGFuZ2U9e3RoaXMuaGFuZGxlTG9jYXRpb25DaGFuZ2V9XG4gICAgICAgICAgICBvbkF1dG9Db21wbGV0ZT17dGhpcy5oYW5kbGVMb2NhdGlvbkF1dG9Db21wbGV0ZX1cbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnN0YXJ0TG9jYXRpb259XG4gICAgICAgICAgICBuYW1lPVwic3RhcnRMb2NhdGlvblwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5zdGF0ZS5zdGFydFBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8TG9jYXRpb25TZWFyY2hcbiAgICAgICAgICAgIHRyaXBOb2RlPVwiZW5kTG9jYXRpb25cIlxuICAgICAgICAgICAgb25Mb2NhdGlvbkNoYW5nZT17dGhpcy5oYW5kbGVMb2NhdGlvbkNoYW5nZX1cbiAgICAgICAgICAgIG9uQXV0b0NvbXBsZXRlPXt0aGlzLmhhbmRsZUxvY2F0aW9uQXV0b0NvbXBsZXRlfVxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW5kTG9jYXRpb259XG4gICAgICAgICAgICBuYW1lPVwiZW5kTG9jYXRpb25cIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMuc3RhdGUuZW5kUGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1zdWJtaXRcIj5cbiAgICAgICAgICAgIDxFeHBhbmRTZWFyY2hcbiAgICAgICAgICAgICAgY2xhc3NTdHlsZT17aXNBY3RpdmV9XG4gICAgICAgICAgICAgIGN1cnJlbnRMb2NhdGlvbj17dGhpcy5wcm9wcy5jdXJyZW50Q29vcmRzfVxuICAgICAgICAgICAgICBleHBhbmRTZWFyY2g9e2NhbkV4cGFuZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmb3JtLWJ0blwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICBjYW5SZXF1ZXN0Um91dGVzOiBzdGF0ZS5yZXF1ZXN0Um91dGUsXG4gICAgY3VycmVudENvb3Jkczogc3RhdGUuY3VycmVudENvb3JkcyxcbiAgICBjdXJyZW50QWRkcmVzczogc3RhdGUuY3VycmVudEFkZHJlc3NcbiAgfVxufVxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoeyBnZXRDb29yZHM6IGdldENvb3JkcywgZmV0Y2hFeHBhbmRlZDogZmV0Y2hFeHBhbmRlZH0sIGRpc3BhdGNoKTtcbn1cbi8vIG5vIG1hcFN0YXRlVG9Qcm9wcywgbXVzdCB1c2UgbnVsbCB0byBza2lwIHRvIG1hcERpc3BhdGNoVG9Qcm9wc1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ29udHJvbHMpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29udGFpbmVycy9jb250cm9scy5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcblxuY2xhc3MgTWFwVmlldyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gQWxsb3dzIGRpcmVjdGlvbnMgdG8gYmUgcmVuZGVyZWQgb24gdGhlIG1hcFxuICAgIGxldCBkaXJlY3Rpb25zRGlzcGxheSA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zUmVuZGVyZXIoe1xuICAgICAgc3VwcHJlc3NNYXJrZXJzOiB0cnVlXG4gICAgfSk7XG4gICAgLy8gQ3JlYXRlcyBwZXJzaXN0ZW50IG1hcCBmb3Igc2Vzc2lvblxuICAgIGxldCBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXAtY29udGFpbmVyJyksIHtcbiAgICAgIGNlbnRlcjogdGhpcy5wcm9wcy5jdXJyZW50Q29vcmRzLnN0YXJ0IHx8IHsgbGF0OiAzNy43NzM5NzIsIGxuZzogLTEyMi40MzEyOTcgfSxcbiAgICAgIHNjcm9sbHdoZWVsOiBmYWxzZSxcbiAgICAgIHpvb206IDEwLFxuICAgICAgZGlzYWJsZURlZmF1bHRVSTogdHJ1ZSxcbiAgICAgIHNjYWxlQ29udHJvbDogdHJ1ZSxcbiAgICAgIHpvb21Db250cm9sOiB0cnVlXG4gICAgfSk7XG4gICAgLy8gU2V0cyB0aGUgZGlyZWN0aW9uc0Rpc3BsYXkgdG8gdGhlIGN1cnJlbnQgbWFwXG4gICAgZGlyZWN0aW9uc0Rpc3BsYXkuc2V0TWFwKG1hcCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtYXA6IG1hcCxcbiAgICAgIGRpcmVjdGlvbnNEaXNwbGF5OiBkaXJlY3Rpb25zRGlzcGxheSxcbiAgICAgIG1hcmtlcnM6IFtdXG4gICAgfSk7XG4gIH1cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcygpIHtcbiAgICAvLyBJZiBuZXcgY29vcmRzLCByZW1vdmUgb2xkIHBvc2l0aW9uIG1hcmtlcnNcbiAgICBpZiAodGhpcy5wcm9wcy5jdXJyZW50Q29vcmRzLnN0YXJ0IHx8IHRoaXMucHJvcHMuY3VycmVudENvb3Jkcy5lbmQpIHtcbiAgICAgIGZvciAobGV0IG1hcmtlciBpbiB0aGlzLnByb3BzLnJvdXRlTWFya2Vycykge1xuICAgICAgICB0aGlzLnByb3BzLnJvdXRlTWFya2Vyc1ttYXJrZXJdLnNldE1hcChudWxsKTtcbiAgICAgIH1cbiAgICAgIC8vIFJlbW92ZXMgZXhwYW5kZWQgbWFya2VycyBhcyB3ZWxsXG4gICAgICBmb3IgKGxldCBtYXJrZXIgaW4gdGhpcy5wcm9wcy5leHBhbmRlZE1hcmtlcnMpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZXhwYW5kZWRNYXJrZXJzW21hcmtlcl0pIHtcbiAgICAgICAgICB0aGlzLnByb3BzLmV4cGFuZGVkTWFya2Vyc1ttYXJrZXJdLnNldE1hcChudWxsKTtcbiAgICAgICAgICB0aGlzLnByb3BzLmV4cGFuZGVkTWFya2Vyc1ttYXJrZXJdPW51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIC8vIENyZWF0ZXMgZGlyZWN0aW9uIHBhdGggb24gbWFwXG4gICAgaWYgKHRoaXMucHJvcHMuZGlyZWN0aW9ucykge1xuICAgICAgdGhpcy5zdGF0ZS5kaXJlY3Rpb25zRGlzcGxheS5zZXREaXJlY3Rpb25zKHRoaXMucHJvcHMuZGlyZWN0aW9ucyk7XG4gICAgfVxuICAgIC8vIERyb3Agcm91dGUgbWFya2VycyBvbiBtYXBcbiAgICBpZiAodGhpcy5wcm9wcy5yb3V0ZU1hcmtlcnMuc3RhcnQpIHtcbiAgICAgIGxldCBtYXJrZXJzID0gdGhpcy5wcm9wcy5yb3V0ZU1hcmtlcnMsXG4gICAgICBib3VuZHMgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKCk7XG4gICAgICBmb3IgKGxldCBkYXRhIGluIG1hcmtlcnMpIHtcbiAgICAgICAgaWYgKG1hcmtlcnNbZGF0YV0ucG9zaXRpb24pIHtcbiAgICAgICAgICBtYXJrZXJzW2RhdGFdLnNldE1hcCh0aGlzLnN0YXRlLm1hcCk7XG4gICAgICAgICAgYm91bmRzLmV4dGVuZChtYXJrZXJzW2RhdGFdLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnN0YXRlLm1hcC5maXRCb3VuZHMoYm91bmRzKTtcbiAgICB9XG4gICAgLy8gU2V0IGV4cGFuZGVkIG1hcmtlcnMgYW5kIHJlbW92ZSBjdXJyZW50IGRpcmVjdGlvbnMgKGZvciBjbG9zZXIgYm91bmRpbmcgYm94KVxuICAgIGlmICh0aGlzLnByb3BzLmV4cGFuZGVkTWFya2Vycy5wcmljZSB8fCB0aGlzLnByb3BzLmV4cGFuZGVkTWFya2Vycy50aW1lKSB7XG4gICAgICB0aGlzLnN0YXRlLmRpcmVjdGlvbnNEaXNwbGF5LnNldCgnZGlyZWN0aW9ucycsIG51bGwpO1xuICAgICAgbGV0IG1hcmtlcnMgPSB0aGlzLnByb3BzLmV4cGFuZGVkTWFya2VycyxcbiAgICAgICAgICBib3VuZHMgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKCk7XG4gICAgICBmb3IgKGxldCBkYXRhIGluIG1hcmtlcnMpIHtcbiAgICAgICAgaWYgKG1hcmtlcnNbZGF0YV0ucG9zaXRpb24pIHtcbiAgICAgICAgICBtYXJrZXJzW2RhdGFdLnNldE1hcCh0aGlzLnN0YXRlLm1hcCk7XG4gICAgICAgICAgYm91bmRzLmV4dGVuZChtYXJrZXJzW2RhdGFdLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBFeHRlbmRzIGJvdW5kcyB0byBpbmNsdWRlIGV4cGFuZGVkIG1hcmtlcnMgYW5kIHN0YXJ0IGxvY2F0aW9uXG4gICAgICBib3VuZHMuZXh0ZW5kKHRoaXMucHJvcHMucm91dGVNYXJrZXJzWydzdGFydCddLmdldFBvc2l0aW9uKCkpO1xuICAgICAgdGhpcy5zdGF0ZS5tYXAuZml0Qm91bmRzKGJvdW5kcyk7XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgd2Fsa2luZ0Rpc3RhbmNlO1xuICAgIC8vIERpc3BsYXlzIHdhbGtpbmcgdGltZSBpZiBsZXNzIHRoYW4gNDUgbWludXRlc1xuICAgIGlmICh0aGlzLnByb3BzLmRpcmVjdGlvbnMgJiYgdGhpcy5wcm9wcy5kaXJlY3Rpb25zLnJvdXRlc1swXS5sZWdzWzBdLmR1cmF0aW9uLnZhbHVlIDw9IDI3MDApIHtcbiAgICAgIGxldCB0aW1lID0gdGhpcy5wcm9wcy5kaXJlY3Rpb25zLnJvdXRlc1swXS5sZWdzWzBdLmR1cmF0aW9uLnRleHQsXG4gICAgICBtZXNzYWdlID0gYFdhbGtpbmc6ICR7dGltZX1gO1xuICAgICAgd2Fsa2luZ0Rpc3RhbmNlID0gPGRpdiBjbGFzc05hbWU9XCJ3YWxraW5nLWRpc3RhbmNlXCI+e21lc3NhZ2V9PC9kaXY+O1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBpZD1cIm1hcC1kaXNwbGF5XCI+XG4gICAgICAgICAge3dhbGtpbmdEaXN0YW5jZX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcC1jb250YWluZXJcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICBjdXJyZW50Q29vcmRzOiBzdGF0ZS5jdXJyZW50Q29vcmRzLFxuICAgIHJvdXRlTWFya2Vyczogc3RhdGUucm91dGVNYXJrZXJzLFxuICAgIGV4cGFuZGVkTWFya2Vyczogc3RhdGUuZXhwYW5kZWRNYXJrZXJzLFxuICAgIGRpcmVjdGlvbnM6IHN0YXRlLmRpcmVjdGlvbnMsXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShNYXBWaWV3KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2NvbnRhaW5lcnMvbWFwVmlldy5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHNlbGVjdFJvdXRlIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleC5qcyc7XG4vLyBNYWtlcyBzdXJlIGFjdGlvbiBmbG93cyB0aHJvdWdoIGFsbCByZWR1Y2VycyB0byBtYWludGFpbiBzdGF0ZVxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgUm91dGVMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvcm91dGVMaXN0LmpzeCc7XG5pbXBvcnQgRXhwYW5kZWRSb3V0ZUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9leHBhbmRlZFJvdXRlTGlzdC5qc3gnO1xuXG5jbGFzcyBSb3V0ZUxpc3RzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGxldCBleHBhbmRlZFJvdXRlcztcbiAgICBpZiAodGhpcy5wcm9wcy5leHBhbmRlZFJvdXRlcy5wcmljZSB8fCB0aGlzLnByb3BzLmV4cGFuZGVkUm91dGVzLnRpbWUpIHtcbiAgICAgIGV4cGFuZGVkUm91dGVzID1cbiAgICAgIDxFeHBhbmRlZFJvdXRlTGlzdFxuICAgICAgICByb3V0ZXM9e3RoaXMucHJvcHMuZXhwYW5kZWRSb3V0ZXN9XG4gICAgICAgIHNlbGVjdFJvdXRlPXt0aGlzLnByb3BzLnNlbGVjdFJvdXRlfVxuICAgICAgICAvPlxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWNvbnRhaW5lclwiPlxuICAgICAgICB7ZXhwYW5kZWRSb3V0ZXN9XG4gICAgICAgIDxSb3V0ZUxpc3RcbiAgICAgICAgICByb3V0ZXM9e3RoaXMucHJvcHMudWJlclJvdXRlc31cbiAgICAgICAgICBjbGFzc1N0eWxlPXsndWJlcid9XG4gICAgICAgICAgc2VsZWN0Um91dGU9e3RoaXMucHJvcHMuc2VsZWN0Um91dGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPFJvdXRlTGlzdFxuICAgICAgICAgIHJvdXRlcz17dGhpcy5wcm9wcy5seWZ0Um91dGVzfVxuICAgICAgICAgIGNsYXNzU3R5bGU9eydseWZ0J31cbiAgICAgICAgICBzZWxlY3RSb3V0ZT17dGhpcy5wcm9wcy5zZWxlY3RSb3V0ZX1cbiAgICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICB1YmVyUm91dGVzOiBzdGF0ZS5yb3V0ZXMudWJlcixcbiAgICBseWZ0Um91dGVzOiBzdGF0ZS5yb3V0ZXMubHlmdCxcbiAgICBleHBhbmRlZFJvdXRlczogc3RhdGUuZXhwYW5kZWRSb3V0ZXMsXG4gICAgZXhwYW5kZWREaXJlY3Rpb25zOiBzdGF0ZS5leHBhbmRlZERpcmVjdGlvbnNcbiAgfTtcbn1cbi8vIEFsbCByZXR1cm5zIHJldHVybiBhcyBwcm9wcyB0byByb3V0ZSBjb250YWluZXJcbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICAvLyBXaGVuIHNlbGVjdFJvdXRlIGlzIGNhbGxlZCwgdGhlIHJlc3VsdCBpcyBwYXNzZWQgdG8gYWxsIHJlZHVjZXJzXG4gIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoeyBzZWxlY3RSb3V0ZSB9LCBkaXNwYXRjaCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFJvdXRlTGlzdHMpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29udGFpbmVycy9yb3V0ZUxpc3RzLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zYXNzL3N0eWxlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzOTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=