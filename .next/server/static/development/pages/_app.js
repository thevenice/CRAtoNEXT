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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Page */ "./src/components/Page.js");
/* harmony import */ var _src_components_GlobalStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/GlobalStyle */ "./src/components/GlobalStyle.js");
var _jsxFileName = "E:\\Learning_HTML_CSS_JS\\JAVASCRIPT\\Projects\\ProperProjectsJS\\NextDevPage\\client\\pages\\_app.js";


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





var myApp =
/*#__PURE__*/
function (_App) {
  _inherits(myApp, _App);

  function myApp() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, myApp);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(myApp)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      name: "",
      username: "ikeoha_chidi",
      userPassword: "",
      password: "",
      confirmPassword: "",
      email: "",
      twitter: "",
      github: "",
      city: "",
      website: "",
      lang: "",
      fe_f: "",
      be_f: "",
      bio: "",
      other: [],
      currentId: "",
      highlight: false,
      navToggle: true,
      filterClose: true,
      signUpApply: true
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "value", {
      state: _this.state,
      onHandle: function onHandle(id) {
        _this.setState({
          currentId: id
        });
      },
      onChangeForm: function onChangeForm(e) {
        return _this.setState(_defineProperty({}, e.target.name, e.target.value));
      },
      onNavToggle: function onNavToggle() {
        !_this.state.navToggle ? _this.setState({
          navToggle: true
        }) : _this.setState({
          navToggle: false
        });
      },
      onDark: function onDark() {
        !_this.state.highlight ? _this.setState({
          highlight: true,
          navToggle: false
        }) : _this.setState({
          highlight: false,
          navToggle: false
        });
      },
      onFilterOpen: function onFilterOpen() {
        !_this.state.filterClose ? _this.setState({
          filterClose: true
        }) : _this.setState({
          filterClose: false
        });
      },
      onSignUp: function onSignUp() {
        !_this.state.signUpApply ? _this.setState({
          signUpApply: true
        }) : _this.setState({
          signUpApply: false
        });
      }
    });

    return _this;
  }

  _createClass(myApp, [{
    key: "render",
    value: function render() {
      var Component = this.props.Component;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_1__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, this.state.highlight ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_GlobalStyle__WEBPACK_IMPORTED_MODULE_3__["GlobalDark"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_GlobalStyle__WEBPACK_IMPORTED_MODULE_3__["GlobalStyle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Page__WEBPACK_IMPORTED_MODULE_2__["default"], {
        value: this.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      })));
    }
  }]);

  return myApp;
}(next_app__WEBPACK_IMPORTED_MODULE_1___default.a);

/* harmony default export */ __webpack_exports__["default"] = (myApp);

/***/ }),

/***/ "./src/components/GlobalStyle.js":
/*!***************************************!*\
  !*** ./src/components/GlobalStyle.js ***!
  \***************************************/
