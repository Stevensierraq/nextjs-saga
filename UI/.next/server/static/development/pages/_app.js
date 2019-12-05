module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../BL/store/configure-store.js":
/*!**************************************!*\
  !*** ../BL/store/configure-store.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _root_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./root-reducer */ "../BL/store/root-reducer.js");
/* harmony import */ var _root_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./root-saga */ "../BL/store/root-saga.js");







function configureStore(preloadedState, {isServer, req = null}) {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()()
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(
    _root_reducer__WEBPACK_IMPORTED_MODULE_3__["default"],
    preloadedState,
    Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(
      Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(sagaMiddleware),
    ),
  )

  if (req || !isServer) {
    store.sagaTask = sagaMiddleware.run(_root_saga__WEBPACK_IMPORTED_MODULE_4__["default"])
  }

  return store
}

/* harmony default export */ __webpack_exports__["default"] = (configureStore);


/***/ }),

/***/ "../BL/store/root-reducer.js":
/*!***********************************!*\
  !*** ../BL/store/root-reducer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _test_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../test/constants */ "../BL/test/constants.js");


const initialState = {}

const reducer = {
  [_test_constants__WEBPACK_IMPORTED_MODULE_0__["INIT_ASYNC_REDUX_INFO"]]: (state) => ({
    ...state,
    asyncLoading: true
  }),
  [_test_constants__WEBPACK_IMPORTED_MODULE_0__["GET_SYNC_REDUX_PROP_TYPE"]]: (state, action) => ({
    ...state,
    syncReduxProp: action.data
  }),
  [_test_constants__WEBPACK_IMPORTED_MODULE_0__["GET_ASYNC_REDUX_SAGA_PROP_TYPE_SUCCESS"]]: (state, action) => ({
    ...state,
    asyncLoading: false,
    asyncReduxSagaProp: action.data
  })
}

function rootReducer(state = initialState, action) {
  // switch (action.type) {
  //   case INIT_ASYNC_REDUX_INFO:
  //     return {...state, asyncLoading: true}
  //   case GET_SYNC_REDUX_PROP_TYPE:
  //     return {...state, syncReduxProp: action.data}
  //   case GET_ASYNC_REDUX_SAGA_PROP_TYPE_SUCCESS:
  //     return {...state, asyncReduxSagaProp: action.data, asyncLoading: false}
  //   default:
  //     return state
  // }

  if(!reducer[action.type]) return state
  return reducer[action.type](state, action)
}

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);


/***/ }),

/***/ "../BL/store/root-saga.js":
/*!********************************!*\
  !*** ../BL/store/root-saga.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _test_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../test/constants */ "../BL/test/constants.js");




const TEST = "development" === 'test'

function* getAsyncReduxSagaProp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({ type: _test_constants__WEBPACK_IMPORTED_MODULE_1__["INIT_ASYNC_REDUX_INFO"] })

  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(TEST ? 100 : 2500)

  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
    type: _test_constants__WEBPACK_IMPORTED_MODULE_1__["GET_ASYNC_REDUX_SAGA_PROP_TYPE_SUCCESS"],
    data: _test_constants__WEBPACK_IMPORTED_MODULE_1__["ASYNC_REDUX_SAGA_PROP_TEXT"],
  })
}

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_test_constants__WEBPACK_IMPORTED_MODULE_1__["GET_ASYNC_REDUX_SAGA_PROP_TYPE"], getAsyncReduxSagaProp)
}

/* harmony default export */ __webpack_exports__["default"] = (rootSaga);


/***/ }),

/***/ "../BL/test/constants.js":
/*!*******************************!*\
  !*** ../BL/test/constants.js ***!
  \*******************************/
/*! exports provided: GET_SYNC_REDUX_PROP_TYPE, INIT_ASYNC_REDUX_INFO, GET_ASYNC_REDUX_SAGA_PROP_TYPE, GET_ASYNC_REDUX_SAGA_PROP_TYPE_SUCCESS, STATIC_PROP_TEXT, SYNC_REDUX_PROP_TEXT, ASYNC_REDUX_SAGA_PROP_TEXT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SYNC_REDUX_PROP_TYPE", function() { return GET_SYNC_REDUX_PROP_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INIT_ASYNC_REDUX_INFO", function() { return INIT_ASYNC_REDUX_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ASYNC_REDUX_SAGA_PROP_TYPE", function() { return GET_ASYNC_REDUX_SAGA_PROP_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ASYNC_REDUX_SAGA_PROP_TYPE_SUCCESS", function() { return GET_ASYNC_REDUX_SAGA_PROP_TYPE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATIC_PROP_TEXT", function() { return STATIC_PROP_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYNC_REDUX_PROP_TEXT", function() { return SYNC_REDUX_PROP_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASYNC_REDUX_SAGA_PROP_TEXT", function() { return ASYNC_REDUX_SAGA_PROP_TEXT; });
const GET_SYNC_REDUX_PROP_TYPE = 'GET_SYNC_REDUX_PROP'

const INIT_ASYNC_REDUX_INFO = 'INIT_ASYNC_REDUX_INFO'
const GET_ASYNC_REDUX_SAGA_PROP_TYPE = 'GET_ASYNC_REDUX_SAGA_PROP'
const GET_ASYNC_REDUX_SAGA_PROP_TYPE_SUCCESS = 'GET_ASYNC_REDUX_SAGA_PROP_SUCCESS'

const STATIC_PROP_TEXT = 'Static message from getInitialProps()'
const SYNC_REDUX_PROP_TEXT = 'Synchronous message from Redux'
const ASYNC_REDUX_SAGA_PROP_TEXT = 'Asynchronous message from Redux-Saga'


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _BL_store_configure_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../BL/store/configure-store */ "../BL/store/configure-store.js");

var _jsxFileName = "/Users/stevensierra/Documents/next-redux-saga/UI/pages/_app.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var ExampleApp =
/*#__PURE__*/
function (_App) {
  _inherits(ExampleApp, _App);

  function ExampleApp() {
    _classCallCheck(this, ExampleApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(ExampleApp).apply(this, arguments));
  }

  _createClass(ExampleApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          store = _this$props.store;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
        store: store,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, _extends({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps({
                  ctx: ctx
                });

              case 5:
                pageProps = _context.sent;

              case 6:
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return ExampleApp;
}(next_app__WEBPACK_IMPORTED_MODULE_3___default.a);

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default()(_BL_store_configure_store__WEBPACK_IMPORTED_MODULE_5__["default"])(ExampleApp));

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map