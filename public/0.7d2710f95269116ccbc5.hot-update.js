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
	      return {
	        uber: [],
	        lyft: []
	      };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvcmVkdWNlcnMvcmVkdWNlcl9yb3V0ZXMuanM/ZGE4MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OzttQkFPZSxZQUEwQztPQUFBLDhEQUEzQixFQUFDLE1BQUssSUFBRyxNQUFrQjtPQUFBLG1CQUN2RDs7V0FBUSxPQUNOO2lCQUNFO2VBQVEsSUFDUjtjQUVGOztpQkFDRTtlQUFRLElBQ1I7O2VBRUU7ZUFFSjtBQUhJO2lCQUlGO2VBQVEsSUFBSSx5QkFBeUIsT0FDckM7cUJBQWMsT0FBTyxJQUFJO2VBQ2pCLE9BRVY7QUFGSSxRQURLO2lCQUlQO2VBQVEsSUFBSSx5QkFBeUIsT0FDckM7cUJBQWMsT0FBTyxJQUFJO2VBQ2pCLE9BR1o7QUFITSxRQURLOztVQUtaOzs7QUEvQkQsc0MiLCJmaWxlIjoiMC43ZDI3MTBmOTUyNjkxMTZjY2JjNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgUkVRVUVTVF9ST1VURVMsXG4gIFJFQ0VJVkVfUk9VVEVTX1VCRVIsXG4gIFJFQ0VJVkVfUk9VVEVTX0xZRlQsXG4gIElOVkFMSURfUk9VVEVTX1VCRVIsXG59IGZyb20gJy4uL2FjdGlvbnMvdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdGF0ZT17dWJlcjpbXSxseWZ0OltdfSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIElOVkFMSURfUk9VVEVTX1VCRVI6XG4gICAgICBjb25zb2xlLmxvZygnSW52YWxpZCByb3V0ZSEnKVxuICAgICAgcmV0dXJuIHN0YXRlO1xuXG4gICAgY2FzZSBSRVFVRVNUX1JPVVRFUzpcbiAgICAgIGNvbnNvbGUubG9nKCdSZXF1ZXN0aW5nIHJvdXRlcy4uLicpXG4gICAgICByZXR1cm4ge1xuICAgICAgICB1YmVyOiBbXSxcbiAgICAgICAgbHlmdDogW11cbiAgICAgIH07XG4gICAgY2FzZSBSRUNFSVZFX1JPVVRFU19VQkVSOlxuICAgICAgY29uc29sZS5sb2coJ1JlY2VpdmVkIFViZXIgcm91dGVzIScsIGFjdGlvbi5yb3V0ZXMpXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgdWJlcjogYWN0aW9uLnJvdXRlc1xuICAgICAgfSk7XG4gICAgY2FzZSBSRUNFSVZFX1JPVVRFU19MWUZUOlxuICAgICAgY29uc29sZS5sb2coJ1JlY2VpdmVkIEx5ZnQgcm91dGVzIScsIGFjdGlvbi5yb3V0ZXMpXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbHlmdDogYWN0aW9uLnJvdXRlc1xuICAgICAgfSk7XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvcmVkdWNlcnMvcmVkdWNlcl9yb3V0ZXMuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9