/*! exports provided: sizes, theme, GlobalStyle, GlobalDark */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizes", function() { return sizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyle", function() { return GlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalDark", function() { return GlobalDark; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\nhtml{\nbox-sizing:border-box;\n}\n*,*:before, *:after{\n  box-sizing:border-box;\n  \n}\nbody {  transition: all 200ms ease-in-out;\n  min-width: 360px;\n  background:", ";\n  box-sizing: border-box;\n   /* overflow-x: hidden; */\n  padding: 0;\n  margin: 0;\n  scroll-behavior: smooth;\n  -webkit-font-smoothing: antialiased;\n  text-align: center;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen,\n  Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-size:16px\n\n}\n\n.App2 {\n  /* //Universal Wrapper\n  this is main wrapper around whole app */\n  display: grid;\n  /* grid-template-columns: 2% 2fr 2%; */\n  grid-template-columns: 1fr;\n  grid-row-gap: 2rem;\n  background-color: inherit;\n  text-align: center;\n  position: relative;\n  margin: 0 auto;\n \n}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nhtml,html *{\n  color: #eeeeee !important;\n  background-color: ", " !important;\nbox-sizing:border-box;\n}\n*,*:before, *:after{\n  box-sizing:border-box;\n  \n}\n/* dev type */\n.P_Type{\n  color:", "!important\n}\nbody {\n/* img and videos */\nimg, video {z-index: 1}\n/* borders */\n* {border-color: ", " !important;\n  box-shadow:none!important;}\ncite, cite * {color: #029833 !important}\n:link, :link * {color: ", " !important}\ninput, textarea {background-color: #333333 !important}\n  a {color:", "!important;\n    background-color: rgba(255, 255, 255, 0.01) !important}\n:visited, :visited * {color: ", " !important}\nhtml, body, input, select, button {background-image: none !important}\n\nvideo {\n  background-color: transparent !important;\n}\n    transition: all 200ms ease-in-out;\n  min-width: 360px;\n  background:", ";\n  box-sizing: border-box;\n   /* overflow-x: hidden; */\n  padding: 0;\n  margin: 0;\n  scroll-behavior: smooth;\n  -webkit-font-smoothing: antialiased;\n  text-align: center;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen,\n  Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-size:16px\n\n}\n\n.App2 {\n  /* //Universal Wrapper\n  this is main wrapper around whole app */\n  display: grid;\n  /* grid-template-columns: 2% 2fr 2%; */\n  grid-template-columns: 1fr;\n  grid-row-gap: 2rem;\n  background-color: inherit;\n  text-align: center;\n  position: relative;\n  margin: 0 auto;\n \n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var sizes = {
  huge: 1440,
  gaint: 1172,
  desktop: 1080,
  tablet: 768,
  phone: 376
}; // red: "gold",
// redopa: "#f9e684",

var theme = {
  gold: "gold",
  goldbg: "#fff9d9",
  goldopa: "#f9e684",
  golddark: "#d5ad18",
  alinks: "#00f",
  white: "#fff",
  whiteHover: "#ececec42",
  whiteoff: "#f9f9f9",
  black: "#000",
  black2: "#2d2d2d",
  blackhover: "#2a2a2a",
  borderlight: "#bebebe",
  cardbg: "#a5a5a5",
  purpleDark: "#4527a0",
  purpleLight: "#9575cd",
  flowerBlueDark: "#263c63",
  darkModeBlack1: "#1a1a1a",
  darkModeBorder: "#313131"
}; // DARK MODE

var GlobalDark = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"])(_templateObject(), theme.darkModeBlack1, theme.gold, theme.darkModeBorder, theme.goldopa, theme.gold, theme.goldopa, theme.whiteoff);
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"])(_templateObject2(), theme.whiteoff);


/***/ }),

/***/ "./src/components/Page.js":
/*!********************************!*\
  !*** ./src/components/Page.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_navbar_Index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/navbar/Index */ "./src/components/layout/navbar/Index.jsx");
var _jsxFileName = "E:\\Learning_HTML_CSS_JS\\JAVASCRIPT\\Projects\\ProperProjectsJS\\NextDevPage\\client\\src\\components\\Page.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Page =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, _getPrototypeOf(Page).apply(this, arguments));
  }

  _createClass(Page, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_navbar_Index__WEBPACK_IMPORTED_MODULE_1__["default"], {
        value: this.props.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }), this.props.children);
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./src/components/layout/navbar/Index.jsx":
/*!************************************************!*\
  !*** ./src/components/layout/navbar/Index.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navbar_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.jsx */ "./src/components/layout/navbar/Navbar.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_Navbar_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/layout/navbar/Navbar.jsx":
/*!*************************************************!*\
  !*** ./src/components/layout/navbar/Navbar.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _GlobalStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../GlobalStyle */ "./src/components/GlobalStyle.js");
/* harmony import */ var _NavbarStyled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavbarStyled */ "./src/components/layout/navbar/NavbarStyled.jsx");
var _jsxFileName = "E:\\Learning_HTML_CSS_JS\\JAVASCRIPT\\Projects\\ProperProjectsJS\\NextDevPage\\client\\src\\components\\layout\\navbar\\Navbar.jsx";




 // import { Consumer } from "../../context";

