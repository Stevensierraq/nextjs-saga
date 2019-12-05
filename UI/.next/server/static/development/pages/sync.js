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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/stevensierra/Documents/next-redux-saga/UI/components/layout.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





next_router__WEBPACK_IMPORTED_MODULE_3___default.a.onRouteChangeComplete = function () {
  document.querySelectorAll('.spinner').forEach(function (el) {
    el.classList.remove('spinner');
  });
};

var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(App)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (e) {
      e.preventDefault();
      e.target.classList.add('spinner');
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push(e.target.href);
    });

    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof window === 'undefined') return;
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.prefetch('/sync');
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.prefetch('/async');
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
        className: "jsx-3081138284",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/",
        onClick: this.handleClick,
        className: "jsx-3081138284",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Home"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/sync",
        onClick: this.handleClick,
        className: "jsx-3081138284",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Sync"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/async",
        onClick: this.handleClick,
        className: "jsx-3081138284",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Async"), this.props.children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2271305834",
        css: "main.jsx-3081138284{display:grid;grid-gap:2rem;grid-template-columns:repeat(3,1fr);}a.jsx-3081138284{padding:2rem;border:1px solid #333;border-radius:5px;color:#333;font-size:1.5rem;font-weight:bold;text-align:center;-webkit-text-decoration:none;text-decoration:none;text-transform:uppercase;}a.active.jsx-3081138284{background:#333;color:#fff;}a.jsx-3081138284:hover{-webkit-text-decoration:line-through;text-decoration:line-through;}section.jsx-3081138284{font-size:1.25rem;text-align:center;padding:10rem 0;border:1px solid #eee;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGV2ZW5zaWVycmEvRG9jdW1lbnRzL25leHQtcmVkdXgtc2FnYS9VSS9jb21wb25lbnRzL2xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q29CLEFBRzBCLEFBTUEsQUFZRyxBQUthLEFBSVgsYUExQkosQUFNUSxHQVlYLEVBU08sU0ExQm1CLEFBa0J2QyxRQVpvQixDQXFCRixnQkFDTSxDQXJCWCxVQU5iLENBT21CLEVBY25CLFFBT0EsT0FwQm1CLGlCQUNDLGtCQUNHLGtEQUNJLHlCQUMzQiIsImZpbGUiOiIvVXNlcnMvc3RldmVuc2llcnJhL0RvY3VtZW50cy9uZXh0LXJlZHV4LXNhZ2EvVUkvY29tcG9uZW50cy9sYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtub2RlfSBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuUm91dGVyLm9uUm91dGVDaGFuZ2VDb21wbGV0ZSA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNwaW5uZXInKS5mb3JFYWNoKGVsID0+IHtcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdzcGlubmVyJylcbiAgfSlcbn1cblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogbm9kZSxcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gICAgUm91dGVyLnByZWZldGNoKCcvc3luYycpXG4gICAgUm91dGVyLnByZWZldGNoKCcvYXN5bmMnKVxuICB9XG5cbiAgaGFuZGxlQ2xpY2sgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzcGlubmVyJylcbiAgICBSb3V0ZXIucHVzaChlLnRhcmdldC5ocmVmKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8bWFpbj5cbiAgICAgICAgPGEgaHJlZj1cIi9cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5cbiAgICAgICAgICBIb21lXG4gICAgICAgIDwvYT5cbiAgICAgICAgPGEgaHJlZj1cIi9zeW5jXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+XG4gICAgICAgICAgU3luY1xuICAgICAgICA8L2E+XG4gICAgICAgIDxhIGhyZWY9XCIvYXN5bmNcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5cbiAgICAgICAgICBBc3luY1xuICAgICAgICA8L2E+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC1nYXA6IDJyZW07XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgcGFkZGluZzogMnJlbTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGEuYWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzM7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMTByZW0gMDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICAgaHRtbCB7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBzeXN0ZW0tdWksIEJsaW5rTWFjU3lzdGVtRm9udCxcbiAgICAgICAgICAgICAgJ1NlZ29lIFVJJywgUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcmVtIDA7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBrZXlmcmFtZXMgc3Bpbm5lciB7XG4gICAgICAgICAgICB0byB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNwaW5uZXI6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYm9yZGVyOiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzMzMztcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc3Bpbm5lciAwLjhzIGVhc2UgaW5maW5pdGU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L21haW4+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuIl19 */\n/*@ sourceURL=/Users/stevensierra/Documents/next-redux-saga/UI/components/layout.js */",
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "810568527",
        css: "html{color:#333;font-family:-apple-system,system-ui,BlinkMacSystemFont, 'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;}section{font-size:1.25rem;text-align:center;padding:10rem 0;border:1px solid #eee;}@-webkit-keyframes spinner{to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spinner{to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}.spinner:before{content:'';box-sizing:border-box;position:absolute;top:20px;width:70px;height:70px;border-radius:50%;border:7px solid transparent;border-top-color:#333;border-bottom-color:#333;-webkit-animation:spinner 0.8s ease infinite;animation:spinner 0.8s ease infinite;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGV2ZW5zaWVycmEvRG9jdW1lbnRzL25leHQtcmVkdXgtc2FnYS9VSS9jb21wb25lbnRzL2xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRTJCLEFBR3dCLEFBTU8sQUFRUyxBQUtoQixXQWpCOEMsQUFrQm5DLE9BYkosZUFjQSxHQWJGLGVBY1AsQ0FiYSxRQWNYLFdBQ0MsR0FkZCxTQWVvQixJQVZsQixjQVc2QixrQkF2Qi9CLFdBd0J3QixzQkFDRyx5QkFDWSxrRkFDdkMiLCJmaWxlIjoiL1VzZXJzL3N0ZXZlbnNpZXJyYS9Eb2N1bWVudHMvbmV4dC1yZWR1eC1zYWdhL1VJL2NvbXBvbmVudHMvbGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7bm9kZX0gZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5cblJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGUgPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zcGlubmVyJykuZm9yRWFjaChlbCA9PiB7XG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnc3Bpbm5lcicpXG4gIH0pXG59XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IG5vZGUsXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICAgIFJvdXRlci5wcmVmZXRjaCgnL3N5bmMnKVxuICAgIFJvdXRlci5wcmVmZXRjaCgnL2FzeW5jJylcbiAgfVxuXG4gIGhhbmRsZUNsaWNrID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnc3Bpbm5lcicpXG4gICAgUm91dGVyLnB1c2goZS50YXJnZXQuaHJlZilcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPG1haW4+XG4gICAgICAgIDxhIGhyZWY9XCIvXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+XG4gICAgICAgICAgSG9tZVxuICAgICAgICA8L2E+XG4gICAgICAgIDxhIGhyZWY9XCIvc3luY1wiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PlxuICAgICAgICAgIFN5bmNcbiAgICAgICAgPC9hPlxuICAgICAgICA8YSBocmVmPVwiL2FzeW5jXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+XG4gICAgICAgICAgQXN5bmNcbiAgICAgICAgPC9hPlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIG1haW4ge1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtZ2FwOiAycmVtO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhLmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcmVtIDA7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgc3lzdGVtLXVpLCBCbGlua01hY1N5c3RlbUZvbnQsXG4gICAgICAgICAgICAgICdTZWdvZSBVSScsIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHJlbSAwO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAa2V5ZnJhbWVzIHNwaW5uZXIge1xuICAgICAgICAgICAgdG8ge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zcGlubmVyOmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJvcmRlcjogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogIzMzMztcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMzMzM7XG4gICAgICAgICAgICBhbmltYXRpb246IHNwaW5uZXIgMC44cyBlYXNlIGluZmluaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9tYWluPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcbiJdfQ== */\n/*@ sourceURL=/Users/stevensierra/Documents/next-redux-saga/UI/components/layout.js */",
        __self: this
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

