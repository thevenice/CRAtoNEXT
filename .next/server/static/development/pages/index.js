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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_landingPage_Index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/landingPage/Index */ "./src/components/landingPage/Index.js");
var _jsxFileName = "E:\\Learning_HTML_CSS_JS\\JAVASCRIPT\\Projects\\ProperProjectsJS\\NextDevPage\\client\\pages\\index.js";


 // import Navbar from "../src/components/layout/navbar/Index";

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: " /okaybye\r ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Okay")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_landingPage_Index__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
});

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

/***/ "./src/components/landingPage/Index.js":
/*!*********************************************!*\
  !*** ./src/components/landingPage/Index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LandingPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LandingPage.js */ "./src/components/landingPage/LandingPage.js");

/* harmony default export */ __webpack_exports__["default"] = (_LandingPage_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/landingPage/LandingPage.js":
/*!***************************************************!*\
  !*** ./src/components/landingPage/LandingPage.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LandingStyled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LandingStyled */ "./src/components/landingPage/LandingStyled.jsx");
var _jsxFileName = "E:\\Learning_HTML_CSS_JS\\JAVASCRIPT\\Projects\\ProperProjectsJS\\NextDevPage\\client\\src\\components\\landingPage\\LandingPage.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


 // import Hero from "../Hero/Index";

var LandingPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LandingPage, _React$Component);

  function LandingPage() {
    _classCallCheck(this, LandingPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(LandingPage).apply(this, arguments));
  }

  _createClass(LandingPage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LandingStyled__WEBPACK_IMPORTED_MODULE_1__["MainTop"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LandingStyled__WEBPACK_IMPORTED_MODULE_1__["LandChild"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, "Welcome to DevPage "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, "We have some of the best Learner who are looking for their first project, let's explore the right one to team up with you.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LandingStyled__WEBPACK_IMPORTED_MODULE_1__["Div2"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "Div2")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LandingStyled__WEBPACK_IMPORTED_MODULE_1__["LandChild"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LandingStyled__WEBPACK_IMPORTED_MODULE_1__["Div3"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "Div3"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "BIG HEADING HERE"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum unde harum."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Team Creator")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LandingStyled__WEBPACK_IMPORTED_MODULE_1__["LandChild"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "NAME"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium quibusdam ipsum aperiam cum.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "NAME"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium quibusdam ipsum aperiam cum."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LandingStyled__WEBPACK_IMPORTED_MODULE_1__["LandChild"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "div7"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "div8")));
    }
  }]);

  return LandingPage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (LandingPage);

/***/ }),

/***/ "./src/components/landingPage/LandingStyled.jsx":
/*!******************************************************!*\
  !*** ./src/components/landingPage/LandingStyled.jsx ***!
  \******************************************************/
/*! exports provided: MainTop, LandChild, Div2, Div3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainTop", function() { return MainTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandChild", function() { return LandChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Div2", function() { return Div2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Div3", function() { return Div3; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GlobalStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GlobalStyle */ "./src/components/GlobalStyle.js");
function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  background-image: gold;\n  background-size: cover;\n  width: 100%;\n  @media (min-width: ", "px) {\n    /* height: 100%; */\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background-image: gold;\n  background-size: cover;\n  width: 100%;\n  height: 50%;\n  @media (min-width: ", "px) {\n    height: 100%;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n  height: 100vh;\n  padding: 5px 10px;\n  > div {\n    margin: auto;\n    padding: 0px 10px;\n    background-color: ", ";\n    height: 45vh;\n    h1 {\n      font-size: 1.2em;\n    }\n    p {\n      font-size: 0.7em;\n    }\n  }\n  @media (min-width: ", "px) {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr;\n    height: 100vh;\n    > div {\n      h1 {\n        font-size: 2em;\n      }\n      p {\n        font-size: 1.3em;\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto;\n  font-size: 30px;\n  /* * {\n    border: 1px solid ", ";\n  }\n  * > * {\n    border: 1px solid ", ";\n  } */\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


 // import bgdiv2 from "../../assets/images/benni-asal-752715-unsplash.jpg";

var MainTop = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject(), _GlobalStyle__WEBPACK_IMPORTED_MODULE_1__["theme"].gold, _GlobalStyle__WEBPACK_IMPORTED_MODULE_1__["theme"].gold);
var LandChild = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject2(), _GlobalStyle__WEBPACK_IMPORTED_MODULE_1__["theme"].gold, _GlobalStyle__WEBPACK_IMPORTED_MODULE_1__["sizes"].desktop);
var Div2 = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject3(), _GlobalStyle__WEBPACK_IMPORTED_MODULE_1__["theme"].desktop);
var Div3 = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject4(), _GlobalStyle__WEBPACK_IMPORTED_MODULE_1__["theme"].desktop);


/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

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
//# sourceMappingURL=index.js.map