var Navbar = function Navbar(props) {
  var navhidefun = function navhidefun(x, y) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: x,
      onClick: function onClick(_) {
        return value.onNavToggle();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, y));
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavbarStyled__WEBPACK_IMPORTED_MODULE_4__["NavTop"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GlobalStyle__WEBPACK_IMPORTED_MODULE_3__["GlobalStyle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavbarStyled__WEBPACK_IMPORTED_MODULE_4__["NavMain"], {
    className: "navbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavbarStyled__WEBPACK_IMPORTED_MODULE_4__["Nav1"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "DEVPAGE")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavbarStyled__WEBPACK_IMPORTED_MODULE_4__["Nav2"], {
    className: "nav2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "nav2A",
    onClick: function onClick(_) {
      return props.value.onNavToggle();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "="))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavbarStyled__WEBPACK_IMPORTED_MODULE_4__["NavHideOn"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavbarStyled__WEBPACK_IMPORTED_MODULE_4__["NavHide"], {
    className: !props.value.state.navToggle ? "hidden" : "notHidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, navhidefun("/", "Home"), navhidefun("/people", "People"), navhidefun("/signup", "Signup"), navhidefun("/dashboard", "Account"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavbarStyled__WEBPACK_IMPORTED_MODULE_4__["DarkLord"], {
    onClick: function onClick(_) {
      return props.value.onDark();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, !props.value.state.highlight ? "Light" : "Dark")))));
};

Navbar.deafultProps = {
  brand: "TITLE HERE"
};
Navbar.propTypes = {// brand: PropTypes.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/components/layout/navbar/NavbarStyled.jsx":
/*!*******************************************************!*\
  !*** ./src/components/layout/navbar/NavbarStyled.jsx ***!
  \*******************************************************/
/*! exports provided: NavTop, NavMain, Nav1, Nav2, NavHide, NavHideOn, DarkLord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavTop", function() { return NavTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMain", function() { return NavMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav1", function() { return Nav1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav2", function() { return Nav2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavHide", function() { return NavHide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavHideOn", function() { return NavHideOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DarkLord", function() { return DarkLord; });
/* harmony import */ var _GlobalStyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../GlobalStyle */ "./src/components/GlobalStyle.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  /* margin: auto; */\n  cursor: pointer;\n  background-color: inherit;\n  border: none;\n  color: ", ";\n  font-size: 2em;\n  font-weight: 400;\n  transition: all 600ms cubic-bezier(0.22, 0.61, 0.36, 1);\n  text-decoration: none;\n  outline: none;\n\n  @media (min-width: ", "px) {\n    font-size: 25px;\n    font-weight: 600;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: 1fr;\n  grid-column-gap: 1rem;\n  height: 100vh;\n  background-color: inherit;\n  font-family: \"Exo 2\", sans-serif;\n  /* text-transform: uppercase; */\n  font-size: 1.5em;\n  font-weight: 400;\n  border-bottom: 1px solid ", ";\n  transition: all 200ms linear;\n\n  div {\n    padding-bottom: 10px;\n    transition: a, button 200ms linear;\n    width: 100%;\n    /* box-shadow: 0px 1px 20px 2px #e0e0e0; */\n  }\n\n  a {\n    padding: 5px 15px;\n    transition: all 200ms linear;\n    color: ", ";\n    transition: all 200ms linear;\n    text-decoration: none;\n  }\n\n  @media (max-width: ", "px) {\n    text-align: end;\n    margin: 2em 1em;\n    overflow-y: hidden;\n    a,\n    button {\n      border-right: 3px solid ", ";\n    }\n    a:hover,\n    button:hover {\n      background-color: ", ";\n    }\n  }\n  @media (min-width: ", "px) {\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: 1fr;\n    height: auto;\n    grid-column-gap: 2rem;\n    font-size: 25px;\n    font-weight: 600;\n    text-align: auto;\n    margin: 0;\n    a:hover {\n      text-decoration: underline;\n      text-decoration-color: ", ";\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  justify-content: start;\n  align-items: center;\n  padding: 0;\n  margin: 0;\n  font-family: \"Anton\", sans-serif;\n  letter-spacing: 2px;\n  font-weight: 400;\n  text-shadow: 2px 2px ", ";\n  a {\n    color: ", "!important;\n    background-color: inherit;\n    border-radius: 2px;\n    font-size: 30px;\n    padding: 2px 5px;\n    /* margin-right: 2rem; */\n    /* padding: 8px 19px; */\n    z-index: 11;\n  }\n  @media (min-width: ", "px) {\n    padding: 0;\n    a {\n      font-size: 32px;\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  justify-content: end;\n  align-items: center;\n  padding: 0;\n  margin: 0;\n  button {\n    cursor: pointer;\n    color: ", "!important;\n    background-color: inherit;\n    border: 1px solid ", "!important;\n    border-radius: 2px;\n    font-size: 18px;\n    padding: 5px 15px;\n  }\n  button:hover {\n    background-color: ", ";\n  }\n  @media (min-width: ", "px) {\n    button {\n      display: none;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  background-color: inherit;\n  position: relative;\n  box-sizing: border-box;\n  grid-template-columns: 1fr minmax(100px, 300px);\n  grid-column-gap: 10px;\n  grid-row-gap: 0;\n  grid-template-rows: 1fr;\n  padding: 10px 20px;\n  margin: 0;\n  z-index: 111;\n  width: 100%;\n\n  a,\n  button {\n    text-decoration: none;\n    outline: none;\n  }\n  /* a:hover {\n    text-decoration: underline;\n    text-decoration-color: ", ";\n  } */\n  @media (max-width: ", "px) {\n    grid-template-columns: 2fr 10%;\n    grid-column-gap: 0rem;\n    /* padding: 15px; */\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-rows: auto;\n  grid-template-columns: 1fr;\n  background-color: ", ";\n  transition: all 600ms cubic-bezier(0.22, 0.61, 0.36, 1);\n\n  .hidden {\n    display: none;\n  }\n  @media (min-width: ", "px) {\n    /*  */\n    background-color: ", ";\n    .hidden {\n      display: grid;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


 // Nav_Top

var NavTop = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject(), _GlobalStyle__WEBPACK_IMPORTED_MODULE_0__["theme"].white, _GlobalStyle__WEBPACK_IMPORTED_MODULE_0__["sizes"].tablet, _GlobalStyle__WEBPACK_IMPORTED_MODULE_0__["theme"].white); // NAV_Main