_defineProperty(App, "propTypes", {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2__["node"]
});

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/stevensierra/Documents/next-redux-saga/UI/index.js";

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/prop-types */



function withReduxSaga(BaseComponent) {
  var WrappedComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(WrappedComponent, _Component);

    function WrappedComponent() {
      _classCallCheck(this, WrappedComponent);

      return _possibleConstructorReturn(this, _getPrototypeOf(WrappedComponent).apply(this, arguments));
    }

    _createClass(WrappedComponent, [{
      key: "render",
      value: function render() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BaseComponent, _extends({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }));
      }
    }], [{
      key: "getInitialProps",
      value: function () {
        var _getInitialProps = _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
          var _props$ctx, isServer, store, pageProps;

          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _props$ctx = props.ctx, isServer = _props$ctx.isServer, store = _props$ctx.store;
                  pageProps = {};

                  if (!BaseComponent.getInitialProps) {
                    _context.next = 6;
                    break;
                  }

                  _context.next = 5;
                  return BaseComponent.getInitialProps(props);

                case 5:
                  pageProps = _context.sent;

                case 6:
                  if (!isServer) {
                    _context.next = 10;
                    break;
                  }

                  store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_2__["END"]);
                  _context.next = 10;
                  return store.sagaTask.toPromise();

                case 10:
                  return _context.abrupt("return", pageProps);

                case 11:
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

    return WrappedComponent;
  }(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

  _defineProperty(WrappedComponent, "displayName", "withReduxSaga(".concat(BaseComponent.displayName || BaseComponent.name || 'BaseComponent', ")"));

  return WrappedComponent;
}

/* harmony default export */ __webpack_exports__["default"] = (withReduxSaga);

/***/ }),

