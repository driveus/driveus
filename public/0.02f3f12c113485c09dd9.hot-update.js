webpackHotUpdate(0,{

/***/ 186:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? { uber: [], lyft: [] } : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _types.INVALID_ROUTES_UBER:
	      console.log('Invalid route!');
	      return state;
	
	    case _types.REQUEST_ROUTES:
	      console.log('Requesting routes...');
	      return state;
	    case _types.RECEIVE_ROUTES_UBER:
	      console.log('Received Uber routes!', action.routes);
	      return Object.assign({}, state, {
	        uber: action.routes
	      });
	    case _types.RECEIVE_ROUTES_LYFT:
	      console.log('Received Lyft routes!', action.routes);
	      return Object.assign({}, state, {
	        lyft: action.routes
	      });
	  }
	  return state;
	};
	
	var _types = __webpack_require__(11);

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvcmVkdWNlcnMvcmVkdWNlcl9yb3V0ZXMuanM/ZGE4MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OzttQkFPZSxZQUEwQztPQUFBLDhEQUEzQixFQUFDLE1BQUssSUFBRyxNQUFrQjtPQUFBLG1CQUN2RDs7V0FBUSxPQUNOO2lCQUNFO2VBQVEsSUFDUjtjQUVGOztpQkFDRTtlQUFRLElBQ1I7Y0FDRjtpQkFDRTtlQUFRLElBQUkseUJBQXlCLE9BQ3JDO3FCQUFjLE9BQU8sSUFBSTtlQUNqQixPQUVWO0FBRkksUUFESztpQkFJUDtlQUFRLElBQUkseUJBQXlCLE9BQ3JDO3FCQUFjLE9BQU8sSUFBSTtlQUNqQixPQUdaO0FBSE0sUUFESzs7VUFLWjs7O0FBNUJELHNDIiwiZmlsZSI6IjAuMDJmM2YxMmMxMTM0ODVjMDlkZDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFJFUVVFU1RfUk9VVEVTLFxuICBSRUNFSVZFX1JPVVRFU19VQkVSLFxuICBSRUNFSVZFX1JPVVRFU19MWUZULFxuICBJTlZBTElEX1JPVVRFU19VQkVSLFxufSBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3RhdGU9e3ViZXI6W10sbHlmdDpbXX0sIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBJTlZBTElEX1JPVVRFU19VQkVSOlxuICAgICAgY29uc29sZS5sb2coJ0ludmFsaWQgcm91dGUhJylcbiAgICAgIHJldHVybiBzdGF0ZTtcblxuICAgIGNhc2UgUkVRVUVTVF9ST1VURVM6XG4gICAgICBjb25zb2xlLmxvZygnUmVxdWVzdGluZyByb3V0ZXMuLi4nKVxuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIGNhc2UgUkVDRUlWRV9ST1VURVNfVUJFUjpcbiAgICAgIGNvbnNvbGUubG9nKCdSZWNlaXZlZCBVYmVyIHJvdXRlcyEnLCBhY3Rpb24ucm91dGVzKVxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIHViZXI6IGFjdGlvbi5yb3V0ZXNcbiAgICAgIH0pO1xuICAgIGNhc2UgUkVDRUlWRV9ST1VURVNfTFlGVDpcbiAgICAgIGNvbnNvbGUubG9nKCdSZWNlaXZlZCBMeWZ0IHJvdXRlcyEnLCBhY3Rpb24ucm91dGVzKVxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGx5ZnQ6IGFjdGlvbi5yb3V0ZXNcbiAgICAgIH0pO1xuICB9XG4gIHJldHVybiBzdGF0ZTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL3JlZHVjZXJzL3JlZHVjZXJfcm91dGVzLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==