var NavMain = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.nav(_templateObject2(), _GlobalStyle__WEBPACK_IMPORTED_MODULE_0__["theme"].alinks, _GlobalStyle__WEBPACK_IMPORTED_MODULE_0__["sizes"].tablet); // NAV2

var Nav2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3(), _GlobalStyle__WEBPACK_IMPORTED_MODULE_0__["theme"].golddark, _GlobalStyle__WEBPACK_IMPORTED_MODULE_0__["theme"].golddark, _GlobalStyle__WEBPACK_IMPORTED_MODULE_0__["theme"].whiteHover, _GlobalStyle__WEBPACK_IMPORTED_MODULE_0__["sizes"].tablet);
var Nav1 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1(_templateObject4(), _GlobalStyle__WEBPACK_IMPORTED_MODULE_0__["theme"].black2, _GlobalStyle__WEBPACK_IMPORTED_MODULE_0__["theme"].gold, _GlobalStyle__WEBPACK_IMPORTED_MODULE_0__["sizes"].tablet); // navHide Wrap

var NavHideOn = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject5());
var NavHide = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject6(), _GlobalStyle__WEBPACK_IMPORTED_MODULE_0__["theme"].borderlight, _GlobalStyle__WEBPACK_IMPORTED_MODULE_0__["theme"].black2, _GlobalStyle__WEBPACK_IMPORTED_MODULE_0__["sizes"].tablet, _GlobalStyle__WEBPACK_IMPORTED_MODULE_0__["theme"].goldopa, _GlobalStyle__WEBPACK_IMPORTED_MODULE_0__["theme"].whiteHover, _GlobalStyle__WEBPACK_IMPORTED_MODULE_0__["sizes"].tablet, _GlobalStyle__WEBPACK_IMPORTED_MODULE_0__["theme"].golddark);
var DarkLord = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button(_templateObject7(), _GlobalStyle__WEBPACK_IMPORTED_MODULE_0__["theme"].black2, _GlobalStyle__WEBPACK_IMPORTED_MODULE_0__["sizes"].tablet); // NAV1



/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

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

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map