/***/ "./pages/sync.js":
/*!***********************!*\
  !*** ./pages/sync.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .. */ "./index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _BL_test_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../BL/test/constants */ "../BL/test/constants.js");
var _jsxFileName = "/Users/stevensierra/Documents/next-redux-saga/UI/pages/sync.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var SyncExample =
/*#__PURE__*/
function (_Component) {
  _inherits(SyncExample, _Component);

  function SyncExample() {
    _classCallCheck(this, SyncExample);

    return _possibleConstructorReturn(this, _getPrototypeOf(SyncExample).apply(this, arguments));
  }

  _createClass(SyncExample, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          staticProp = _this$props.staticProp,
          syncReduxProp = _this$props.syncReduxProp,
          asyncReduxSagaProp = _this$props.asyncReduxSagaProp;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Received ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "static"), " prop:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, staticProp))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Received ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "synchronous"), " Redux prop:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, syncReduxProp))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Received ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "asynchronous"), " Redux-Saga prop:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, asyncReduxSagaProp || ''))));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var store = _ref.ctx.store;
      store.dispatch({
        type: _BL_test_constants__WEBPACK_IMPORTED_MODULE_5__["GET_SYNC_REDUX_PROP_TYPE"],
        data: _BL_test_constants__WEBPACK_IMPORTED_MODULE_5__["SYNC_REDUX_PROP_TEXT"]
      });
      return {
        staticProp: _BL_test_constants__WEBPACK_IMPORTED_MODULE_5__["STATIC_PROP_TEXT"]
      };
    }
  }]);

  return SyncExample;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(SyncExample, "propTypes", {
  staticProp: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  syncReduxProp: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  asyncReduxSagaProp: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]
});

/* harmony default export */ __webpack_exports__["default"] = (Object(___WEBPACK_IMPORTED_MODULE_3__["default"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (state) {
  return state;
})(SyncExample)));

/***/ }),

/***/ 4:
/*!*****************************!*\
  !*** multi ./pages/sync.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/sync.js */"./pages/sync.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

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

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=sync.js.map